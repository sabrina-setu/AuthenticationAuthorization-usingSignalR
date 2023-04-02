using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SignalR.Core.Entities.Auth;

namespace SignalR.Infrastructure.EntityConfigurations.Auth;

internal class ApplicationUserConfiguration : IEntityTypeConfiguration<ApplicationUser>
{
    public void Configure(EntityTypeBuilder<ApplicationUser> builder)
    {
        builder.Property(x => x.FirstName).IsRequired().HasMaxLength(20);
        builder.Property(x => x.LastName).IsRequired().HasMaxLength(20);
    }
}
