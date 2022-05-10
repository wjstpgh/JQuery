$(document).ready(function(){
    //입력받은 문자열 길이알아내기
    var str=window.prompt('문자열 입력');
    alert('문자열 길이 : '+ str.length);
    //charAt()
    var $print=$('#print');
    var index=0;
    var $printslice=$('#slice');

    var timerID=setInterval(function(){
        var ch=str.charAt(index);//해당인덱스의 문자 저장
        $print.text(index+' : '+ch);//문자출력
        index++;
        //문자 출력이 끝나면 인터벌함수 종료
        if(index>str.length){
            clearInterval(timerID);
            alert('문자가 다 출력되었습니다.');
        }
    },1000);
    //indexOf()는 해당문자를 포함한다면 위치를 리턴
    var loc=str.indexOf('tst');
    if(loc>=0){//indexOf()는 해당문자가 없다면 -1을 리턴
        alert('해당 문자의 위치는'+loc+'입니다.');
    }
    else{
        alert('해당 문자는 존재하지 않습니다.');
    }
    //slice는 시작인덱스와 끝 인덱스까지 문자열을 잘라냄
    var str1='sliceString';
    var str2=str1.slice(-3);
    var str3=str1.substr(1,3);
    //substr은 시작인덱스에서 두번째 매개변수길이만큼 잘라냄
    $printslice.text('원래문장:'+str1+', slice:'+str2+', substr:'+str3);
});