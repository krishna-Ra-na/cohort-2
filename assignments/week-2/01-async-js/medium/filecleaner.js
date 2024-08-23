const fs = require("fs");

const path = "./test.txt";
// afterfileread
function afterfileread(err, content) {
  if (err) {
    console.log("Error reading the file", err);
    return;
  }
  const split_data = content.split(" ");
  let clean_data = "";
  for (let i = 0; i < split_data.length; i++) {
    if (split_data[i] != "") {
      clean_data += split_data[i] + " ";
    }
  }
  console.log("cleaned data;-", clean_data);

  //   write this clean_data to file
  fs.writeFile(path, clean_data, "utf-8", (err) => {
    if (err) {
      console.log("Error writing to file", err);
      return;
    }
    console.log("Writing completed");
  });
}

// fs
fs.readFile(path, "utf-8", afterfileread);
