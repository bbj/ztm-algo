const strings = ['a','b','c','d'];
//32 bits sytem: 4 bytes = 4x8 to store a character or number
//4*4 bytes = 16 bytes

//lookup
console.log("strings: ",strings);
console.log("strings[2]=",strings[2]);

//push
strings.push('e'); // O(1) - add element at the end
console.log("strings.push('e'): ",strings);

//pop
strings.pop(); // O(1) - remove 1 element at the end
console.log("strings.pop(): ",strings);

//unshift - INSERT
strings.unshift('x'); // O(n) - have to iterate to shift all values
console.log("strings.unshift('x'): ",strings);

//splice - INSERT & DELETE
strings.splice(2, 0, 'alien'); //O(n) - insert in the middle
console.log("strings.splice(2, 0, 'alien'): ",strings);


