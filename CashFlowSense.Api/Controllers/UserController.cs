using CashFlowSense.Models.Requests.User;
using CashFlowSense.Models.Responses.User;
using CashFlowSense.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CashFlowSense.Api.Controllers
{
    public class UserController(IUserService userService) : BaseApiController
    {
        [HttpPost("register")]
        public async Task<ActionResult<RegisterUserResponse>> RegisterUser(RegisterUserRequest request)
        {
            return Ok(await userService.RegisterUserAsync(request));
        }

        [HttpPost("login")]
        public async Task<ActionResult<LoginUserResponse>> LoginUser(LoginUserRequest request)
        {
            return Ok(await userService.LoginUserAsync(request));
        }
    }
}
