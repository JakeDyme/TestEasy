using Microsoft.EntityFrameworkCore;
using TestEasy.Data.Models;

namespace TestEasy.Data
{
	public class TestEasyDbContext : DbContext
	{
		
		public TestEasyDbContext(DbContextOptions<TestEasyDbContext> options) : base(options)
		{
		}

		public DbSet<DbAction> DbActions { get; set; }
		public DbSet<DbTest> DbTest { get; set; }
		public DbSet<DbSetup> DbSetup { get; set; }
		public DbSet<DbRoutine> DbRoutine { get; set; }

	}
}
