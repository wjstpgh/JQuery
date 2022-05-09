var $info=null;

$(document).ready(function(){
    $info=$('#panel');
    showRandom();
    setInterval(showRandom,1000);//1초마다 난수함수호출
});

function showRandom(){//난수출력함수
    var num=parseInt(Math.random()*100+1);
    $info.html(num);
}