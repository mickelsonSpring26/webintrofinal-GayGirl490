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
  {
    attrib: "IKEA listing for Blåhaj, supplies the image used on the author page",
    url: "https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/",
  },
  {
    attrib: "Trans flag from Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Transgender_Pride_Flag_(3-2_aspect_ratio).svg",
  },
  {
    attrib: "Lesbian flag from Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Lesbian_Pride_Flag_2019.svg",
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
