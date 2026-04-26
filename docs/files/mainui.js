import {
  GetAttributions,
  GetPages,
  GetSkulltulas,
  SetSkulltulasDataObject,
  GetSkulltulasDataObject,
  FilterSkulltulasByArea,
} from "./domain.js";

export const dce = (element) => {
  return document.createElement(element);
};

export const dgebi = (id) => {
  return document.getElementById(id);
};

export const FromEndOfArray = (array, i = 0) => {
  const endOfArray = array.length - (1 + i);
  return array[endOfArray];
};

export const SetSkulltulaDataInLocalStorage = (skulltulaDataObject) => {
  SetSkulltulasDataObject(skulltulaDataObject);
  localStorage.setItem(
    "skulltulaInformation",
    JSON.stringify(skulltulaDataObject),
  );
};

export const GetSkulltulaDataFromLocalStorage = () => {
  const JsonSkulltulaObject = localStorage.getItem("skulltulaInformation");
  const parsedSkulltula = JSON.parse(JsonSkulltulaObject);
  SetSkulltulasDataObject(parsedSkulltula);
  return parsedSkulltula;
};

const renderHeader = () => {
  const headerElement = dgebi("site-header");

  const thePageTitle = dce("h1");
  const thePageTitleAnchor = dce("a");
  thePageTitleAnchor.textContent =
    "Ship of Harkinian, Ocarina of Time Gold Skulltula Tracker";
  thePageTitleAnchor.href = "./index.html";
  thePageTitle.appendChild(thePageTitleAnchor);
  const disclaimer = dce("p");
  disclaimer.textContent = "This only works on Ship of Harkinian";

  headerElement.appendChild(thePageTitle);
  headerElement.appendChild(disclaimer);
  const navBar = dce("nav");

  const pages = GetPages();
  const pagesList = dce("ul");
  pages.forEach((page) => {
    const pageListItem = dce("li");
    const pageListItemAnchor = dce("a");
    pageListItem.appendChild(pageListItemAnchor);

    pageListItemAnchor.textContent = page.pageName;
    pageListItemAnchor.href = page.url;

    const pageUrlSplit = page.url.split("/");
    const currentPageHTML = FromEndOfArray(pageUrlSplit);
    // console.log(FromEndOfArray(window.location.pathname.split("/")));

    if (window.location.pathname.includes(currentPageHTML)) {
      pageListItemAnchor.classList.add("current-page");
    } else if (
      !FromEndOfArray(window.location.pathname.split("/")) &&
      currentPageHTML === "index.html"
    ) {
      pageListItemAnchor.classList.add("current-page");
    }

    pagesList.appendChild(pageListItem);
  });
  navBar.appendChild(pagesList);

  headerElement.appendChild(navBar);
};

const renderFooter = () => {
  const footerElement = dgebi("site-footer");

  const attributionsTitle = dce("h2");
  attributionsTitle.textContent = "Attributions";
  footerElement.appendChild(attributionsTitle);

  const attributionsListElement = dce("ul");
  const attributions = GetAttributions();
  attributions.forEach((attribution) => {
    const attribListItem = dce("li");
    const attribListItemAnchor = dce("a");
    attribListItemAnchor.textContent = attribution.attrib;
    attribListItemAnchor.href = attribution.url;
    attribListItem.appendChild(attribListItemAnchor);
    attributionsListElement.appendChild(attribListItem);
  });

  footerElement.appendChild(attributionsListElement);
};

// const renderSideBar = () => {
//   const sideBarElement = dgebi("sidebar");
// };

export const RenderPage = () => {
  renderHeader();
  // renderSideBar();
  renderFooter();
};

const url = new URL(window.location);

const collectedContainerElement = dgebi("collected-container");
const notCollectedContainerElement = dgebi("not-collected-container");

const renderSkulltulas = (skulltulas) => {
  if (!skulltulas) {
    return;
    // } else if (skulltulas.length < 1)
    //   {
    //     return;
  } else if (Object.keys(skulltulas).length < 1) {
    return;
  }
  const tokensCount = skulltulas.gsTokens;
  const flags = skulltulas.gsFlags;
  const data = skulltulas.skulltulasData;

  const spoiler = url.searchParams.get("spoiler");
  if (spoiler === "false") {
    notCollectedContainerElement.classList.add("hidden");
  } else if (spoiler === "true") {
    notCollectedContainerElement.classList.remove("hidden");
  }

  collectedContainerElement.replaceChildren();
  notCollectedContainerElement.replaceChildren();

  const collectedHeader = dce("h2");
  collectedHeader.textContent = "Collected Skulltulas:";
  collectedContainerElement.appendChild(collectedHeader);

  const tokenCountHolder = dce("div");
  tokenCountHolder.classList.add("skulltula-count")
  const tokenCountNumber = dce("span");
  tokenCountNumber.textContent = `${tokensCount}`; // use nth child to bold this.
  const tokenCountText = dce("span");
  tokenCountText.textContent = " skulltulas collected.";
  tokenCountHolder.replaceChildren(tokenCountNumber, tokenCountText);
  collectedContainerElement.appendChild(tokenCountHolder);

  const notCollectedHeader = dce("h3");
  notCollectedHeader.textContent = "Not Yet Collected Skulltulas";
  notCollectedContainerElement.appendChild(notCollectedHeader);

  data.forEach((skulltulaCard) => {
    const skulltulaCardDiv = dce("div");

    const numberElement = dce("p");
    numberElement.textContent = skulltulaCard.number;
    skulltulaCardDiv.appendChild(numberElement);

    const skulltulaAreaTimeElement = dce("p");

    let skulltulaEra = "";
    if (skulltulaCard.era === 1) {
      skulltulaEra = ` (Past)`;
    } else if (skulltulaCard.era === 2) {
      skulltulaEra = ` (Future)`;
    }
    let skulltulaTimeOfDay = "";
    if (skulltulaCard.timeOfDay === 1) {
      skulltulaTimeOfDay = " (Night)";
    } else if (skulltulaCard.timeOfDay === 2) {
      skulltulaTimeOfDay = " (Day)";
    }

    skulltulaAreaTimeElement.textContent = `${skulltulaCard.specificArea}${skulltulaEra}${skulltulaTimeOfDay}`;
    skulltulaCardDiv.appendChild(skulltulaAreaTimeElement);

    const skulltulaItemsElement = dce("p");
    let skulltulaItems = "";
    const items = skulltulaCard.requiredItems;
    if (items.length > 0) {
      skulltulaItems = `${items.join(", ")} ${items.length === 1 ? `is` : `are`} required`; // next project, join the last two array items with ", and " instead of just ", "
    }
    skulltulaItemsElement.textContent = skulltulaItems;
    skulltulaCardDiv.appendChild(skulltulaItemsElement);

    const figureCard = dce("figure");

    const skulltulaImage = dce("img");
    skulltulaImage.src = skulltulaCard.imageURL;

    const skulltulaDescription = skulltulaCard.description;

    const skulltulaCaption = dce("figcaption");
    skulltulaCaption.textContent = `${skulltulaDescription}`;

    figureCard.replaceChildren(skulltulaImage, skulltulaCaption);

    skulltulaCardDiv.appendChild(figureCard);

    let collected = false;
    const areaValue = skulltulaCard.area;

    // console.log(flags[areaValue][skulltulaCard.index]);
    if (flags[areaValue][skulltulaCard.index] === "1") {
      collected = true;
    }

    if (collected) {
      skulltulaCardDiv.classList.add("collected-skulltula-card");
      collectedContainerElement.appendChild(skulltulaCardDiv);
    } else {
      skulltulaCardDiv.classList.add("not-collected-skulltula-card");
      notCollectedContainerElement.appendChild(skulltulaCardDiv);
    }
  });
};

RenderPage();

// if (window.location.pathname.includes("/index.html")) {
// if (true) {
// console.log(baseURL, await GetData(`${baseURL}/FileReader`));
if (document.title === "Skulltula Page") {
  const spoilerExists = url.searchParams.get("spoiler");
  if (!(spoilerExists === "true" || spoilerExists === "false")) {
    url.searchParams.set("spoiler", false);
    history.pushState(null, "", url); // I need this in order to actually have the page set this in the query string when I load the page.
  }
  renderSkulltulas(GetSkulltulaDataFromLocalStorage());

  const sidebarElement = dgebi("sidebar");
  const mainElement = dgebi("primary-content");
  if (!localStorage.getItem("name")) {
    // sidebarElement.classList.add("hidden");

    const youreNotSignedInElement = dce("h3");
    youreNotSignedInElement.textContent = "You're Not signed in.";
    const goToLoginPageElement = dce("a");
    goToLoginPageElement.href = "./login.html";
    goToLoginPageElement.textContent = "Go to login";
    goToLoginPageElement.classList.add("not-logged-in");

    sidebarElement.replaceChildren(
      youreNotSignedInElement,
      goToLoginPageElement,
    );
    mainElement.classList.add("not-logged-in");
  } else {
    const saveFileFormElement = dgebi("save-file-upload-form");
    saveFileFormElement.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fileUploadElement = dgebi("save-file-input");
      const file = fileUploadElement.files[0];
      // console.log(file);
      const skulltulaData = await GetSkulltulas(file);
      // console.log(skulltulaData);
      SetSkulltulaDataInLocalStorage(skulltulaData);
      // console.log(GetSkulltulasDataObject());
      // Now run some function to render the list(s) of skulltula(s).
      renderSkulltulas(skulltulaData);
      filteredAreas = skulltulaData;
      saveFileFormElement.reset();
    });
    
    const spoilerCheckElement = dgebi("spoiler");
    if (url.searchParams.get("spoiler") === "true") {
      spoilerCheckElement.checked = true;
    } else {
      spoilerCheckElement.checked = false;
    }
    spoilerCheckElement.addEventListener("change", (e) => {
      if (spoilerCheckElement.checked) {
        url.searchParams.set("spoiler", true);
        history.pushState(null, "", url);
        renderSkulltulas(filteredAreas);
      } else {
        url.searchParams.set("spoiler", false);
        history.pushState(null, "", url);
        renderSkulltulas(filteredAreas);
      }
    });

    let filteredAreas = GetSkulltulaDataFromLocalStorage();

    const areaFilterSelect = dgebi("area");
    areaFilterSelect.addEventListener("change", (e) => {
      const filterValue = e.target.value;
      filteredAreas = FilterSkulltulasByArea(filterValue);
      // console.log(filteredAreas);
      renderSkulltulas(filteredAreas);
      // console.log(filterValue);
    });
  }
}
// }
