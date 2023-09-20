import home from "./pages/home.js";
import about from "./pages/about.js";
import splash from "./pages/splash.js";

// ROUTES
const routes = {
  "/": {
    linkLabel: "Home",
    content: home,
  },
  "/about": {
    linkLabel: "About",
    content: about,
  },
  "/splash": {
    linkLabel: "Splash",
    content: splash,
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

(function bootup() {
  renderNavlinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();

// SPLASH IMAGES

const container = document.querySelector(".container");

const images = [...Array(6)].map((x, i) => "../images/0" + (i + 1) + ".jpeg");
console.log(images);

function loadImages(numImages = images.length) {
  let i = 0;
  while (i < numImages) {
    const img = document.createElement("img");
    img.src = images[i];
    container.appendChild(img);
    i++;
  }
}

// var divElement = document.getElementsByClassName("container");
// var finalElement = divElement[0];

// finalElement.addEventListener("scroll", () => {
//   console.log("scrollY" + finalElement.scrollTop); //scrolled from top
//   console.log("inner height" + finalElement.clientHeight); //visible part of screen
//   console.log("scroll height" + finalElement.scrollHeight);

//   if (
//     finalElement.scrollTop + finalElement.clientHeight >=
//     finalElement.scrollHeight
//   ) {
//     loadImages();
//   }
// });

loadImages();

var divElement = document.getElementsByClassName("container");
var finalElement = divElement[0];
console.log(finalElement.offsetHeight);

function resetWindow() {
  console.log("reset window entered");
  console.log(finalElement.offsetHeight);
  if (finalElement.offsetHeight < 900) {
    console.log(1);
    finalElement.scrollTop += 100;
  }

  if (finalElement.offsetHeight > 2700) {
    console.log(2);
    finalElement.scrollBy(-900, 0);
  }
}

finalElement.addEventListener("scroll", resetWindow);
