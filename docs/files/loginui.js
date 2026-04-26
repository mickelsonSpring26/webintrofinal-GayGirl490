import { dce, dgebi, SetSkulltulaDataInLocalStorage } from "./mainui.js";
import {
  SetCurrentUser,
  GetCurrentUser,
  GetFavouriteNumber,
  SetFavouriteNumber,
} from "./domain.js";

const setUserInLocalStorage = (userName) => {
  SetCurrentUser(userName);
  const user = GetCurrentUser();
  localStorage.setItem("name", user);
};

const loginErrorMessage = dgebi("login-error");

const loginFormElement = dgebi("login-form");
loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!e.target.userName.value) {
    loginErrorMessage.textContent = "Please input a user name.";
    return;
  }

  setUserInLocalStorage(e.target.userName.value);

  window.location.href = `${window.location}/../index.html`;
  e.target.reset();
});

const setNumberInLocalStorage = (number) => {
  SetFavouriteNumber(number);
  const favouriteNumber = GetFavouriteNumber();
  localStorage.setItem("number", favouriteNumber);
};

const loggedInSectionElement = dgebi("logged-in-section");

const RenderThisPage = () => {
  const user = localStorage.getItem("name") || "";
  const favouriteNumber = localStorage.getItem("number") || 0;
  if (user) {
    loginFormElement.classList.add("hidden");
    loggedInSectionElement.classList.remove("hidden");
  } else {
    loginFormElement.classList.remove("hidden");
    loggedInSectionElement.classList.add("hidden");
    return;
  }
  // loggedInSectionElement.replaceChildren();

  const welcomeMessage = dgebi("welcome-message");
  welcomeMessage.textContent = `Welcome ${user}`;

  const currentFavouriteNumber = dgebi("current-favourite-number");
  currentFavouriteNumber.textContent = `${favouriteNumber}`;

  const favouriteNumberForm = dgebi("favourite-number-form");
  favouriteNumberForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const favouriteNumberInput = dgebi("favourite-number-input");
    setNumberInLocalStorage(favouriteNumberInput.value);

    currentFavouriteNumber.textContent = `${GetFavouriteNumber()}`;

    e.target.reset();
  });

  const logoutButton = dgebi("logout-button");
  logoutButton.addEventListener("click", (e) => {
    setUserInLocalStorage("");
    setNumberInLocalStorage(0);
    SetSkulltulaDataInLocalStorage({});
    RenderThisPage();
  });
};

RenderThisPage();

// const url = new URL(window.location);

// if (window.location.pathname.includes("/login.html")) {
// RenderPage();

// const selectFileFormElement = dgebi("select-file-form");
// selectFileFormElement.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const saveFilePathInput = dgebi("save-file-path");
//   const fileNumberInput = dgebi("file-number");
//   const filePathToSend = `${saveFilePathInput.value}/file${fileNumberInput.value}.sav`;

//   console.log(
//     `file ${fileNumberInput.value}`,
//     await GetGSFlags(filePathToSend),
//   );

//   const spoilerSelectInput = dgebi("spoiler");
//   //   url.searchParams.set("spoiler", spoilerSelectInput.value);
//   //   history.pushState(null, "", url); // What was this for again?

//   window.location.href = `http://127.0.0.1:5500/index.html?spoiler=${spoilerSelectInput.value}`;
//   // e.target.reset();
// });
// }
