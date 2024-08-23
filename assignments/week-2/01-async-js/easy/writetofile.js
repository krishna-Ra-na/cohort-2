const fs = require("fs");

const path = "output.txt";
const contentToWrite = "This text is written from write to file function.";

function expensiveOperation() {
  console.log("Expensive operation");
}
function afterfilewrite(err) {
  if (err) {
    console.log("Error writing the file", err);
    return;
  }
  console.log("Writing Completed");
  setTimeout(expensiveOperation, 6500);
}

fs.writeFile(path, contentToWrite, "utf-8", afterfilewrite);

console.log("writing File....");
