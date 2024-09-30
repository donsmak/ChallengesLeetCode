// class CustomStack {
//   maxSize: number;
//   stack: number[];
//   constructor(maxSize: number) {
//     this.maxSize = maxSize;
//     this.stack = [];
//   }

//   push(x: number): void {
//     if (this.stack.length < this.maxSize) {
//       this.stack.push(x);
//     }
//   }

//   pop(): number {
//     return this.stack.pop() ?? -1;
//   }

//   increment(k: number, val: number): void {
//     for (let i = 0; i < Math.min(this.stack.length, k); i++) {
//       this.stack[i] += val;
//     }
//   }
// }

class customStack {
  maxSize: number = 0;
  stack: number[] = [];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    return this.stack.pop() ?? -1;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < k; i++) {
      if (this.stack[i]) {
        this.stack[i] += val;
      }
    }
  }
}

// test

let stk = new customStack(3);
stk.push(1);
console.log(stk.stack);

stk.push(2);
console.log(stk.stack);
stk.pop();
console.log(stk.stack);
stk.push(2);
console.log(stk.stack);

stk.push(3);
console.log(stk.stack);

stk.push(4);
console.log(stk.stack);

stk.increment(5, 100);
console.log(stk.stack);

stk.increment(2, 100);
console.log(stk.stack);

stk.pop();
console.log(stk.stack);

stk.pop();
console.log(stk.stack);

stk.pop();
console.log(stk.stack);

stk.pop();
console.log(stk.stack);
