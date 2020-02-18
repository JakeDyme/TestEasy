using Microsoft.EntityFrameworkCore;
using TestEasy.Data.Models;

namespace TestEasy.Data
{
	public class TestEasyDbContext : DbContext
	{
		
		public TestEasyDbContext(DbContextOptions<TestEasyDbContext> options) : base(options)
		{
		}

		public DbSet<DbTest> DbTest { get; set; }
		public DbSet<DbSetup> DbSetup { get; set; }
		public DbSet<DbRoutine> DbRoutine { get; set; }
		public DbSet<DbAction> DbAction { get; set; }
		public DbSet<DbField> DbField { get; set; }

		public DbSet<DbTestAction> DbTestAction { get; set; }
		public DbSet<DbTestActionParameter> DbTestActionParameter { get; set; }

		public DbSet<DbTestField> DbTestField { get; set; }
		public DbSet<DbTestFieldParameter> DbTestFieldParameter { get; set; }

	}
}
