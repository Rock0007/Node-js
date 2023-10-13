const path = require("path");
console.log(`Your path ${path.sep}`);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log("FilePath : ", filePath);

const base = path.basename(filePath);
console.log("Base : ", base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log("DirName : ", absolute);
