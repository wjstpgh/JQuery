function newRegister(){

    var newP=document.createElement('p');
    var userName=document.querySelector('#userName');
    var newText=document.createTextNode(userName.value);
    newP.appendChild(newText);//p노드를 상위요소 text하위요소 연결

    if(userName.value==''){
        alert('값이 없습니다.');
    }
    else{
        var delBtn=document.createElement('span');//버튼추가
        var delText=document.createTextNode('X');//텍스트노드 추가
        delBtn.setAttribute('class','del');//클래스선택자추가
        delBtn.appendChild(delText);//버튼요소에 텍스트노드연결
        newP.appendChild(delBtn);//delbTn을 p요소에 하위요소로 추가

        var nameList=document.querySelector('#nameList');
        nameList.insertBefore(newP,nameList.childNodes[0]);//p요소를 리스트앞에 추가
        //nameList.appendChild(newP);
        userName.value='';

        var removeBtns=document.querySelectorAll('.del');
        //remoteBtns, 'x'전체를 반복
        for(var i=0;i<removeBtns.length;i++){
            //removeBtns 각각의 버튼에 이벤트 등록
            removeBtns[i].addEventListener('click',function(){
                //span태그의 두번상위태그인 nameList에 접근
                //span > p > nameList
                if(this.parentNode.parentNode){
                    //p태그 삭제
                    this.parentNode.parentNode.removeChild(this.parentNode);
                }
            });
        }
    } 
}