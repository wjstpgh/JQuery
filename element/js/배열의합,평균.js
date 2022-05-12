var arr=[1,5,10,55,100];
//배열의 총합
var sum=0;

for(var i=0;i<arr.length;i++){
    sum+=arr[i];//누적
}
document.write('총합 : '+sum+'</br>');
document.write('평균 : '+sum/arr.length+'</br>');