namespace HoldEmSimulator.DAL
{
    using Microsoft.EntityFrameworkCore;
    using Models;

    public class HoldEmDbContext : DbContext
    {
        public HoldEmDbContext(
            DbContextOptions<HoldEmDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Server=.;Database=TexasSimulatorDb;Integrated Security=True;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}
