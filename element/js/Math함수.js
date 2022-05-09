var num1=window.prompt('숫자입력',0);
var num2=window.prompt('숫자입력',0);
alert('입력 수중 작은수는 : '+Math.min(num1,num2));
alert('입력 수중 큰수는 : '+Math.max(num1,num2));

var num=112;
var page=Math.ceil(num/10);//올림값
alert('ceil은 올림값 11.2 = '+page);
var page=Math.floor(num/10);//내림값
alert('floor는 내림값 11.2 = '+page);