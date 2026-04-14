import { dce, dgebi, RenderPage } from "./mainui.js";
import { GetGSFlags } from "./service.js";

// const url = new URL(window.location);

if (window.location.pathname === "/login.html") {
  RenderPage();

  const selectFileFormElement = dgebi("select-file-form");
  selectFileFormElement.addEventListener("submit", async (e) => {
    e.preventDefault();

    const saveFilePathInput = dgebi("save-file-path");
    const fileNumberInput = dgebi("file-number");
    const filePathToSend = `${saveFilePathInput.value}/file${fileNumberInput.value}.sav`;

    console.log(
      `file ${fileNumberInput.value}`,
      await GetGSFlags(filePathToSend),
    );

    const spoilerSelectInput = dgebi("spoiler");
    //   url.searchParams.set("spoiler", spoilerSelectInput.value);
    //   history.pushState(null, "", url); // What was this for again?

    window.location.replace(
      `http://127.0.0.1:5500/index.html?spoiler=${spoilerSelectInput.value}`,
    );
    // e.target.reset();
  });
}
