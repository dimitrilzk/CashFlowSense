using Microsoft.AspNetCore.Identity;

namespace CashFlowSense.Data.Identity
{
    public class ApplicationUser(string name) : IdentityUser
    {
        // Necessario per EF Core
        public ApplicationUser() : this(string.Empty) { }    

        public string Name { get; set; } = name;
        public string? LastName { get; set; }
    }
}
