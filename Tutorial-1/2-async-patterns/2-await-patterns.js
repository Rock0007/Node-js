const { readFile, writeFile } = require("fs").promises;
const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const path = "./content/first.txt";
const start = async () => {
  try {
    const first = await readFile(path, "utf8");
    const path_1 = "./content/second.txt";
    const second = await readFile(path_1, "utf8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `This is Awesome : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText(path)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
