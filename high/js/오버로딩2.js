//사각형 넓이 함수
function areaRectangle(){
    var result=0;
    //정사각형일때
    if(arguments.length==1){
        result=arguments[0]**2;
    }
    //직사각형일때
    else if(arguments.length==2){
        result=arguments[0]*arguments[1];
    }
    return result;
}
console.log('정사각형넓이 : '+areaRectangle(10));
console.log('직사각형넓이 : '+areaRectangle(5,4));