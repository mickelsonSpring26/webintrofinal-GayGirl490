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

const setSkulltulaDataInLocalStorage = (skulltulaDataObject) => {
  SetSkulltulasDataObject(skulltulaDataObject);
  // localStorage.setItem("skulltulaInformation", skulltulaDataObject);
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
  const tokensCount = skulltulas.gsTokens;
  const flags = skulltulas.gsFlags;
  const data = skulltulas.skulltulasData;

  const spoiler = url.searchParams.get("spoiler");
  if (!spoiler) {
    notCollectedContainerElement.classList.add("hidden");
  }

  collectedContainerElement.replaceChildren();
  notCollectedContainerElement.replaceChildren();

  const collectedHeader = dce("h2");
  collectedHeader.textContent = "Collected Skulltulas:";
  collectedContainerElement.appendChild(collectedHeader);

  const tokenCountHolder = dce("div");
  const tokenCountNumber = dce("span");
  tokenCountNumber.textContent = `${tokensCount}`; // use nth child to bold this.
  const tokenCountText = dce("span");
  tokenCountText.textContent = " skulltulas collected.";
  tokenCountHolder.replaceChildren(tokenCountNumber, tokenCountText);

  const notCollectedHeader = dce("h3");
  notCollectedHeader.textContent = "Not Yet Collected Skulltulas";
  notCollectedContainerElement.appendChild(notCollectedHeader);

  data.forEach((skulltulaCard) => {
    const figureCard = dce("figure");

    const skulltulaImage = dce("img");
    skulltulaImage.src = skulltulaCard.imageURL;

    const skulltulaArea = skulltulaCard.specificArea;
    let skulltulaEra = "";
    if (skulltulaCard.era === 1) {
      skulltulaEra = `
(Past)`;
    } else if (skulltulaCard.era === 2) {
      skulltulaEra = `
(Future)`;
    }
    let skulltulaTimeOfDay = "";
    if (skulltulaCard.timeOfDay === 1) {
      skulltulaTimeOfDay = " (Night)";
    } else if (skulltulaCard.timeOfDay === 2) {
      skulltulaTimeOfDay = " (Day)";
    }

    let skulltulaItems = "";
    if (skulltulaCard.requiredItems) {
      skulltulaItems = `
${skulltulaCard.requiredItems.join(", ")} required.`;
    }

    const skulltulaDescription = `
${skulltulaCard.description}`;

    const skulltulaCaption = dce("figcaption"); // this is kind of an abomination. I need to fix it later. I just wanted to fulfill the mandatory figure rubric item.
    // Make the card a div. Put the figure as a child of that div, then have the figure contain the image and the description as the figcaption.
    // It will go <div class="card-thing"> number, specific area, era and time (only have these appear if there's a specific one. i.e. the skulltula only appears in a specific era and/or time of day. If it shows up in both for one, don't show that one.), requiredItems if any, <figure> img, <figcaption>description</figcaption></figure> </div>
    // I might get dinged on lighthouse for not giving the image any alt text.
    skulltulaCaption.textContent = `${skulltulaArea}
${skulltulaEra}${skulltulaTimeOfDay}${skulltulaItems}${skulltulaDescription}`;

    figureCard.replaceChildren(skulltulaImage, skulltulaCaption);

    let collected = true;

    //

    if (collected) {
      figureCard.classList.add("collected-skulltula-card");
      collectedContainerElement.appendChild(figureCard);
    } else {
      figureCard.classList.add("not-collected-skulltula-card");
      notCollectedContainerElement.appendChild(figureCard);
    }
  });
};

RenderPage();

// if (window.location.pathname.includes("/index.html")) {
// if (true) {
// console.log(baseURL, await GetData(`${baseURL}/FileReader`));
if (document.title === "Skulltula Page") {
  url.searchParams.set("spoiler", false);
  history.pushState(null, "", url); // I need this in order to actually have the page set this in the query string when I load the page.

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
      setSkulltulaDataInLocalStorage(skulltulaData);
      console.log(getSkulltulaDataFromLocalStorage());
      // Now run some function to render the list(s) of skulltula(s).
      renderSkulltulas(skulltulaData);
      saveFileFormElement.reset();
    });

    const spoilerCheckElement = dgebi("spoiler");
    spoilerCheckElement.addEventListener("change", (e) => {
      //
    });

    const areaFilterSelect = dgebi("area");
    areaFilterSelect.addEventListener("change", (e) => {
      // e.target.value;
    });
  }
}
// }
