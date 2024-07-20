//boxing
let a = 'aBC';
let convertedObject = new String(a);
// console.log({ convertedObject }, typeof convertedObject);
let b = a.toLowerCase();

//unboxing
let primitiveValue = convertedObject?.valueOf();
// console.log({ primitiveValue }, typeof primitiveValue);
// let x = Object(false);
// console.log(x.valueOf(), typeof x, x == false);
// console.log(x === true);

// here primitive type converted to object as Boxing but the primitive converted object it cant access any proerty added to new cretaed object while boxing primitive value
let str = 'Hello';
let objStr = new String(str);
objStr.test = 'test';

console.log('str', str.test); // undefined
console.log({ objStr }, objStr.test); // test

// in javascript only null and undefined cant be boxed because they dont have wrapper unlike false, 0 both have Boolean and Number wrapper but undefined and null dont have any wrapper
let nullValue = null;
console.log(nullValue.toString()); // TypeError: Cannot read properties of null

//need to revert this in future as its buggy code
