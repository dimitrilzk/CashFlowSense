using Microsoft.AspNetCore.Mvc;

namespace CashFlowSense.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        // DRY - uno questo controller per non ripetere la route e api controller
    }
}
