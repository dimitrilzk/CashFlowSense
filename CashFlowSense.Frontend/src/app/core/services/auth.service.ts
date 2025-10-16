import { inject, Injectable, signal } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface RegisterUserRequest {
  name: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: string;
  email: string;
  token: string;
  message?: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  userId: string;
  email: string;
  token: string;
  expiresIn: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  lastName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpBaseService {
  private router = inject(Router);

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  public isAuthenticated = signal<boolean>(false);

  constructor() {
    super();
    this.checkStoredAuth();
  }

  // check if exist token
  private checkStoredAuth(): void {
    const token = localStorage.getItem('auth_token');
    const userJson = localStorage.getItem('current_user');

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson) as User;
        this.currentUserSubject.next(user);
        this.isAuthenticated.set(true);
      } catch (e) {
        this.logout();
      }
    }
  }

  // register a new user
  register(userData: RegisterUserRequest): Observable<RegisterUserResponse> {
    return this.post<RegisterUserResponse>('/User/register', userData).pipe(
      tap((resp) => {
        if (resp.token) {
          this.saveAuthData(resp.token, {
            id: resp.id,
            email: resp.email,
            name: userData.name,
            lastName: userData.lastName,
          });
        }
      })
    );
  }

  // login user
  login(credentials: LoginUserRequest): Observable<LoginUserResponse> {
    return this.post<LoginUserResponse>('/User/login', credentials).pipe(
      tap((resp) => {
        this.saveAuthData(resp.token, {
          id: resp.userId,
          email: resp.email,
          name: '', // i can recive it from backend
        });
      })
    );
  }

  // logout user
  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_user');
    this.currentUserSubject.next(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  // save auth data in local storage
  private saveAuthData(token: string, user: User): void {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('current_user', JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.isAuthenticated.set(true);
  }

  // get current user
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // user is logged?
  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }
}
