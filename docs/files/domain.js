import { GetSkulltulasData } from "./skulltulas.js";
import {
  GetStringGSFlags,
  GetSplitBinaryGSFlags,
  GetGSCount,
} from "./service.js";

let currentUser = "";
let favouriteNumber = 0;
let skulltulaDataObject = [];

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
    attrib:
      "IKEA listing for Blåhaj, supplies the image used on the author page",
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

export const GetSkulltulas = async (file) => {
  const stringFlags = await GetStringGSFlags(file);
  // console.log(stringFlags);
  const intFlags = stringFlags.map((string) => Number(string));
  // console.log(intFlags);
  const splitBinaryFlags = await GetSplitBinaryGSFlags(intFlags);
  // console.log(splitBinaryFlags);
  const gsTokensCount = await GetGSCount();
  return {
    gsFlags: splitBinaryFlags,
    gsTokens: gsTokensCount,
    skulltulasData: GetSkulltulasData(),
  };
};

export const GetCurrentUser = () => {
  return currentUser;
};

export const SetCurrentUser = (userName) => {
  if (currentUser && newUsername) {
    console.log("You must logout to change user.");
    return false;
  }
  currentUser = userName;
  return true;
};

export const GetFavouriteNumber = () => {
  return favouriteNumber;
};

export const SetFavouriteNumber = (number) => {
  favouriteNumber = number;
  return true;
};

export const GetSkulltulasDataObject = () => {
  return skulltulaDataObject;
}

export const SetSkulltulasDataObject = (skulltulaData) => {
  skulltulaDataObject = skulltulaData;
}

export const FilterSkulltulasByArea = (filter) => {
  // skulltulaDataObject.skulltulasData is what gets filtered.
  return []; // a new object that contains all the same stuff but with skulltulaDataObject.skulltulasData filtered.
}