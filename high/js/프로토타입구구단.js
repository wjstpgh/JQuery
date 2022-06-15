$(function( ){
    //인스턴스 생성
    var dan=new Dan();

    $('#3dan').on('click',function(){
        dan.print3dan();
    });
    $('#6dan').on('click',function(){
        dan.print6dan();
    });
    $('#9dan').on('click',function(){
        dan.print9dan();
    });
    $('#clear').on('click',function(){
        dan.clear();
    });
});
//구구단 클래스 생성
function Dan(){
    //출력 노드 찾아오기
    this.$output=$('#output');
}
//프로토타입 메소드 생성
Dan.prototype.printDan=function(dan){
    var str='';
    for(var i=1;i<=9;i++){
        str+=dan+' * '+i+'='+(dan*i)+'<br/>';
    }
    this.$output.html(str);
}
//3단
Dan.prototype.print3dan=function(){
    this.printDan(3);
}
//6단
Dan.prototype.print6dan=function(){
    this.printDan(6);
}
//9단
Dan.prototype.print9dan=function(){
    this.printDan(9);
}
//출력 정보 지우기
Dan.prototype.clear=function(){
    this.$output.html('');
}