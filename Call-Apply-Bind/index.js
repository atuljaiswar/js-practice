// why we need this method, so in javascript this value get decided based on from where the function getting called, but sometime we need or want to set "this" value explicitly as per our requirement so that is we have call, apply and bind

// apply --> It used to apply "this" value explicitly with multiple argument
// syntax -- func.apply(this,[args1,args2,...])

// call --> It used to apply "this" value explicitly with single argument
// syntax -- func.call(this,args1,args2)

// reason to have apply,call and bind concept in javascript is when we call function its this value get decided based on from where its get called, but sometime we want that "this" value get set explicitly

// Note --> In case of "call" we need to pass args individully but if we pass argument in array like then also it will not throw error and it will consider as single value like in case of "apply" [2,3] consider two parameter but in case of "call" [2,3] will consider as single value or parameter
// for eg. obj.show.call(person, [2,3])

const obj = {
  name: 'atul',
  age: 27,
  show(...args) {
    console.log(...args, this === person, 'Name', this.name, 'Age', this.age);
  },
};

const person = {
  name: 'anil',
  age: 26,
};

console.log(obj.show.apply(obj, ['2', '222'])); // output -- Name atul Age 27
console.log(obj.show.call(person, [2, 7], 'iyuyu')); // output -- Name anil Age 26
// here [2.7] will consider as single parameter only

const user = {
  name: 'John',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// Assume this is an event handler, like a button click
function handleClick() {
  console.log('Button clicked!');
  user.sayHello(); // Trying to call sayHello here
}

// Adding event listener to a button
document.getElementById('myButton').addEventListener('click', handleClick);
