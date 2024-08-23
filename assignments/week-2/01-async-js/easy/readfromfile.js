const fs = require("fs");

const path = "./3-read-from-file.md";

function expensiveOperation() {
  console.log("Expensive operation");
}
function afterfileread(err, data) {
  if (err) {
    console.log("Error reading the file", err);
    return;
  }
  console.log("File content:", data);
  setTimeout(expensiveOperation, 6500);
}

fs.readFile(path, "utf-8", afterfileread);

console.log("Reading File....");
