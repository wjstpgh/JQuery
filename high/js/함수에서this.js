//전역 변수
var data=10;
$(function( ){
    //함수에서 this는 window객체에 속한다.
    function outer(){
        //중첩함수
        function inner(){
            //윈도우 객체의 this
            this.data=20;
            var data=30;

            document.write('1. data : '+data+'<br/>');
            document.write('2. this.data : '+this.data+'<br/>');
            document.write('3. window.data : '+window.data+'<br/>');
        }
        inner();
    }
    outer();
});