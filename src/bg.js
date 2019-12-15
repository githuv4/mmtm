const body = document.querySelector("body"),
  imageName = document.querySelector(".image-name"),
  bottomLine = document.querySelector(".comment");

const IMG_NUMBER = 7;
const imageNamesArray = [
  "Starfish Beach, Panama",
  "Barossa Valley",
  "Shoal Bay, Antigua",
  "Gynfeld Forest",
  "The Satpura and Vindhaya Range",
  "Yamdrok Lake",
  "Western Sahara"
];
const bottomLinesArray = [
  '"Divide and Conquer!!"',
  `"Life doesn't always turn out the way you plan."`,
  '"If the wind will not serve, take to the oars."',
  '"Pain past is pleasure."',
  '"You can learn a little from victory, you can learn everything from defeat."'
];

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  imageName.innerText = `${imageNamesArray[imgNumber]}`;
  forLines();
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function forLines(lineNumber) {
  bottomLine.innerText = `${bottomLinesArray[lineNumber]}`;
}

function genRandomForLine() {
  const numberForLine = Math.floor(Math.random() * bottomLinesArray.length);
  return numberForLine;
}

function init() {
  const randomNumber = genRandom();
  const lineNumber = genRandomForLine();
  paintImage(randomNumber);
  forLines(lineNumber);
}

// setInterval(init, 10000);

init();
