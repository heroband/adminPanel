using Microsoft.AspNetCore.Identity;

namespace backend.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(IdentityUser user, IList<string> roles);
    }
}
