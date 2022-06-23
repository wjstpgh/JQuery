//부모클래스
function MyParent(param1){
    this.property1=param1;
}
MyParent.prototype.method1=function(){
    console.log('부모 메서드1 : '+this.property1);
}
//자식클래스
function MyChild(param1){
    //부모클래스의 매개변수가 있는 생성자
    MyParent.call(this,param1);
}
MyChild.prototype=new MyParent();
var child=new MyChild('자식속성');
//부모클래스의 프로퍼티와 메서드를 호출
console.log('child : '+child.property1);
child.method1();
//부모 인스턴스 생성 > 자식 생성자 호출 > 부모 인스턴스에 추가