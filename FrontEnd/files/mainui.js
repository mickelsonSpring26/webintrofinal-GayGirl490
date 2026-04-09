import { GetAttributions, GetPages } from "./domain.js";
import { GetGSFlags } from "./service.js";

export const dce = (element) => {
  return document.createElement(element);
};

export const dgebi = (id) => {
  return document.getElementById(id);
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

const renderSideBar = () => {
  const sideBarElement = dgebi("sidebar");
};

export const RenderPage = () => {
  renderHeader();
  renderSideBar();
  renderFooter();
};

if (window.location.pathname === "/index.html") {
  RenderPage();

  const areaFilterSelect = dgebi("area");
  areaFilterSelect.addEventListener("change", (e) => {
    // e.target.value;
  });
}
