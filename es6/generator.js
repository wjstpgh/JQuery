//제너레이터 는 함수지만 보통과는 다르게 동작
//실행 중간에 외부에서 값을 받아서 여러개의 값을 반환
//표현식 function*

//generator test
function* gene(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

//호출 시 바로 실행되는 것이 아닌 iterator객체를 반환
//iter 반복자 객체는 내부적으로 next() method를 가짐



