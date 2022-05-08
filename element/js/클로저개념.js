//일반함수
// function add(){
//     var cnt=0;
//     cnt++;
//     return cnt;
// }
// document.write('1번째 cnt 값:'+add()+'<br/>');
// document.write('2번째 cnt 값:'+add()+'<br/>');
// document.write('3번째 cnt 값:'+add()+'<br/>');
// document.write('4번째 cnt 값:'+add()+'<br/>');
// document.write('5번째 cnt 값:'+add()+'<br/>');

//클로저 이용
function createCounter(){
    var cnt=0;
    function add(){//클로저함수
        cnt++;//클로져 현상이 일어남
        return cnt;
    }
    return add;
}
var counter=createCounter();//함수 리터럴
document.write('1번째 cnt 값:'+counter()+'<br/>');
document.write('2번째 cnt 값:'+counter()+'<br/>');
document.write('3번째 cnt 값:'+counter()+'<br/>');
document.write('4번째 cnt 값:'+counter()+'<br/>');
document.write('5번째 cnt 값:'+counter()+'<br/>');