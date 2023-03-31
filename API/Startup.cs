using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using QAForum.Models;
using System.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;



namespace QAForum
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void Configure(IApplicationBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<QAContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            // other service configurations...
        }
    }
}
