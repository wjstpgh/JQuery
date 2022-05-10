var str='지금 x라는 문자열을 생성했습니다.';
var replaceStr=window.prompt('문자열 이름입력');
//replace()는 문자열 대체 함수
var resultStr=str.replace('x',replaceStr);
document.write(str+'<br/>');
document.write(resultStr+'<br/>');

str='         공   백   을  제   거        ';
//trim은 앞뒤 공백을 제거
resultStr=str.trim();
console.log(str);
console.log(resultStr);

$(document).ready(function(){
    var $output=$('#output');
    var $input=$('#input');
    //버튼 이벤트 등록
    $('#confirm').click(function(){
        //입력 값 알아내기
        var value=$input.val();
        //앞 공백문자 제거
        var result=ltrim(value);
        $output.html(result);
    });
});

//앞 공백제거함수
function ltrim(str){
    //문자열이 없는 경우
    if(str.length<=0){
        return '';
    }
    //첫번째 문자가 공백아 아니라면 공백제거필요가없다
    var firstChar=str.charAt(0);
    if(firstChar != ' '){
        return str;
    }
    //공백이 끝나는 위치찾기
    var index;
    for(index=1;index<str.length;index++){
        //공백이 아닐때까지 찾기
        var ch=str.charAt(index);
        if(ch != ' '){
            break;
        }
    }
    //문자가 발견된 곳부터 마지막까지 잘라냄
    var result=str.slice(index,str.length);
    return result;
}