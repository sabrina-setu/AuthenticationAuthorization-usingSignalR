using Microsoft.AspNetCore.Identity;

namespace SignalR.Core.Entities.Auth;

public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
}
