let a: number = 10;
let b: string = "Hello";
let c: boolean = true;

function add(d:number,e:number):number{
    return d+e;
}
console.log(add(10,20));


type Person={id:number,name:string};
let p:Person={id:1,name:"John"};
console.log(p);

let y:number|string;
y=10;
console.log(y);

let z:"Red"|"Green"|"Blue";
z="Red";
console.log(z);


