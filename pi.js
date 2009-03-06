var result = 0;
for (var i = 1;; i += 4) {
  postMessage(result * 4);
  result += 1/i - 1/(i + 2);
  add += 4;
  sub += 4;
}
