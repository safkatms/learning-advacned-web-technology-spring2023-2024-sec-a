function display<T>(id: T, name: T): void {
    console.log(`ID= ${id},Name=${name}`);
}
display<number | string>(101, "Steve");
display<string>("102", "Bill");

interface IEmployee {
    id:number;
    name:string;
    display():void;
}

class Employee6 implements IEmployee{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    display():void{
        console.log(`ID=${this.id},Name=${this.name}`);
    };
}

let emp6 =  new Employee6(1,"Steve");
emp6.display();



