let colors = document.querySelectorAll(".colour");
let palette = document.querySelector(".palette");
let colourString = "ABCDEF123456789";

let randHexColour = () => {
  let hexColourString = "#";
  for (let i = 0; i < 6; i++) {
    hexColourString += colourString[Math.round(Math.random() * 6)];
  }

  return hexColourString;
};

let generate = () => {
  colors.forEach((color) => {
    color.style.backgroundColor = randHexColour();
  });
};
generate();

document.querySelector(".btn").addEventListener("click", generate);
