$(function( ){
    //속성값 알아내기
    console.log('src : '+$('.content img').attr('src'));
    console.log('href : '+$('.content a').attr('href'));
    //다중 속성 알아내기
    var $content=$('.content');
    //data()는 data-로 시작하는 모든 속성값을 객체형태로 리턴
    console.log('data() : ',$content.data());
    //data-name값 출력
    console.log('data(name) : ',$content.data('name'));
    //attr()로도 data-name 출력 가능
    console.log('attr(data-name) : ',$content.attr('data-name'));
    //data()는 data로 시작하는 값만 출력 가능
    console.log('data(temp-data) : ',$content.data('temp-data'));
    //attr()로 temp-data출력가능
    console.log('attr(temp-data) : ',$content.attr('temp-data'));
});