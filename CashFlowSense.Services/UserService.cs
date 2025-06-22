using CashFlowSense.Data.Entities;
using CashFlowSense.Models.Requests.User;
using CashFlowSense.Models.Responses.User;
using CashFlowSense.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace CashFlowSense.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        
        public UserService(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> UserExistsAsync(string email)
        {
            return await _userManager.FindByEmailAsync(email) != null;
        }

        public async Task<RegisterUserResponse> RegisterUserAsync(RegisterUserRequest request)
        {
            if (request.Password != request.ConfirmPassword)
            {
                return new RegisterUserResponse
                {
                    IsSuccess = false,
                    ErrorMessage = "Le password non coincidono."
                };
            }

            if(await UserExistsAsync(request.Email))
            {
                return new RegisterUserResponse
                {
                    IsSuccess = false,
                    ErrorMessage = "Un utente con questa email esiste già."
                };
            }

            var user = new ApplicationUser
            {
                FirstName = request.FirstName,
                LastName = string.IsNullOrWhiteSpace(request.LastName) ? null : request.LastName,
                Email = request.Email,
                UserName = request.Email,
                CreatedAt = DateTime.UtcNow
            };

            var result = await _userManager.CreateAsync(user, request.Password);

            if (!result.Succeeded)
            {
                return new RegisterUserResponse
                {
                    IsSuccess = false,
                    ErrorMessage = string.Join(", ", result.Errors.Select(e => e.Description))
                };
            }

            return new RegisterUserResponse
            {
                IsSuccess = true,
                Data = new RegisterUserData
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    UserId = user.Id,
                    CreatedAt = DateTime.UtcNow
                }
            };
        }
    }
}
