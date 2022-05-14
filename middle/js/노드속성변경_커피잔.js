var bigPic=document.querySelector('#cup');//큰 이미지 요소
var smallPic=document.querySelectorAll('.small');//노드리스트 찾아오기
var cup=document.querySelector('#cup');

for(var i=0;i<smallPic.length;i++){
    //작은 이미지 노드리스트를 클릭하면 함수호출
    smallPic[i].addEventListener('click',chPic);
}
function chPic(){
    //클릭 이벤트가 발생한 대상의 속성가져오기
    var newPic=this.src;
    //
    bigPic.setAttribute('src',newPic);
    //cup.src=newPic;
}