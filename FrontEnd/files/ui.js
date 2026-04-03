import { GetGSFlags } from "./service.js";

const dce = (element) => {
  return document.createElement(element);
};

const dgebi = (id) => {
  return document.getElementById(id);
};

const url = new URL(window.location);

const selectFileFormElement = dgebi("select-file-form");
selectFileFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  const saveFilePathInput = dgebi("save-file-path");
  const fileNumberInput = dgebi("file-number");
  const filePathToSend = `${saveFilePathInput.value}/file${fileNumberInput.value}.sav`;

  console.log(`file ${fileNumberInput.value}`, await GetGSFlags(filePathToSend));

  const spoilerSelectInput = dgebi("spoiler");
  url.searchParams.set("spoiler", spoilerSelectInput.value);
  // history.pushState(null, "", url); // What was this for again?

  e.target.reset();
});
