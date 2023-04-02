using SignalR.Core.Entities.Auth;

namespace SignalR.Application.UseCase.Account;

public interface ITokenGenerator
{
    public string GenerateToken(ApplicationUser user);
}
