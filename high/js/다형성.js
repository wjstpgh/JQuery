//js에서는 추상클래스,인터페이스,다형성을 지원하지않음
//다만 흉내를 내는 것은 가능
function Runnable(){
    //추상메서드
    this.run=function(){
        //throw는 강제로 에러를 발생시킴
        throw new Error('run() 미구현 에러');
    }
}
//인터페이스
function RunnableImplementsClass(){
    //추상메서드 오버라이딩
    this.run=function(){
        console.log('run');
    }
}
//인터페이스는 구현클래스가 존재하기에 일종의 부모클래스
//상속
RunnableImplementsClass.prototype=new Runnable();
//인스턴스 생성
var human=new RunnableImplementsClass();
//자식에서 재정의된 메서드가 호출됨
human.run();

//다형성 체크
//instanceof : 좌측에는 참조변수, 우측엔 클래스타입
//instanceof연산자의 결과가 참으로 나오면 우측에 있는 타입의 인스턴스거나 부모클래스타입으로 형변환 가능
if(human instanceof RunnableImplementsClass){
    console.log('human 인스턴스변수는 RunnableImplementsClass 타입')
}
//RunnableImplement의 부모는 Runnable이라는 인터페이스
if(human instanceof Runnable){
    console.log('human 인스턴스변수는 Runnable인터페이스 타입')
}
//Object클래스는 모든 클래스의 최고 부모 클래스
if(human instanceof Object){
    console.log('human 인스턴스변수는 Object클래스 타입')
}