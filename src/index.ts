// inferencia || annotation = inferencia n usa o typo ao lado do nome, annotation usa, mas msm sem usar, o type e atribuido automaticamente

var x:number = 0;

x = Number('100')

console.log(x);


var numbers: number[] = [1, 2, 3, 4]


// tuplas

let tuple: [number, string, string[] ]

tuple = [2, 'AA', ['sgsg', 'aefsrg']]


// object literals -> {prop: value}

const user: { name: string, age: number } = {
  name: 'Bla Blá',
  age: 24,
}

console.log(user)
console.log(user.name)

// union type

let id: number | string = '10'
id = 10


// type alias

type myIdType = number | string | boolean

let id2: myIdType = true




// enum
enum size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande'
}

const camisa: {} = {
  name: "Camisa",
  size: size.G
}


// literal types

let userLoged: 'autenticado' | null = null
userLoged = 'autenticado'



// funções

function add(a: number , b: number){
  return a + b
}

console.log(add(2, 20))


function returnString(data: string): string {
  return data + ' resto da string.'
} 

console.log( returnString('Bahh') )


function queNãoRetornaNada(): void{
  console.log( window.innerHeight )
}

function greeting(name: string, greet?: string): void{
  if(greet){
    console.log(`Olá,${name} ${greet}`)
  } else {
    console.log(`Olá,${name}`)
  }
}

console.log( greeting('aaa', 'bbb') )
console.log( greeting('aaa') )


// interfaces

interface MathFunctionParams {
  n1: number,
  n2: number
}

function addNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2
}

function multNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2
}

console.log( multNumbers({ n1: 14, n2: 98 }) )


// generics  ===    usar para substituir pelo "any", significa q é generico, aceitando qlquer tipo

function showArraysItems<T>(arr: T[]){
  arr.forEach((item, i) => {
    console.log('Item ' + i + ': ' + item)
  })
}

showArraysItems([1, 2, 3, 4, 5, 'yee yeee'])
showArraysItems(['aaa', 'b', 'c', [], {}, 72])


// classes

class User{
  name
  role
  isApproved

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }

  showRole(canShow: boolean){
    canShow ? console.log( 'User: ' + this.role ) : console.log('error 401')
  } 
}

const user398435 = new User('Usuário', 'Admin', true)

console.log(user398435)
user398435.showRole(true)



// interfaces em classes

interface IVehicle {
  brand: string,
  showBrand(): void
}

class Car implements IVehicle {
  brand;
  whells;


  constructor(brand: string, whells: number) {
    this.brand = brand
    this.whells = whells
  }

  showBrand(): void {
      console.log(`A marca do carro é: ${this.brand}`)
  }
}

const fusca = new Car('VW', 4)

fusca.showBrand()


// herança

class SuperCar extends Car {
  engine;

  constructor(brand: string, whells: number, engine: number) {
    super(brand, whells)
    this.engine = engine
  }
}

const a4 = new SuperCar('Audi', 4, 2.0)

console.log(a4)
a4.showBrand()



// decorators

function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.ceil( Math.random() * 999999999999 ).toString(36)
      createAt = new Date()
    }
  } 
}

@BaseParameters()
class Person {
  name

  constructor(name: string){
    this.name = name
  }
}

const sam = new Person('Sam')
console.log(sam)