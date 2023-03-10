// ITEM A
let a = 10;
let b = 20;

console.log("Item A");
console.log(b);

b = 5;

console.log(a, b);
// Output: 10 5

console.log(" ");
console.log("Item B");

// ITEM B
a = 30;
b = 20;
c = a + b;

console.log(c);

b = 10;
console.log(b, c);

c = a + b;
console.log(a, b, c);
// Output: 30 10 40

console.log(" ");
console.log("Item C");

a = 10;
b = 20;
c = a;
b = c;
a = b;

console.log(a, b, c);

console.log(" ");
console.log("Item D");

a = 10;
b = a + 1;
a = b + 1;
b = a + 1;

console.log(a);
// Output: 12
a = b + 1;
console.log(a, b);
//Output: 14 13

console.log(" ");
console.log("Item E");

a = 10;
b = 5;
c = a + b;
b = 20;
a = 10;
console.log(a, b, c);
// Output: 10 20 15

console.log(" ");
console.log("Item F");

x = 1;
y = 2;
z = y - x;
console.log(z);
// Output: 1
x = 5;
y = x + z;
console.log(x, y, z);
// Output 5 6 1