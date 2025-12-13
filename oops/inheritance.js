// INHERITANCE  : INHERITANCE is a mechnaism that allows us to cretate new classes on the basis of already existing classes

class person {
    constructor(name,age){
        console.log("parent class constructor")
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hi, i am a ${this.name}`);
    }
}

class student extends person {
    constructor(name,age,marks){
        console.log("student constructor")
        super(name,age);
        this.marks = marks;
    }
 
}


class teacher extends person {
    constructor(name,age,subject){  // pehla andar jayega console print karega ,parenta constructor ko call lgaega value pass karega t1 mein phir hum print karenaga
        console.log("teacher constructor")
        super(name,age);  // parent class constructor is being called
        this.subject = subject;
    }
 
}

let t1 = new teacher("eve",32,"english");
console.log(t1)

let s1 = new student("eve",32,"english");
console.log(s1)


// note: child class function can overwrite parents class function
// if both classes has some common (base) we write parents classes for it