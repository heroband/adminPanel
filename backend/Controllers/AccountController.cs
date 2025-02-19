using backend.Dtos.Account;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;

        public AccountController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = new User { UserName = model.Email, Email = model.Email };

            var createdUser = await _userManager.CreateAsync(user, model.Password);

            if (createdUser.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "User");

                return Ok(createdUser);
            }
            else
            {
                return StatusCode(500, createdUser.Errors);
            }
        }
    }
}
