//new연산자는 내부적으로 빈 객체를 생성하고 
//같은 이름의 프로토타입 객체를 원형으로 설정

function Add(a,b){
    this.a=a;
    this.b=b;
}

Add.prototype.plus=function(){
    return this.a+this.b;
}
//new 연산자의 동작
const add=new Add(1,2);
console.log(add.plus());//3

//내부동작
const newobj={};
newobj.__proto__=Add.prototype;
Add.apply(newobj,[1,2]);
console.log(newobj.plus());//3
