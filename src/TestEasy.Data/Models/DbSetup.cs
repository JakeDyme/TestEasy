namespace TestEasy.Data.Models
{
	public class DbSetup
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public static DbSetup BuildNew()
		{
			return new DbSetup();
		}
	}
}
