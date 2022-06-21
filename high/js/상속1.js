//부모클래스 정의
function MyParent(){
    //프로퍼티 생성
    this.property1='부모클래스속성1';
}
//메소드 생성
MyParent.prototype.method1=function(){
    alert(this.property1);
}
//자식 클래스 정의
function MyChild(){
    //빈 함수
}
//상속
MyChild.prototype=new MyParent();
//인스턴스 생성
var child=new MyChild();
child.method1();