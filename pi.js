var result = 1;
var multiplier = -1;
for (var i = 3; ; i += 2) {
  postMessage(result * 4);
  result += multiplier/i;
  multiplier *= -1;
}
