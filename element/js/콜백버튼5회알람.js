$(document).ready(function(){
    checkCount(showAlert);
});
//일반함수(로직처리부분)
function showAlert(){
    alert('완료');
}
//콜백함수를 이용한 방법
function checkCount(callback){
    var count=0;
    $('#btnStart').click(function(){
        count++;
        if(count>=5){
            callback();
        }
    });
}