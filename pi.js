var result = 1;
var isplus = false;
for (var i = 3; ; i += 2) {
  postMessage(result * 4);
  if (isplus) {
    result += 1/i;
  } else {
    result -= 1/i;
  }
  isplus =! isplus;
}
