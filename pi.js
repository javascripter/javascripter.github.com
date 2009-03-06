var result = 0;
var add = 1;
var sub = 3;
for (;;) {
  postMessage(result * 4);
  result += 1/add;
  result -= 1/sub;
  add += 4;
  sub += 4;
}
