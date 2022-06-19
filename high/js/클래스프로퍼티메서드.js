function My(){
    //일반적 클래스 프로퍼티와 메서드
    this.name='my'
    this.callname=function(){
        alert('name is '+this.name)
    }
}
//인스턴스 생성
var my=new My();
my.callname();

//클래스 정보 추가(클래스 프로퍼티)
My.version='2.7';
alert(My.version);
//클래스 메소드
My.getInfo=function(){
    var info={
        user:'js',
        email:'www@google.com',
        desc:'클래스속성정보'
    }
    return info;
}
alert(My.getInfo().desc);