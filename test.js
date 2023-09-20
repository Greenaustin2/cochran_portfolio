const container = document.querySelectorAll(".container");
const images = [...Array(9)].map((x, i) => "../images/0" + (i + 1) + ".JPG");

function loadImages(container, numImages = images.length) {
  container.forEach((item) => {
    var randoms = new Set();
    while (randoms.size < 9) {
      randoms.add(1 + Math.floor(Math.random() * 9));
    }
    console.log(randoms);

    // let i = 0;
    randoms.forEach((i) => {
      console.log(i);
      const img = document.createElement("img");
      img.className = "child bg-" + i;
      img.src = images[i - 1];
      item.appendChild(img);
      i++;
    });
  });
}

// var randoms = new Set();
// while (randoms.size<9) {
//   randoms.add(1 + Math.floor(Math.random() * 9))
// }

loadImages(container);
