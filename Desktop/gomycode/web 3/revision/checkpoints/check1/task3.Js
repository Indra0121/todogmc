const fs = require('fs');
const path = require("path");

const content = 'Hello Node';
const filePath = path.join(__dirname, "welcome.txt");
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File "welcome.txt" created successfully!');
});
