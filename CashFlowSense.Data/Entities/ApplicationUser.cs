using Microsoft.AspNetCore.Identity;

namespace CashFlowSense.Data.Entities
{
    public class ApplicationUser() : IdentityUser
    {
        public required string FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
