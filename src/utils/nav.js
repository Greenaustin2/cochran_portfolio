import home from "../pages/home.js";
import about from "../pages/about.js";
import splash from "../pages/splash.js";

// ROUTES
const routes = {
  "/": {
    linkLabel: "Splash",
    content: splash,
  },
  "/about": {
    linkLabel: "About",
    content: about,
  },
  "/home": {
    linkLabel: "Home",
    content: home,
  },
};

const app = document.querySelector("#app");
const nav = document.querySelector("#nav");

const renderContent = (route) => (app.innerHTML = routes[route].content);

const navigate = (e) => {
  const route = e.target.pathname;
  window.history.pushState({}, "", route);
  renderContent(route);
};

const registerNavLinks = () => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const { href } = e.target;
    window.history.pushState({}, "", href);
    navigate(e);
  });
};

const renderNavlinks = () => {
  const navFragment = document.createDocumentFragment();
  Object.keys(routes).forEach((route) => {
    const { linkLabel } = routes[route];

    const linkElement = document.createElement("a");
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    linkElement.className = "nav-link";
    navFragment.appendChild(linkElement);
  });

  nav.append(navFragment);
};

const registerBrowserBackAndForth = () => {
  window.onpopstate = function (e) {
    const route = window.location.pathname;
    renderContent(route);
  };
};

const renderInitialPage = () => {
  const route = window.location.pathname;
  renderContent(route);
};

function bootup() {
  renderNavlinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
}

export { bootup };
