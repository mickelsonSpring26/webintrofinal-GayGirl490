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

string rawData = File.ReadAllText("/home/tasty/Desktop/SoH-Blair-Foxtrot-Linux/Save/file1.sav");

app.MapGet("/", () => "You shouldn't have done that.");
// app.MapPost("/FileReader", (string path) =>
//     saveFileContent = File.ReadAllText(path)
// );
app.MapGet("/FileReader", () =>
{
    string splitAtGSFlags = rawData.Split("\"gsFlags\": [\n     ")[1];
    string justTheNumbers = splitAtGSFlags.Split("\n    ],")[0];
    string[] gsFlagStrings = justTheNumbers.Split(",\n     ");
    List<int> gsFlagInts = new();
    foreach(var gsFlagString in gsFlagStrings)
    {
        gsFlagInts.Add(int.Parse(gsFlagString));
    }
    return new { gsFlags = gsFlagInts };
});

app.Run();

// public record gsFlag(int flag);