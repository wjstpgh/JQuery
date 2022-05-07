//매개변수로 콜백이 들어와서 결과값을 콜백함수에 매개변수로 하여
//또 다른 함수를 호출하게 함
function calculator(op,num1,num2,callback){
    var result='';

    switch(op){
        case '+':
            result=add(num1,num2);
            break;
        case '-':
            result=sub(num1,num2);
            break;  
        case '*':
            result=mul(num1,num2);
            break;
        case '/':
            result=div(num1,num2);
            break;
        default:
            result='지원하지 않는 계산';
    }
    function add(num1,num2){
        return num1+num2;
    }
    function sub(num1,num2){
        return num1-num2;
    }
    function mul(num1,num2){
        return num1*num2;
    }
    function div(num1,num2){
        return num1/num2;
    }
    //콜백함수 호출
    callback(result);
}
function print1(result,callback){
    document.write('print1의 결과 : '+result+'<br/>');
    //callback(result);
}
function print2(result){
    document.write('print2의 결과 : '+result+'<br/>');
}
function print3(result){
    document.write('print3의 결과 : '+result+'<br/>');
}
print1(500,print2);
//로직 구현부분은 하나
//로직 처리부분은 여러개
calculator('-',500,300,print1);
calculator('-',500,300,print2);
calculator('-',500,300,print3);