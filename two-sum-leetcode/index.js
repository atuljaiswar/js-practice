const twoSum = () => {
  let map = new Map();

  let nums = [3, 2, 4];
  let target = 6;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let subtractValue = target - nums[i];
    if (map.has(subtractValue) && map.get(subtractValue) != i) {
      return [map.get(subtractValue), i];
    }
  }
};

const output = twoSum();
console.log({ output });

// console.log({ map });
// console.log('map-get', map.get(11)); // get the value of key 11
// console.log('map-entries', map.entries()); // returns iterator object like { [ 2, 0 ], [ 7, 1 ], [ 11, 2 ], [ 15, 3 ] }
// console.log('map-size', map.size);
// 4;
// console.log('map-size', map.keys()); // [2,7,11,15];
// console.log('map-has', map.has(1));

// Create a new Map
let map = new Map();

// Set key-value pairs
map.set('name', 'Alice');
map.set('age', 30);
map.set('profession', 'Engineer');

// Get a value by key
console.log(map.get('name')); // Output: Alice
console.log(map.get('age')); // Output: 30

// Check if a key exists
console.log(map.has('profession')); // Output: true

// Remove a key-value pair
// map.delete('age');

// Get the size of the map
console.log(map.size, typeof map); // Output: 2

// Iterate over the map and this is not general javascript forEach which is used loop over, it is provided by "new Map" prototype, which is usse a callback which takes value and key
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: Alice
// profession: Engineer

// Convert Map to an array of key-value pairs
let entries = Array.from(map.entries());
console.log(entries);
// Output: [ ['name', 'Alice'], ['profession', 'Engineer'] ]
