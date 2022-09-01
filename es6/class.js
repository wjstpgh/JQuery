class Person{
    //생성자
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    hello(){
        console.log(`hello ${this.name} (${this.age})`);
    }
}

//객체생성
const p1=new Person('kim',20);
console.log(p1.name);
console.log(p1.age);
p1.hello();

const p2=new Person('park',24);
console.log(p2.name);
console.log(p2.age);
p2.hello();

console.log(p1 instanceof Person);//true