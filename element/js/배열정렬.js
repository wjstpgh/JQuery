var names=['네이버','카카오','라인','쿠팡','배달의민족'];
document.write('실행 전 : '+names.join(',')+'</br>');
//sort는 문자열 기반 오름차순 정렬
names.sort();
document.write('sort(ASC) 실행 : '+names.join(',')+'</br>');

//문자열을 내림차순으로 정렬
names.sort(function(a,b){
    if(a>b) return -1;
    if(a<b) return 1;
});
document.write('sort(DESC) 실행 : '+names.join(',')+'</br>');

var numbers=[6,7,1,14,52,3];
document.write('실행 전 : '+numbers.join()+'</br>');

numbers.sort();//문자열 기반이므로 문제가 생김
document.write('오름차순 실행(오류) : '+numbers.join()+'</br>');

numbers.sort(function(a,b){
    if(a>b)return 1;
    if(a<b)return -1;
});
document.write('오름차순 실행 : '+numbers.join()+'</br>');

//수 정렬을 위한 익명함수정의
numbers.sort(function(a,b){
    if(a>b)return -1;
    if(a<b)return 1;
});
document.write('내림차순 실행 : '+numbers.join()+'</br>');