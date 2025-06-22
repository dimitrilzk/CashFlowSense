using CashFlowSense.Models.Requests.User;
using CashFlowSense.Models.Responses.User;

namespace CashFlowSense.Services.Interfaces
{
    public interface IUserService
    {
        /// <summary>
        /// Registers a new user with the provided details.
        /// </summary>
        /// <param name="request">The registration request containing user details.</param>
        /// <returns>A response containing the registered user's details or an error message.</returns>
        Task<RegisterUserResponse> RegisterUserAsync(RegisterUserRequest request);

        /// <summary>
        /// Checks if a user with the specified email already exists.
        /// </summary>
        /// <param name="email">The email to check for existing users.</param>
        /// <returns>True if a user with the email exists, otherwise false.</returns>
        Task<bool> UserExistsAsync(string email);
    }
}
