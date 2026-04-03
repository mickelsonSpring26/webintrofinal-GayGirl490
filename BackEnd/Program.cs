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

// string rawData = File.ReadAllText("/home/tasty/Desktop/SoH-Blair-Foxtrot-Linux/Save/file1.sav");

app.MapGet("/", () => "You shouldn't have done that.");

app.MapGet("/FileReader", () =>
{
    string rawData = File.ReadAllText("CurrentSave.sav");
    string splitAtGSFlags = rawData.Split("\"gsFlags\": [\n     ")[1];
    string justTheNumbers = splitAtGSFlags.Split("\n    ],")[0];
    string[] gsFlagStrings = justTheNumbers.Split(",\n     ");
    List<int> gsFlags = new();
    foreach(string gsFlagString in gsFlagStrings)
    {
        gsFlags.Add(int.Parse(gsFlagString));
    }
    return gsFlags;
});
app.MapPost("/FileReader", (FilePathThing filePath) =>
    {
        string saveFileContent = File.ReadAllText(filePath.path);
        File.WriteAllText("CurrentSave.sav", saveFileContent);
    }
);

// app.MapPost("/test", (string thing) =>
// {
//     Console.WriteLine(thing);
// });

app.Run();

public record FilePathThing(string path);