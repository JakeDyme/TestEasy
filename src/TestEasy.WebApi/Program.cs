using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElectronCgi.DotNet;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace TestEasy.WebApi
{
  public class Program
  {
    public static void Main(string[] args)
    {
      /// Electron IPC connection...
      var connection = new ConnectionBuilder()
        .WithLogging()
        .Build();
      connection.On<string, string>("ipc-ack", name => "TestEasy-API acknowledges: " + name);
      Task handler = new Task(() => { /*Some ipc-related logic*/ });
      connection.OnAsync("ipc", async () => { await handler; });
      Task.Run(() => connection.Listen());

      /// WebApi...
      CreateHostBuilder(args).Build().Run();

    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
              webBuilder.UseStartup<Startup>();
            });
  }
}
