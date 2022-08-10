//함수 생성과 수행이될때 자신과 같은 이름의 프로토타입 객체가 생성됨

function day(){

}
//day함수의 prototype속성 --> day prototype 객체(참조)
//day prototype 객체의 constructor속성 --> day함수(참조)
//day함수를 통해 생성되는 객체들은 
//모두 prototype을 원형으로 가진다.

//new연산자, 생성자 함수를 이용해 생성된 객체에는 prototype속성이 자동으로 생성
//아래 두 객체의 prototype속성이 가르키는 것은 day의 프로토타입 객체
let mon=new day();
let fri=new day();


