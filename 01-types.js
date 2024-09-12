var isLoading;
isLoading = true;
// isLoading = 0;
var num = 42;
// num = 'Hello';
var str = 'Hello world!';
console.log(str);
// Arrays
var primes1 = [2, 3, 5, 7];
var primes2 = [11, 13, 17];
primes2.push(19);
// primes2.push('23');
console.log(primes1);
primes2.forEach(function (n) { return console.log(n); });
// Tuple
var john = ['John', 'Smith', 123456789];
john[1] = 'Doe';
// john[0] = 0;
// john[3] = 'male';
john.push('male');
// john.push(true);
john.push(28);
// john[3] = '1';
console.log(john);
// any
var a = 100500;
a = 'Hello';
a = false;
// function
function greeting(name) {
    console.log("Hello ".concat(name));
    // return 'Hi';
}
greeting('Peter');
var nickName = 'admin';
var id1 = 'john@gmail.com';
var id2 = 1234;
// const arr: (number|string)[] = ['one', 2, 'three'];
var arr = ['one', 2, 'three'];
var peter = {
    email: 'peter@gmail.com',
    password: '1234',
    birthDate: new Date('1999-03-09'),
    hobby: 'chess'
};
var mary = {
    email: 'mary@gmail.com',
    password: '4321',
    zip: 1234,
    hobby: 'JS'
};
console.log(peter);
console.log(mary);
var wardrobe = {
    width: 10,
    depth: 10,
    height: 20,
    area: function () {
        return this.width * this.depth;
    }
};
console.log(wardrobe.area());
