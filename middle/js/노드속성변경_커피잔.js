var bigPic=document.querySelector('#cup');//큰 이미지 요소
var smallPic=document.querySelectorAll('.small');//노드리스트 찾아오기
var cup=document.querySelector('#cup');
var isOpen=false;

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
var view=document.querySelector('#view');
view.addEventListener('click',function(){
    if(isOpen==false){//상세정보가 감춰져있다면
        //상세정보 보여주기
        document.querySelector('#detail').style.display='block';
        view.innerHTML='상세설명닫기';
        isOpen=true;
    }
    else{
        //상세정보 감추기
        document.querySelector('#detail').style.display='none';
        view.innerHTML='상세설명보기';
        isOpen=false;
    }
});