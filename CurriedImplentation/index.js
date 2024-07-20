// // this used when you dont need to persist value this and context

// function curry(fn) {
//   return function curried(...args) {
//     console.log({ args });
//     // console.log('this', globalThis, this === globalThis);
//     if (args.length >= fn.length) {
//       // return fn.apply(this, args);
//       return fn(...args);
//     } else {
//       return function (...nextArgs) {
//         console.log({ nextArgs });
//         // return curried.apply(this, args.concat(nextArgs));
//         return curried(...args, ...nextArgs);
//         // return curried(...args.concat(nextArgs));
//       };
//     }
//   };
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// const curriedSum = curry(sum);

// console.log('test', curriedSum(1)(2)(3)); // 6
// // console.log(curriedSum(1, 2)(3)); // 6
// // console.log(curriedSum(1)(2, 3)); // 6

// this is used when you need to persist value of this and its context

function curry(fn) {
  return function curried(...args) {
    console.log({ args });
    // console.log('this', globalThis, this === globalThis);
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        console.log({ nextArgs });
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

const obj = {
  extra: 10,
  add(a, b, c) {
    return a + b + c + this.extra;
  },
};

const curriedAdd = curry(obj.add);

console.log(curriedAdd.call(obj, 1)(2)(3));
