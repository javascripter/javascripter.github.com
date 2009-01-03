var brainfuck = function (source, getc) {
  var heap, ptr, cur, c, ret, stack, i, bracket, stack;
  heap = [0];
  ptr = 0;
  cur = -1;
  ret = '';
  stack = [];
  if (!getc) getc = function () { return prompt("input a character"); };
  while ((c = source.charAt(++cur))) {
    switch (c) {
    case "+":
      ++heap[ptr];
      break;
    case "-":
      --heap[ptr];
      break;
    case ">":
      if (++ptr >= heap.length) heap.push(0);
      break;
    case "<":
      if (--ptr < 0) throw new Error("access to a negative address");
      break;
    case ".":
      ret += String.fromCharCode(heap[ptr]);
      break;
    case ",":
      heap[ptr] = getc().charCodeAt(0);
      break;
    case "[":
      stack.push(cur);
      if (heap[ptr] != 0) break;
      i = cur;
      bracket = 1;
      while (bracket > 0) { // find ]
        c = source.charAt(++i);
        if (c == "[") {
          ++bracket;
        } else if (c == "]") {
          --bracket;
        }
        if (i >= source.length) throw new Error("unterminated brackets");
      }
      cur = i;
      break;
    case "]":
      if (stack.length <= 0) throw new Error("unterminated brackets");
      cur = stack.pop() - 1;
      break;
    }
  }
  return ret;
};

// "Hello, world!"
brainfuck("+++++++++[>++++++++>+++++++++++>+++++<<<-]>.>++.+++++++..+++.>-.------------.<++++++++.--------.+++.------.--------.>+.");
