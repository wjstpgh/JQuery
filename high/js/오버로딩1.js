//더하기함수
function sum(){
    var result=0;
    //arguments객체는 함수호출시 전달되는 array행태의 매개변수
    //array형태이긴 하지만 인덱스와 length외의 내장함수는 사용할 수 없음
    for(var i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}
console.log(sum(10));
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40));