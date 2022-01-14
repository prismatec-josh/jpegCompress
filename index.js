import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const path = await rl.question("Please provide an image directory: ");
const quality = await rl.question("Please provide a quality value (0-100): ");

const results = await imagemin([`${path}\\*.jpg`], {
  destination: `${path}\\compressed`,
  plugins: [imageminMozjpeg({ quality: quality })],
});

console.log(results);

rl.close();
