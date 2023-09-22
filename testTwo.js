const container = document.querySelectorAll(".container");

const imagesTop = [...Array(9)].map(
  (x, i) => "../images/top/0" + (i + 1) + ".jpg"
);
const imagesBottom = [...Array(9)].map(
  (x, i) => "../images/bottom/0" + (i + 1) + ".jpg"
);
const imageArrays = [imagesTop, imagesBottom];

const varToString = (varObj) => Object.keys(varObj)[0];

function loadImages(container, imageArrays) {
  var x = 0;
  container.forEach((item) => {
    var randoms = new Set();
    while (randoms.size < 9) {
      randoms.add(1 + Math.floor(Math.random() * 9));
    }
    randoms.forEach((i) => {
      console.log(i);
      const img = document.createElement("img");
      img.className = "child bg-" + i;
      img.src = imageArrays[x][i - 1];
      item.appendChild(img);
      i++;
    });
    x += 1;
    console.log("x" + x);
  });
}

let top = document.querySelector(".top");
console.log(top);
let bottom = document.querySelector(".bottom");

//infinite-snap-scroll
const snapScroll = (targetElement) => {
  //   console.log(targetElement.className.split(" ")[2]);
  let children = targetElement.querySelectorAll(".child");
  let num, slideNum;

  // This will log the width of the viewport
  num = window.innerWidth;

  slideNum = num * (children.length - 1);
  //   console.log(children.length);

  //scroll forward
  targetElement.addEventListener("scroll", function () {
    if (targetElement.scrollLeft == slideNum) {
      targetElement.scrollTo(num, 0);
      console.log("left");
    }
    //scroll backward
    if (targetElement.scrollLeft == 0) {
      targetElement.scrollTo(num * 8, 0);
      console.log("right");
    }
  });
  // in case of resize
  window.onresize = function (event) {
    num = window.innerWidth;
    slideNum = num * (children.length - 1);
  };
};

loadImages(container, imageArrays);
snapScroll(top);
snapScroll(bottom);
