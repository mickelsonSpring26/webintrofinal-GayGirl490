import { GetGSFlags } from "./service.js";
import { GetSkulltulas } from "./skulltulas.js";

const attributions = [
  {
    attrib: "Zelda Dungeon's Guide to find all the Gold Skulltulas",
    url: "https://www.zeldadungeon.net/wiki/Ocarina_of_Time_Gold_Skulltulas",
  },
  {
    attrib: "Ocarina of Time Reloaded Texture Pack",
    url: "https://github.com/GhostlyDark/OoT-Reloaded-SoH",
  },
];

const pages = [
  {
    pageName: "Home Page",
    url: "./index.html",
  },
  {
    pageName: "Login Page",
    url: "./login.html",
  },
  {
    pageName: "Author's Page",
    url: "./author.html",
  },
];

export const GetAttributions = () => {
  return attributions;
};

export const GetPages = () => {
  return pages;
};
