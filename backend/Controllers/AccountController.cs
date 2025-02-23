using backend.Dtos.Account;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;

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

            var user = new User { UserName = model.UserName, Email = model.Email };

            var createdUser = await _userManager.CreateAsync(user, model.Password);

            if (createdUser.Succeeded)
            {
                var roleResult = await _userManager.AddToRoleAsync(user, "User");

                if (roleResult.Succeeded)
                {
                    return Ok(new { message = "User successfully registered" });
                }
                else
                {
                    return BadRequest(new { errors = roleResult.Errors.Select(e => e.Description) });
                }
            }
            else
            {
                return BadRequest(new { errors = createdUser.Errors.Select(e => e.Description) });
            }
        }
    }
}
