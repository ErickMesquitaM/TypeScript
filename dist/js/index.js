"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var x = 0;
x = Number('100');
console.log(x);
var numbers = [1, 2, 3, 4];
let tuple;
tuple = [2, 'AA', ['sgsg', 'aefsrg']];
const user = {
    name: 'Bla Blá',
    age: 24,
};
console.log(user);
console.log(user.name);
let id = '10';
id = 10;
let id2 = true;
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa",
    size: size.G
};
let userLoged = null;
userLoged = 'autenticado';
function add(a, b) {
    return a + b;
}
console.log(add(2, 20));
function returnString(data) {
    return data + ' resto da string.';
}
console.log(returnString('Bahh'));
function queNãoRetornaNada() {
    console.log(window.innerHeight);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá,${name} ${greet}`);
    }
    else {
        console.log(`Olá,${name}`);
    }
}
console.log(greeting('aaa', 'bbb'));
console.log(greeting('aaa'));
function addNumbers(nums) {
    return nums.n1 + nums.n2;
}
function multNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multNumbers({ n1: 14, n2: 98 }));
function showArraysItems(arr) {
    arr.forEach((item, i) => {
        console.log('Item ' + i + ': ' + item);
    });
}
showArraysItems([1, 2, 3, 4, 5, 'yee yeee']);
showArraysItems(['aaa', 'b', 'c', [], {}, 72]);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showRole(canShow) {
        canShow ? console.log('User: ' + this.role) : console.log('error 401');
    }
}
const user398435 = new User('Usuário', 'Admin', true);
console.log(user398435);
user398435.showRole(true);
class Car {
    constructor(brand, whells) {
        this.brand = brand;
        this.whells = whells;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car('VW', 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, whells, engine) {
        super(brand, whells);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.ceil(Math.random() * 999999999999).toString(36);
                this.createAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('Sam');
console.log(sam);
