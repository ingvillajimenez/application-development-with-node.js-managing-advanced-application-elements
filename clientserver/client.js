var http = require("http");

// Options to be used by request
var options = {
  host: "localhost",
  port: "8085",
  path: "/index.htm",
};

// Callback function
var callback = function (response) {
  // update data stream
  var body = "";
  response.on("data", function (data) {
    body += data;
  });

  response.on("end", function () {
    // data received completely
    console.log(body);
  });
};
// request server
