function callmeafter2sec() {
  console.log("function called @timeout");
}
// setTimeout(callmeafter2sec, 2000);
setInterval(callmeafter2sec, 2000);
