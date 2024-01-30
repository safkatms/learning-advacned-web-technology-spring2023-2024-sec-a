class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`Hello! My name is ${this.name}.`);
    }
}
const john = new Person('John',24);
john.speak();

//class inheritance
class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} 's grade is ${this.grade}.`)
    }
}

const alice = new Student('Alice',23,3.5);
alice.speak();
alice.study();

console.log(Object.keys(alice));
console.log(Object.values(alice));
console.log(Object.entries(alice));