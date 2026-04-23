using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(o =>
    o.AddDefaultPolicy(p => p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin())
);

var app = builder.Build();
app.UseCors();

// string rawData = File.ReadAllText("/home/tasty/Desktop/SoH-Blair-Foxtrot-Linux/Save/file1.sav");

// List<int> gsFlags = new();
Dictionary<string, string> gsFlags = new()
{
    ["forestTemple"] = "",
    ["jabuJabuBelly"] = "",
    ["dodongoCavern"] = "",
    ["dekuTree"] = "",

    ["shadowTemple"] = "",
    ["spiritTemple"] = "",
    ["waterTemple"] = "",
    ["fireTemple"] = "",

    ["lonLonRanch"] = "",
    ["hyruleField"] = "",
    ["iceCavern"] = "",
    ["well"] = "",

    ["deathMountain"] = "",
    ["castle"] = "",
    ["lostWoods"] = "",
    ["kokiriForest"] = "",

    ["gerudoValley"] = "",
    ["lakeHylia"] = "",
    ["zora"] = "",
    ["kakarikoVillage"] = "",

    ["Unused2"] = "",
    ["Unused1"] = "",
    ["desert"] = "",
    ["gerudoFortress"] = "",
};

string[] gsFlagStrings = [];
int[] gsFlagInts = [];

app.MapGet("/", () => "You shouldn't have done that.");

app.MapGet(
    "/FileReader",
    () =>
    {
        return gsFlags;
    }
);
app.MapGet(
    "/FileStrings",
    () =>
    {
        return gsFlagStrings;
    }
);
app.MapGet(
    "/FileGSCount",
    () =>
    {
        if (File.Exists("./Save/CurrentSave.sav"))
        {
            string rawData = File.ReadAllText("./Save/CurrentSave.sav");
            string splitCount = rawData.Split("\"gsTokens\": ")[1];
            string justTheNumber = splitCount.Split(",")[0];
            return int.Parse(justTheNumber);
        }
        else
        {
            return -1;
        }
    }
);
app.MapPost(
        "/FileStringsReader",
        (IFormFile saveFile) =>
        {
            using (var stream = new FileStream("./Save/CurrentSave.sav", FileMode.Create))
            {
                saveFile.CopyTo(stream);
            }
            string rawData = File.ReadAllText($"./Save/CurrentSave.sav");
            string splitAtGSFlags = rawData.Split("\"gsFlags\": [\n     ")[1];
            string justTheNumbers = splitAtGSFlags.Split("\n    ],")[0];
            gsFlagStrings = justTheNumbers.Split(",\n     ");
            // "00000001000000010000000100000001".Split("");
            // foreach (string gsFlagString in gsFlagStrings)
            // {
            //     //
            // }
        }
    )
    .DisableAntiforgery();

app.MapPost(
    "/FileBinarySplitter",
    (int[] ints) =>
    {
        gsFlagInts = ints;
    }
);
app.MapGet(
    "/SplitBinaryStrings",
    () =>
    {
        List<string> gsFlagBinaryStrings = new();
        foreach (var intGroup in gsFlagInts)
        {
            gsFlagBinaryStrings.Add(Convert.ToString(intGroup, 2).PadLeft(32, '0'));
        }
        List<string> gsFlagBinaryAreas = new();
        // I couldn't figure out how to make it split the strings every nth character.
        foreach (string binaryStringGroup in gsFlagBinaryStrings)
        {
            List<char> area1 = new();
            List<char> area2 = new();
            List<char> area3 = new();
            List<char> area4 = new();
            for (int i = 0; i < 32; i++)
            {
                char currentCharacter = binaryStringGroup[i];
                if (i < 8)
                {
                    area1.Add(currentCharacter);
                    if (i == 7)
                    {
                        gsFlagBinaryAreas.Add(new string(area1.ToArray()));
                    }
                }
                else if (i < 16)
                {
                    area2.Add(currentCharacter);
                    if (i == 15)
                    {
                        gsFlagBinaryAreas.Add(new string(area2.ToArray()));
                    }
                }
                else if (i < 24)
                {
                    area3.Add(currentCharacter);
                    if (i == 23)
                    {
                        gsFlagBinaryAreas.Add(new string(area3.ToArray()));
                    }
                }
                else
                {
                    area4.Add(currentCharacter);
                    if (i == 31)
                    {
                        gsFlagBinaryAreas.Add(new string(area4.ToArray()));
                    }
                }
            }
        }
        int n = 0;
        foreach (var area in gsFlags)
        {
            gsFlags[area.Key] = gsFlagBinaryAreas[n];
            n++;
        }
        return gsFlags;
    }
);

// app.MapPost("/test", (string thing) =>
// {
//     Console.WriteLine(thing);
// });
// app.MapGet("/test", () => new { k = "K" });

app.Run();

// public record FilePathThing(string path);
