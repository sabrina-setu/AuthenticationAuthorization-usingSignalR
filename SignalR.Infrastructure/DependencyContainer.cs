using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SignalR.Application.UseCase.Account;
using SignalR.Core.Entities.Auth;
using SignalR.Infrastructure.DbContexts;
using SignalR.Infrastructure.Services.Account;

namespace SignalR.Infrastructure;

public static class DependencyContainer
{
    public static void AddAuthenticationDependencies(this IServiceCollection services)
    {
        services.AddIdentity<ApplicationUser, IdentityRole>(opt =>
        {
            opt.SignIn.RequireConfirmedEmail = false;
            opt.SignIn.RequireConfirmedPhoneNumber = false;
            opt.SignIn.RequireConfirmedAccount = false;
            opt.User.RequireUniqueEmail = true;

            opt.Password.RequiredUniqueChars = 0;
            opt.Password.RequireNonAlphanumeric = false;
            opt.Password.RequiredLength = 8;
            opt.Password.RequireDigit = false;
            opt.Password.RequireLowercase = false;
            opt.Password.RequireUppercase = false;
        })
            .AddEntityFrameworkStores<ApplicationDBContext>()
            .AddDefaultTokenProviders();
    }
    public static void AddInfrastructureDependencies(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDBContext>(options =>
        options.UseSqlServer(configuration.GetConnectionString("SignalRConnection"),
        b => b.MigrationsAssembly(typeof(ApplicationDBContext).Assembly.FullName)), ServiceLifetime.Scoped);

        services.AddScoped<ITokenGenerator, TokenGeneratorService>();
    }
}
