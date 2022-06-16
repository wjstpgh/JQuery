var data=10;
//클래스 정의
function MyClass(){
    this.data=0;
}
//프로토타입 메소드 정의
MyClass.prototype.method1=function(){
    //클래스 내의 중첩함수
    function inner(){
        this.data=20;
        var data=30;

        console.log('1.data : '+data);
        //함수내의 this는 클래스에 속해있더라도 window에 속한다.
        console.log('2.this.data : '+this.data);
        console.log('3.window.data : '+window.data);
    }
    inner();
    console.log('4.Class,this.data : '+this.data);
}
var my=new MyClass();
my.method1();