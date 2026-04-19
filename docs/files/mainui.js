import { GetAttributions, GetPages, GetSkulltulas } from "./domain.js";
import { GetGSFlags } from "./service.js";

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

RenderPage();
// if (window.location.pathname.includes("/index.html")) {
// if (true) {

if (document.title === "Skulltula Page") {
  const areaFilterSelect = dgebi("area");
  areaFilterSelect.addEventListener("change", (e) => {
    // e.target.value;
  });
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
    saveFileFormElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
}
// }
