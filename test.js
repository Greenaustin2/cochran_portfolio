const container = document.querySelectorAll(".container");

const imagesTop = [...Array(9)].map(
  (x, i) => "../images/top/0" + (i + 1) + ".jpg"
);
const imagesBottom = [...Array(9)].map(
  (x, i) => "../images/bottom/0" + (i + 1) + ".jpg"
);
const imageArrays = [imagesTop, imagesBottom];

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

// var randoms = new Set();
// while (randoms.size<9) {
//   randoms.add(1 + Math.floor(Math.random() * 9))
// }

loadImages(container, imageArrays);
