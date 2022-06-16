//전역 변수
var data=10;
$(function( ){
    $('#myBtn').click(function(e){
        this.data=20;
        var data=30;

        console.log('1.data : '+data);
        //이벤트 리스너에서 this는 이벤트 발생 객체에 속한다.
        console.log('2.this.data : '+this.data);
        console.log('3.window.data : '+window.data);
    });
});