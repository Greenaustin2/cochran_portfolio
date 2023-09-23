const container = document.querySelectorAll(".container");

function randomImageArray(divIdentifier) {
  var randoms = new Set();
  while (randoms.size < 9) {
    randoms.add(1 + Math.floor(Math.random() * 9));
  }

  let randomArray = Array.from(randoms);
  var finalArray = randomArray.map(
    (x, i) => "../images/" + divIdentifier + "/0" + x + ".jpg"
  );
  return finalArray;
}

const imagesTop = randomImageArray("top");
const imagesBottom = randomImageArray("bottom");

//appends and prepends repeat elements for the infinite gallery illusion loop points
imagesBottom.push(imagesBottom[0], imagesBottom[1]);
imagesBottom.unshift(imagesBottom[7], imagesBottom[8]);
imagesTop.push(imagesTop[0], imagesTop[1]);
imagesTop.unshift(imagesTop[7], imagesTop[8]);

const imageArrays = [imagesTop, imagesBottom];

const varToString = (varObj) => Object.keys(varObj)[0];

function loadImages(container, imageArrays) {
  var x = 0;
  container.forEach((item) => {
    imageArrays[x].forEach((i) => {
      //randomly appends images from list to dom
      const img = document.createElement("img");
      img.className = "child";
      img.src = i;
      item.appendChild(img);
      i++;
    });
    x += 1;
  });
}

function appendPrependImages(container, imageArrays) {}

let top = document.querySelector(".top");
let bottom = document.querySelector(".bottom");

//infinite-snap-scroll
const snapScroll = (targetElement) => {
  let children = targetElement.querySelectorAll(".child");
  let num, slideNum;

  // This will log the width of the viewport
  num = window.innerWidth;
  slideNum = num * (children.length - 1);

  //scroll forward
  targetElement.addEventListener("scroll", function () {
    if (targetElement.scrollLeft == slideNum) {
      targetElement.scrollTo(num * 3, 0);
    }
    //scroll backward
    if (targetElement.scrollLeft == 0) {
      targetElement.scrollTo(num * 9, 0);
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
