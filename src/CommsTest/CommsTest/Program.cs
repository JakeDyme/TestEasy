using System;
using System.Threading.Tasks;
using ElectronCgi.DotNet;

namespace CommsTest
{
  class Program
  {
    static void Main(string[] args)
    {
      var connection = new ConnectionBuilder()
        .WithLogging()
        .Build();

      connection.On<string, string>("ipc-ack", name => "TestEasy-API acknowledges: " + name);
      Task handler = new Task(() => { });
      connection.OnAsync("ipc", async () => { await handler; });
      connection.Listen();
    }
  }
}
