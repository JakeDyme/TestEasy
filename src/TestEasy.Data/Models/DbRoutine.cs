namespace TestEasy.Data.Models
{
	public class DbRoutine
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public static DbRoutine BuildNew()
		{
			return new DbRoutine();
		}
	}
}
