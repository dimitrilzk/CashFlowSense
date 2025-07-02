namespace CashFlowSense.Models.Responses.User
{
    public class LoginUserResponse
    {
        public bool IsSuccess { get; set; }
        public string? ErrorMessage { get; set; }
        public LoginUserData? Data { get; set; }
    }

    public class LoginUserData
    {
        public required string FirstName { get; set; }
        public required string Email { get; set; }
        public required string UserId { get; set; }
        public required string Token { get; set; }
    }
}
