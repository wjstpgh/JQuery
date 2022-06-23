//부모클래스로 중복 코드 담기
function MyParent(){
    this.property1=10;
}
//중복 메서드 정의
MyParent.prototype.method1=function(){
    console.log('속성1: '+this.property1);
}
//첫번째 클래스
function MyClassA(){
    this.property1=10;
}
//상속
//MyClassA.prototype=new MyParent();
//메서드 정의
MyClassA.prototype.method1=function(){
    console.log('속성1: '+this.property1);
}
//첫번째 클래스가 가지는 고유의 메서드
MyClassA.prototype.method2=function(){
    console.log('MyClassA의 고유 기능');
}
//두번째 클래스
function MyClassB(){
    this.property1=10;
}
//메서드 정의
MyClassB.prototype.method1=function(){
    console.log('속성1:'+this.property1);
}
//두번째 클래스의 고유 메서드
MyClassB.prototype.method2=function(){
    console.log('MyClassB의 고유기능');
}
//인스턴스 생성
var classA=new MyClassA();
//프로퍼티와 메서드 접근
console.log('classA.property1:'+classA.property1);
classA.method1();
classA.method2();

var classB=new MyClassB();
//프로퍼티와 메서드 접근
console.log('classB.property1:'+classB.property1);
classB.method1();
classB.method2();