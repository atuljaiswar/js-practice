/* 
2015 there were no concept of promises, so developer used to use callback, for which there is one problem called.
Inversion of control :- which mean there is no gurantee that any passed callback will always  get called.

use of callbacks can lead to unexpected behavior, specifically when the callback function is:

Called More Than Once
Not Called at All
*/

// // Called More than once:-
// function fetchData(callback) {
//   setTimeout(() => {
//     callback('Data received');
//     callback('Data received again'); // Called more than once
//   }, 1000);
// }

// fetchData((data) => {
//   console.log(data);
// });

/* Here if under some condition we try to call to callback two time or because of some error it get called twice there might issue like UI changes will two timed duplicate data will store in database twice but in case 
Promise we have Resolve and Reject and if Resolve got called once it will not get ignored next time.
*/

// Not Called at All
// function fetchData(callback) {
//   let success = false;

//   setTimeout(() => {
//     if (success) {
//       callback('Data received');
//     }
//     // Callback not called if success is false
//   }, 1000);
// }

// fetchData((data) => {
//   console.log(data); // This might never be executed
// });

/*
Unpredictability: The callback might not be called at all, leading to a situation where the code dependent on that callback never runs. In a real-world scenario, this could cause UI components to hang, network requests to be left unresolved, or user interactions to be ignored.
*/

//How Promise resolve this issue

// /*As we have Resolve and Reject so if, it will not get true, then reject will get called and we not hang up unlike callback */
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let success = false;

//     setTimeout(() => {
//       if (success) {
//         resolve('Data received');
//       } else {
//         reject('Data not received');
//       }
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data); // This will only log if the promise is resolved
//   })
//   .catch((error) => {
//     console.error(error); // This will log if the promise is rejected
//   });

/* Is it not guarantee the time we have provided in setTimeout, the callback will get called after finishing that much microsecond. If javascript thread or JS engine is engage in doing time consuming task, then it will not callback after specified microsend provied in setTimeout for eg.
 */

/*Visual Representation
Initial Setup:

setTimeout schedules the callback with a delay of 10 milliseconds and adds it to the event queue.
The while loop starts executing and blocks the main thread.
After 10 Milliseconds:

The Web API adds the setTimeout callback to the event queue (after the delay).
However, the callback will not be executed yet because the main thread is still occupied with the while loop.
While Loop Completion:

The while loop finishes, and the main thread becomes free.
The event loop now checks the event queue and finds the setTimeout callback ready to be executed.
Callback Execution:

The event loop moves the setTimeout callback from the event queue to the call stack.
The
*/
// setTimeout(() => {
//   console.log('Callback got called');
// }, 10);

// let i = 0;

// while (i < 10000000000) {
//   i++;
// }

// What is Promise
/*Promise is an object returned by asynchronous operation, which is eventually either success(resolve) or fail(reject)
then we attach callback to instanceof, instead of calling callback inside the function.*/

/* key difference between promised and callback using setTimeout is that in case of promises, we dont know worry about time as asycn task will get completed we will come know by subscrbing but in case of setTimeout only we need to worry about that we have provided 2sec or 3sec but still there is no response */

// State of promises
/*
pending: Promised has yet not started or still in progress or pending state
fullfilled: Success or got resolved
rejected: Failed or got rejected
*/

//Promise has two phases
/*
1. Creation
2. Consumption
*/

//Creating phase or creating contract
// const promise = new Promise((resolve, reject) => {
//   // here we define async task and when that particular get completed or failed,
//   // Then we use resolve or reject accordingly
//   setTimeout(() => {
//     // resolve('promise resolved');
//     reject('promise rejected');
//   }, 500);
// });
// console.log({ promise });

//Consumption phase

// One catch here is when promise is get rejected or failed, than we have catch block and .then also have second callback which also handle rejected promise if we write both than .then second callback will get executed not the catch one, as in rejected promises will handled only once

// promise
//   .then(
//     (data) => {
//       console.log('resolve', { data });
//     }
//     // ,
//     // (error) => {
//     //   console.log('THEN callback', error);
//     // }
//   )
//   .catch((error) => {
//     console.log('catch callback', { error });
//   })
//   .finally(() => {
//     console.log(
//       'finally will get always either promise get resolved or rejected'
//     );
//   });

// promise
//   .then((data) => {
//     console.log({ data });
//     //for visualization purpose
//     // new Promise.resolve();
//     // if return anything from this .then callback, we will get in the bottom or next .then callback.
//     return 2; // internally it will do like Promise.resolve(2) and we will get 2 in next ,then callback
//   })
//   .then((data1) => {
//     // reason here we are getting undefined, because then(catch also) always return resolved promise.
//     console.log('data1', data1);
//     return 10;
//   })
//   .catch((error) => {
//     // here this in between .then callback, this catch will not trigger until promise get rejected even though its in the sequence of .then callback
//     console.log('catch-1 error', error);
//     // return 'return from catch callback';
//   })
//   .then((data2) => {
//     // if promise get rejected then here we will get undefined if nothing got return from catch and if returned we will get what is returned by catch block
//     console.log('data2', data2);
//   })
//   .catch(() => {
//     // will be ignored if once catch block handler already got called earlier, but but but if after executing first catch block in chaining any other .then throw error then 2nd catch will also get executed
//     console.log('catch-2 ');
//   })
//   .finally(() => {
//     console.log('finally-1');
//   })
//   .finally(() => {
//     console.log('finally-2');
//   });

// Note: .then, .catch and finally can be multiple as each method return promise, that make it possible

// class MyPromise {
//   constructor(callback) {
//     callback(this.#resolve, this.#reject);
//   }

//   #resolve() {}

//   #reject() {}

//   then() {}

//   catch() {}

//   finally() {}
// }

// const promiseObj = new MyPromise(function (resolve, reject) {});

const createAsyncTask = (data, delay, needToReject = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (needToReject) {
        reject(data);
      } else {
        resolve(data);
      }
    }, delay);
  });
};

const p1 = createAsyncTask('p1', 1000);
const p2 = createAsyncTask('p2', 500);
const p3 = createAsyncTask('p3', 800);
const p4 = createAsyncTask('p4', 400);

/* 
here console.log is callback like general callback, because in console.log, log is function which we will get invoked once promise resolved

Understanding console.log and Function References
Function References vs. Function Execution:

When you write console.log, you are referencing the console.log function itself without invoking it. It's like pointing to the function, saying, "Here's the function, but I’m not running it yet."
When you write console.log(), you are invoking the function and whatever you pass inside the parentheses is the argument that the function will use.
Functions as First-Class Citizens:

In JavaScript, functions are first-class citizens. This means you can pass them around as values, store them in variables, or pass them as arguments to other functions (like .then()).
Passing console.log as a Callback:

In your code, when you pass console.log to the .then() method, you are not executing console.log immediately. Instead, you are telling the promise, "When you resolve, please execute console.log and pass it the value you resolved with."
How .then(console.log) Works
The .then() Method:

The .then() method is designed to accept a function as its argument. This function will be executed when the promise is resolved.
The resolved value of the promise is passed as an argument to the function you provide to .then().


 const exampleFunction = (callback) => {
   const data = 'Hello, World!';
   callback(data);
 };

  This will print "Hello, World!" to the console:
 exampleFunction(console.log);

 p1.then(console.log);
 p2.then(console.log);
 p3.then(console.log);
 p4.then(console.log);
 */

/*
1. Promise.all take the promises in arrays
2. Promise.all execute the promise in the same sequence as it was passed, if all the promise is resolved
3. If any one of the promise is got rejected then it will discard all other resolved promise and only give me that rejected promise
4. The time taken by the Promise.all to complete or resolved  is a time of promise which took max time to resolve or reject, as per the below example it would be 1000ms. 

Promise.all([p4, p2, p1, p3])
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.log({ error });
  });
*/

/*
1. Promise allSettled take the promise as array
2. Promise.allSettled execute the promise in the same sequence as it was passed, if all the promise is resolved or rejected 
3. If any one of the promise is got rejected then it will not discard all other resolved promise, it will return 
4. The time taken by the Promise.allSettled to complete or resolved  is a time of promise which took max time to resolve or reject, as per the below example it would be 1000ms.
all the promise in array of object format [{status:'',value:''}] unlike Promise.all which only rejected promise
5. catch block will not executed in case of allSettled, even though all the promises got rejected.

Promise.allSettled([p4, p2, p1, p3])
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.log({ error });
  });
*/

// Note: You will use Promise.all and Promise.allSettled if you all promise data

/*
1. race will return only that one single promise that come first or jo sabse pahle resolve or reject hoga wahi milega
2. race will always return a single promise only


Promise.race([p4, p2, p1, p3])
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.log({ error });
  });
*/

/*
1. any will return only that one single promise that come first or jo sabse pahle resolve hoga wahi milega and it will ignore reject even though it first, reject unlike race.
2. any will always return a single promise only.
3. It will ignore rejected promise and catch will not execute even though that reject promise is first, it will only execute catch if all the promises is rejected

It will always look for winner or resolved  promise


Promise.any([p4, p2, p1, p3])
  .then((data) => {
    console.log({ data });
  })
  .catch((error) => {
    console.log('any', { error });
  });
*/

const MyPromiseAll = (allPromises) => {
  return new Promise((resolve, reject) => {
    let promiseArray = [];

    let flag = 0;
    for (let i = 0; i < allPromises.length; i++) {
      allPromises[i]
        .then((data) => {
          // flag++;
          promiseArray[i] = data;

          // if (flag == allPromises.length) {
          //   resolve(promiseArray);
          // }
        })
        .catch((error) => {
          console.log('error', error);
          promiseArray[i] = error;
          // reject(error);
        });
    }
  });
};

MyPromiseAll([p4, p1, p2, p3])
  .then((data) => {
    console.log('MyPromiseAll-custom', data);
  })
  .catch((outsideError) => {
    console.log({ outsideError });
  });
