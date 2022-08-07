//심볼타입은 es6에서 추가된 객체의 속성으로 사용되는 원시형타입(원시형,참조형 중)
//심볼형이 사용됬다는 것은 유니크한 값을 가진다는 것
//심볼형은 따라서 변경이 불가능함

//충돌을 피하기 위해 심볼을 사용함
let arr=[1,2,3];
console.log(arr.length); //3, 배열의 길이
//arr.length=10;//arr배열의 length속성을 정의, 내장된 length의 값을 덮어써버림
console.log(arr.length); //10

const length=Symbol('length');
arr[length]=10; //arr배열의 length속성에 10을 할당, 내장된 length와 충돌하지 않음
console.log(arr.length);//3, 내장된 배열길이
console.log(arr[length]);//10, arr배열의 length속성
