using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(o =>
    o.AddDefaultPolicy(p => p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin())
);

var app = builder.Build();
app.UseCors();

// string rawData = File.ReadAllText("/home/tasty/Desktop/SoH-Blair-Foxtrot-Linux/Save/file1.sav");

List<int> gsFlags = new();

app.MapGet("/", () => "You shouldn't have done that.");

app.MapGet(
    "/FileReader",
    () =>
    {
        return gsFlags;
    }
);
app.MapPost(
    "/FileReader",
    (FilePathThing filePath) =>
    {
        // string saveFileContent = File.ReadAllText(filePath.path);
        // File.WriteAllText("CurrentSave.sav", saveFileContent);
        // string rawData = File.ReadAllText("CurrentSave.sav");
        gsFlags = [];
        string rawData = File.ReadAllText(filePath.path);
        string splitAtGSFlags = rawData.Split("\"gsFlags\": [\n     ")[1];
        string justTheNumbers = splitAtGSFlags.Split("\n    ],")[0];
        string[] gsFlagStrings = justTheNumbers.Split(",\n     ");
        foreach (string gsFlagString in gsFlagStrings)
        {
            gsFlags.Add(int.Parse(gsFlagString));
        }
    }
);

// app.MapPost("/test", (string thing) =>
// {
//     Console.WriteLine(thing);
// });
// app.MapGet("/test", () => new { k = "K" });

app.Run();

public record FilePathThing(string path);
