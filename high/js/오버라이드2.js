function Calculator(){
    console.log('Calculator');
}
Calculator.prototype.areaCircle=function(radius){
    console.log('Calculator의 areaCircle호출');
    console.log('areaCircle : '+(3.141592 *(radius*radius)));
}
function Computer(){

}
Computer.prototype=new Calculator();
Computer.prototype.constructor=Computer;
Computer.prototype.areaCircle=function(radius){
    //부모의 기존 함수 호출
    Calculator.prototype.areaCircle.call(this,100);
    //오버라이드 된 함수 호출
    console.log('Computer의 areaCircle호출');
    console.log('Computer : '+(Math.PI *(radius*radius)));
}
var com=new Computer();
com.areaCircle(10);