var pic=document.querySelector('#pic');
//pic에 마우스오버하면 버블링없이 chpic함수를 호출
//버블링은 하위요소에서 이벤트가 발생할때 상위로 전파되는 형태
pic.addEventListener('mouseover',chPic,false);
pic.addEventListener('mouseout',orgPic,false);

function chPic(){
    pic.src='resource/boy.png';
}
function orgPic(){
    pic.src='resource/girl.png';
}