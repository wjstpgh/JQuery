$(document).ready(setInterval(function(){
    var $print=$('#print');
    //Date클래스 인스턴스를 가져옴
    var date=new Date();
    var year=date.getFullYear();//연도
    var mon=date.getMonth();//월(0~11)
    var Day=date.getDate()//일
    var day=date.getDay();//요일(0~6)
    var hour=date.getHours();//시
    var min=date.getMinutes();//분
    var sec=date.getSeconds();//초
    var msec=date.getMilliseconds();
    var dayArr=['일','월','화','수','목','금','토'];

    $print.html(year+'년 '+(mon+1)+'월 '+Day+'일 '+dayArr[day]+'요일 '+hour+'시 '+min+'분 '+sec+'.'+msec+'초');
},10))