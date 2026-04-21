// For these, I'm just going to Ctrl+C, Ctrl+V from https://www.zeldadungeon.net/wiki/Ocarina_of_Time_Gold_Skulltulas to save time on writing descriptions.
// time of day: 1(01) = night; 2(10) = day; 3(11) = both;
// era: 1(01) = past; 2(10) = future; 3(11) = both;

const skulltulaData = [
  {
    number: 1,
    areaType: "dungeons",
    area: "dekuTree",
    specificArea: "Deku Tree",
    index: 4,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-001.jpg",
    description:
      "In the same room with Compass, raise the platforms and use them to get onto the platform on the left side. The Skulltula is right behind the treasure chest.",
  },
  {
    number: 2,
    areaType: "dungeons",
    area: "dekuTree",
    specificArea: "Deku Tree",
    index: 5,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-002.jpg",
    description:
      "After breaking through the spider web and reaching the lower floor of the Great Deku Tree, turn back and look at the vines leading up. Shoot down the Skulltula with the Slingshot.",
  },
  {
    number: 3,
    areaType: "dungeons",
    area: "dekuTree",
    specificArea: "Deku Tree",
    index: 6,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-003.jpg",
    description:
      "After breaking through the spider web and reaching the lower floor of the Great Deku Tree, look at the grating at the north end of the room to find another Skulltula.",
  },
  {
    number: 45,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Kakariko Village",
    index: 1,
    timeOfDay: 1,
    era: 2,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-045.jpg",
    description:
      "The Gold Skulltula is located on top of Impa's House in Kakariko Village. Make your way to the south end of Kakariko Village, next to Impa's House. From here, Hookshot onto the roof of the Skulltula House and then Hookshot onto the roof of Impa's House. At nighttime, you will find a Gold Skulltula located here.",
  },
];

export const GetSkulltulasData = () => {
  return skulltulaData;
};
