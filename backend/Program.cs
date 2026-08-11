using backend.Data;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;


var builder = WebApplication.CreateBuilder(args);

var connections =
    "server=localhost;database=phone_db;user=root;password=sitaram";


builder.Services.AddDbContext<AppDbContext>(options =>
options.UseMySql(
    connections,
    ServerVersion.AutoDetect(connections)
)

);

builder.Services.AddCors(optiots =>
{
    optiots.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();

    });
});

builder.Services.AddControllers();


var app = builder.Build();
app.UseCors("AllowReact");
app.MapControllers();
app.Run();

