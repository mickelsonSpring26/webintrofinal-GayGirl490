import { GetGSFlags } from "./service.js";

const dce = (element) => {
  return document.createElement(element);
};

const dgebi = (id) => {
  return document.getElementById(id);
};

console.log(await GetGSFlags());