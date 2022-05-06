function calculator(op,num1,num2){
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
    return result;
}
var op=prompt('사칙연산기호');
var num1=parseInt(prompt('숫자'));
var num2=parseInt(prompt('숫자'));
document.write('결과 : '+calculator(op,num1,num2)+'<br/>');