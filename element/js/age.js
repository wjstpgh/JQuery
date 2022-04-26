function calc(){
    var currentYear=2022;
    var birthYear=prompt("태어난 년도를 입력하세요","YYYY");
    var age=0;
    age=currentYear-birthYear;
    document.querySelector("#result").innerHTML="당신의 나이는 만으로 "+ age+"세 입니다.";

}