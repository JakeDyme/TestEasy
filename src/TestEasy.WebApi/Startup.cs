using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TestEasy.Actuators.ChromeDriver.Services;
using TestEasy.Contracts;
using TestEasy.Data;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Services;

namespace TestEasy.WebApi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {

      services.AddDbContext<TestEasyDbContext>(options =>
              options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));


      services.AddScoped<IExecutionContext, ExecutionContext>();
      services.AddScoped<IActionsProvider, ActionsProvider>();
      services.AddScoped<IActionsService, ActionsService>();

      services.AddControllers();

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
