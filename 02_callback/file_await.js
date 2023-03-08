// @ts-check
const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('text1.txt', 'utf-8');
  console.log(data.toString());
  await fs.readFile('text2.txt', 'utf-8');
  console.log(data.toString());
  await fs.readFile('text3.txt', 'utf-8');
  console.log(data.toString());
  await fs.readFile('text4.txt', 'utf-8');
  console.log(data.toString());
}

main();
