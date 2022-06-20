$(function( ){
    var person=new Person('kim','man','health');
    person.say();
    person.showInfo();
});
//추상화
function Person(name,gender,hobby){
    //사람이 공통으로 가지는 프로퍼티
    this.name=name;
    this.gender=gender;
    this.hobby=hobby;
}
//공통 부분을 메소드로 정의
Person.prototype.say=function(){//선언부
    document.write('언급하다<br/>');  //구현부
}
Person.prototype.see=function(){
    document.write('시야에 담다<br/>');
}
Person.prototype.eat=function(){
    document.write('입에 넣어 굴리다<br/>');
}
Person.prototype.listen=function(){
    document.write('공기의 파장이 고막에 울리다<br/>');
}
//프로퍼티 출력
Person.prototype.showInfo=function(){
    document.write('name : '+this.name+'<br/>');
    document.write('gender : '+this.gender+'<br/>');
    document.write('hobby : '+this.hobby+'<br/>');
}