// For these, I'm just going to Ctrl+C, Ctrl+V from https://www.zeldadungeon.net/wiki/Ocarina_of_Time_Gold_Skulltulas to save time on writing descriptions.
// time of day: 1(01) = night; 2(10) = day; 3(11) = both;
// era: 1(01) = past; 2(10) = future; 3(11) = both;

const skulltulaData = [
  {
    number: 1,
    areaType: "dungeons",
    area: "dekuTree",
    specificArea: "Inside the Deku Tree",
    index: 4,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-001.jpg",
    description:
      "In the same room with Compass, raise the platforms and use them to get onto the platform on the left side. The Skulltula is right behind the treasure chest.",
    requiredItems: [],
  },
  {
    number: 2,
    areaType: "dungeons",
    area: "dekuTree",
    specificArea: "Inside the Deku Tree",
    index: 5,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-002.jpg",
    description:
      "After breaking through the spider web and reaching the lower floor of the Great Deku Tree, turn back and look at the vines leading up. Shoot down the Skulltula with the Slingshot.",
    requiredItems: ["Slingshot"],
  },
  {
    number: 3,
    areaType: "dungeons",
    area: "dekuTree",
    specificArea: "Inside the Deku Tree",
    index: 6,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-003.jpg",
    description:
      "After breaking through the spider web and reaching the lower floor of the Great Deku Tree, look at the grating at the north end of the room to find another Skulltula.",
    requiredItems: [],
  },
  {
    number: 6,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Graveyard",
    index: 7,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-006.jpg",
    description:
      "In the Graveyard, there is a soft soil location on the left side. Drop some bugs from a bottle to get a Skulltula to pop out.",
    requiredItems: ["Empty Bottle (Bottle Bugs)"],
  },
  {
    number: 7,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Kakariko Village",
    index: 4,
    timeOfDay: 1,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-007.jpg",
    description:
      "There is a building under construction at the center of the village. At nighttime, a Gold Skulltula will appear.",
    requiredItems: [],
  },
  {
    number: 8,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Kakariko Village",
    index: 3,
    timeOfDay: 1,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-008.jpg",
    description:
      "At the side of the Skulltula House, there is a Gold Skulltula found here at nighttime.",
    requiredItems: [],
  },
  {
    number: 9,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Kakariko Village",
    index: 2,
    timeOfDay: 1,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-009.jpg",
    description:
      "Right when you enter the Village, there is a tree straight ahead. Roll into the tree and a Skulltula will pop out.",
    requiredItems: [],
  },
  {
    number: 10,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Kakariko Village",
    index: 5,
    timeOfDay: 1,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-010.jpg",
    description:
      "At nighttime, a Gold Skulltula will appear near the top of the watch tower. Shoot it down with your Slingshot.",
    requiredItems: ["Slingshot"],
  },
  {
    number: 11,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Kakariko Village",
    index: 6,
    timeOfDay: 1,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-011.jpg",
    description:
      "Found at nighttime on the side of the house located closest to the gate that leads to Death Mountain.",
    requiredItems: [],
  },
  {
    number: 36,
    areaType: "dungeons",
    area: "dekuTree",
    specificArea: "Inside the Deku Tree",
    index: 7,
    timeOfDay: 3,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-036.jpg",
    description:
      "Way back inside of the Great Deku Tree. There was a room in the first basement at the northwest corner of the map that we previously never entered. Burn the spider web and then blast the boulder away with a bomb. Inside, you will find a Gold Skulltula on the wall. Use the Boomerang to snag the token.",
    requiredItems: ["Deku Sticks", "Bombs (Bomb Bag)", "Boomerang"],
  },
  {
    number: 43,
    areaType: "overworld",
    area: "kakarikoVillage",
    specificArea: "Graveyard",
    index: 0,
    timeOfDay: 1,
    era: 1,
    imageURL: "./files/Skulltula images/OoT-Gold-Skulltula-043.jpg",
    description:
      "Found on the wall at the southeast corner of the Graveyard. The Skulltula can be found at nighttime and you'll need the Boomerang to retrieve the token.",
    requiredItems: ["Boomerang"],
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
    requiredItems: ["Hookshot"],
  },
];

export const GetSkulltulasData = () => {
  return skulltulaData;
};
