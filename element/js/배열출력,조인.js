//리터럴 형태로 String타입 배열 생성
var clients=['cli1','cli2','cli3','cli4','cli5'];
document.write('클라이언트 배열 크기 : '+clients.length+'</br>');

//배열 요소 접근 출력
for(var i=0;i<clients.length;i++){
    //배열 요소 접근해 저장
    var client=clients[i];
    document.write('행렬['+i+'] = '+client+'<br/>');
}
//조인메서드는 배열의 원소를 구분자로 연결함
var str=clients.join(' ');
document.write(str);