// factory functions

function personMaker(name,age) {
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`hi my name is ${name}`)
        }
    };

    return person;
}

// let p1 = personMaker("rirtik",50 );
// console.log(p1,p1.talk())
// let p2 = personMaker("neha",50);
// like this we can make on factory function and apply on different object
// but the disdavantage is that it has makes different copy in make p1.talk === p2.talk; false

// **** constructor
// it doesnot return anything & start with capital
function Person(name,age){
    this.name = name;
    this.age = age;
    console.log(this);  // from here it is printingg
}

Person.prototype.talks = function ()  {
    console.log(`hi my name is  ${this.name}`);
}

// let p1 =  new Person("sneha",50 );  // it ia new operator lets developer create s an instance of a user defined object type
// let p2 = new Person("alu",50);

// new keyword function ko call lgaega or khali object p1 pass karega or this ko refer karega
// here p1.talk === p2.talk; true , doenot make differnt copy in memory uses same function





// ******classes******///
// the constructor method is a special method of class for creating and initializing an object instance of that class
class Persons {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        console.log(this)
    }

// here we dont need to write prototype line as we are using constructor method which has predefined prototype in it

talk() {
    console.log(`hi my name is ${this.name}`)
}

}
let p1 =  new Persons("baigan",50 );  // it ia new operator lets developer create s an instance of a user defined object type
let p2 = new Persons("bharta",50);