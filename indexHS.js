import HashSet from './hashset.js';

let hSet = new HashSet(16); // Creates a 16 buckets HashSet

hSet.set('grape');
hSet.set('hat');
console.log(hSet.has('grape')); // true
console.log(hSet.has('hat')); // true

hSet.set('deleteMe');
console.log(hSet.length()); // 3;
console.log(hSet.remove('deleteMe')); // true
console.log(hSet.length()); // 2;
console.log(hSet.has('deleteMe')); // false

console.log(hSet.capacity); // 16

hSet.set('lion');
hSet.set('carrot');
hSet.set('dog');
hSet.set('elephant');
hSet.set('frog');
hSet.set('ice cream');
hSet.set('jacket');
hSet.set('kite');
hSet.set('apple');
hSet.set('banana');
hSet.set('parrot');

console.log(hSet.length()); // 13
console.log(hSet.capacity); // 32

console.log(hSet.keys());
// [
//     'carrot',    'frog',
//     'banana',    'grape',
//     'ice cream', 'jacket',
//     'kite',      'elephant',
//     'parrot',    'apple',
//     'hat',       'lion',
//     'dog'
//   ]

hSet.clear();
console.log(hSet.length()); // 0
console.log(hSet.capacity); // 16
