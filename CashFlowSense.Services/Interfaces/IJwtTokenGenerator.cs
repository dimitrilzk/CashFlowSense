using CashFlowSense.Data.Entities;

namespace CashFlowSense.Services.Interfaces
{
    public interface IJwtTokenGenerator
    {
        string GenerateToken(ApplicationUser user);
    }
}
