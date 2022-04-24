function showPrice(){
    var oPrice=document.querySelector("#originalPrice").value;
    var rate=document.querySelector("#rate").value;
    
    if(oPrice>0 && rate>0 && rate<100){
        var savedPrice=oPrice*(rate/100);
        var resultPrice=oPrice-savedPrice;
        document.querySelector("#showResult").innerHTML='상품의 원가격은 '+oPrice+'원이고, 할인률은 '+rate+"%입니다. "+savedPrice+'원 만큼 절약한'+resultPrice+'원에 살수 있습니다.';
    }
    else{
        alert('잘못된 값이 입력되었습니다.');
    }
    
}