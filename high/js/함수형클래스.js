//프로퍼티가 3개, 멤버함수가 1개로 총 4개멤버를 가지는 클래스
function Person(){
    this.name='이름';
    this.age=10;
    this.address='주소';
    this.displayPerson=function(){
        document.write(this.name+'의 나이는 '+this.age+'입니다.');
    }
}
//인스턴스 생성
var person=new Person();
//멤버 변수 값 변경
person.age=15;
//person의 멤버 함수 호출
person.displayPerson();

//또 다른 인스턴스 생성
var other=new Person();
//기존 저장된 멤버변수가 호출됨
other.name='타인';

other.displayPerson();