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

    readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {

      services.AddDbContext<TestEasyDbContext>(options => {
        options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
      });

      services.AddScoped<IExecutionContext, ExecutionContext>();
      services.AddScoped<IActionsProvider, ActionsProvider>();

      services.AddScoped<ITestsService, TestsService>();
      services.AddScoped<IRoutinesService, RoutinesService>();
      services.AddScoped<ISetupsService, SetupsService>();
      services.AddScoped<IActionsService, ActionService>();

      services.AddCors(options =>
      {
        options.AddPolicy(MyAllowSpecificOrigins,
        builder =>
        {
          builder.WithOrigins("http://localhost:3000");
        });
      });

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

      app.UseCors(MyAllowSpecificOrigins);

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
