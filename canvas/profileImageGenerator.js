import fs from "fs";
import pkg from "canvas";
const { createCanvas } = pkg;

const width = 200;
const height = 200;
const max = 256;

const generateHexColor = (max) => {
  let random = Math.floor(Math.random() * max);
  console.log(random);
  return random;
};

const generateHex = () => {
  let hexString = "#";
  for (let i = 0; i < 3; i++) {
    let hexColor = generateHexColor(max).toString(16);
    if (hexColor.length == 1) {
      hexColor = "0" + hexColor;
    }
    hexString += hexColor;
  }
  console.log(hexString);
  return hexString;
};

const generateProfileImage = (firstName, lastName, userID) => {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  const initials =
    firstName.toString().charAt(0) + lastName.toString().charAt(0);

  context.fillStyle = generateHex();
  context.fillRect(0, 0, width, height);

  context.font = "bold 64px Arial";
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillStyle = "#fff";
  context.fillText(initials, 98, 62);

  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(`./data/profile/${userID}.png`, buffer);
};

export { generateProfileImage };
