class Employee {
    id : number ;
    name : string ;

    constructor(id: number, name : string)
    {
        this.id= id ;
        this.name = name ;
    }
    display(): void {
        console.log(`Id =${this.id}, Name = ${this.name}`);

    }

}

let emp1 = new Employee ( 1, "steve");
emp1.display();

class Employee1 {
    private id : number;
    private name:string;
    protected age : number;
    public isOkay: boolean ;
    constructor ( id: number , name: string , age: number , isOkay : boolean)
    {
        this.id = id ;
        this.name = name ;
        this.age = age ;
        this.isOkay = isOkay
    }

    display(): void {

        console.log(`Id = ${this.id}, Name = ${this.name},Age = ${this.age},IsOkay = ${this.isOkay}`);

    }
}

let emp2 = new Employee1(1,"Steve",21,true);
emp2.display();