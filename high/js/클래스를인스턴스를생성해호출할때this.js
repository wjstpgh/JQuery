var userName='전역';
//함수정의
function User(name){
    this.userName=name;
}
//함수형태가 아닌 클래스형태로 인스턴스 생성
//그러므로 this는 클래스의 변수를 가르킴
var user=new User('클래스');
//전역변수는 변경되지 않음
console.log('userName : '+userName);
//전역변수가 아닌 클래스의 변수로 접근하겠다면
console.log('userName : '+user.userName);