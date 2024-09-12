var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var john = {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    address: {
        city: 'Bremen',
        street: 'Pappelstrasse',
        building: 10
    },
    fullName: function (greeting) {
        return "".concat(greeting, " ").concat(this.firstName, " ").concat(this.lastName);
    }
};
console.log(john.fullName('Mr.'));
console.log(john.id);
// john.id = 10;
var peter = {
    id: 2,
    firstName: 'Peter',
    lastName: 'Jackson',
    address: {
        city: 'Bremen',
        street: 'Pappelstrasse',
        building: 10
    },
    fullName: function (greeting) {
        return "".concat(greeting, " ").concat(this.firstName, " ").concat(this.lastName);
    }
};
console.log(peter.fullName('Mr.'));
console.log(peter.id);
peter.id = 20;
console.log(peter.id);
var peter1 = __assign({}, peter);
console.log(peter1);
// peter1.id = 2;
var peter2 = peter;
console.log(peter2);
