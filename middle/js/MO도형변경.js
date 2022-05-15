var mRect=document.querySelector('#rect');

mRect.addEventListener('mouseover',function(){
    mRect.style.background='green';
    mRect.style.borderRadius='50%';
});

mRect.addEventListener('mouseout',function(){
    mRect.style.background='blue';
    mRect.style.borderRadius='';
});