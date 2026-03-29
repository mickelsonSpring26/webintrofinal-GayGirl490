using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(o =>
    o.AddDefaultPolicy(p =>
        p.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
    )
);

var app = builder.Build();
app.UseCors();

app.MapGet("/", () => "You shouldn't have done that.");

app.Run();
