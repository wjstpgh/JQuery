var userName='전역';
//함수정의
function User(name){
    this.userName=name;
}
//클래스 형태의 함수정의이므로 window에 접근
//함수형 클래스 User를 함수형태로 호출했다.
User('클래스');
//전역변수가 변경되어 나타남
console.log('userName : '+userName);