namespace CashFlowSense.Models.Responses.User
{
    public class RegisterUserResponse
    {
        public bool IsSuccess { get; set; }
        public string? ErrorMessage { get; set; }
        public RegisterUserData? Data { get; set; }
    }

    public class RegisterUserData
    {
        public required string FirstName { get; set; }
        public string? LastName { get; set; }
        public required string Email { get; set; }
        public required string UserId { get; set; }
        public required DateTime CreatedAt { get; set; }
    }
}
