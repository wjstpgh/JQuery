//클래스 정의
function MyClass(){
    this.property1='value1';
}
//프로토타입 메소드 정의
MyClass.prototype.method1=function(){
    alert(this.property1);
}
//MyClass라는 객체단에 속해있는 this
var my=new MyClass();
my.method1();