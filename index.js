import HashMap from './hashmap.js';

let hMap = new HashMap(16); // Creates a 16 buckets HashMap

hMap.set('lion', 'big');
console.log(hMap.get('lion')); // big
hMap.set('lion', 'small');
console.log(hMap.get('lion')); // small

hMap.set('grape', 'purple');
hMap.set('hat', 'black');
console.log(hMap.has('grape')); // true
console.log(hMap.has('hat')); // true

hMap.set('delete', 'me');
console.log(hMap.length()); // 4;
console.log(hMap.remove('delete')); // true
console.log(hMap.length()); // 3;
console.log(hMap.has('delete')); // false

console.log(hMap.capacity); // 16

hMap.set('carrot', 'orange');
hMap.set('dog', 'brown');
hMap.set('elephant', 'gray');
hMap.set('frog', 'green');
hMap.set('ice cream', 'white');
hMap.set('jacket', 'blue');
hMap.set('kite', 'pink');
hMap.set('apple', 'red');
hMap.set('banana', 'yellow');
hMap.set('parrot', 'violet');

console.log(hMap.length()); // 13
console.log(hMap.capacity); // 32

console.log(hMap.keys());
// [
//     'carrot',    'frog',
//     'banana',    'grape',
//     'ice cream', 'jacket',
//     'kite',      'elephant',
//     'parrot',    'apple',
//     'hat',       'lion',
//     'dog'
//   ]

console.log(hMap.values());
// [
//     'orange', 'green',
//     'yellow', 'purple',
//     'white',  'blue',
//     'pink',   'gray',
//     'violet', 'red',
//     'black',  'small',
//     'brown'
//   ]

console.log(hMap.entries());
// [
//     [ 'carrot', 'orange' ],
//     [ 'frog', 'green' ],
//     [ 'banana', 'yellow' ],
//     [ 'grape', 'purple' ],
//     [ 'ice cream', 'white' ],
//     [ 'jacket', 'blue' ],
//     [ 'kite', 'pink' ],
//     [ 'elephant', 'gray' ],
//     [ 'parrot', 'violet' ],
//     [ 'apple', 'red' ],
//     [ 'hat', 'black' ],
//     [ 'lion', 'small' ],
//     [ 'dog', 'brown' ]
//   ]

hMap.clear();
console.log(hMap.length()); // 0
console.log(hMap.capacity); // 16
