function Parent(){
    this.property='parent';
    console.log('부모 생성자');
}
Parent.prototype.method=function(){
    console.log('부모속성 : '+this.property);
}
function Child(){
    console.log('자식 생성자');
}
Child.prototype=new Parent();
//클래스 생성시 prototype의 constructor는 default로 만들어짐
//constructor에는 해당 인스턴스가 어떤 클래스에 속해있는지 담겨있음
//상속 시 consturctor에는 부모클래스의 생성자가 담기게됨
Child.prototype.constructor=Child;
//Overide(선언부는 동일, 구현부는 다르게)
Child.prototype.method=function(){
    console.log('자식속성 : '+this.property);
}
var child=new Child();
//아래 메소드는 부모의 메소드가 아닌 자식의 메소드를 호출
child.method();