var fs = require("fs");

fs.appendFile("Exercisefile.txt", "Exercise content", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
