//what is Symbol
// Symbol is primitive data types like other primitive type in javascript
//it is created using Symbol() and stand out because of uniqueness feature even if two symbol has description

const symbol1 = Symbol('test');
const symbol2 = Symbol('test');

//One of the core features of symbols is their uniqueness. Even if two symbols have the same description, JavaScript considers them different.
console.log('isEqual', symbol1 === symbol2);

const testSymbol1 = Symbol('id');
const testSymbol2 = Symbol('id');
const testSymbol3 = Symbol('name');

// Symbol can be used as object property too, but they are hiddne if we try to console obj
let obj = {
  name: 'atul',
  id: '123',
  [testSymbol1]: '123',
};

// this will create testSymbol2 as normal string property of obj not an symbol
obj.testSymbol2 = '3434';

//this will create as symbol
obj[testSymbol2] = '123';

console.log('testSymbol1', testSymbol1); // Symbol('id')

console.log('symbol value checks', obj[testSymbol2] === obj[testSymbol1]); // true as it will take value of assigned to symbol

console.log('Symbol it self check', testSymbol1 === testSymbol2);

//Why obj.testSymbol1 is undefined:
//testSymbol1 is not a string, so obj.testSymbol1 looks for a property with the string key "testSymbol1" in obj, which doesn't exist, hence it returns undefined.
//Symbols are not automatically converted to strings, so you must explicitly use the symbol variable with bracket notation to access the value.
console.log(obj.testSymbol1); // undefined

console.log('testing', Object.getOwnPropertyNames(obj));
console.log('only symbols are return', Object.getOwnPropertySymbols(obj));
console.log(
  'this will return all the inluding string and symbol key property',
  Reflect.ownKeys(obj)
);

//Limitations of Symbol:

//Symbols are ignored in for..in loop.
//Ignored by functions such as Object.keys(), Object.getOwnPropertyNames() and JSON.stringify() and hence cannot be    serialized.
//Symbol was primarily used to ensure privacy. But methods like Object.getOwnPropertySymbols() returns an array of any symbol-based keys and Reflect.ownKeys() returns an array of all keys, including symbols.
