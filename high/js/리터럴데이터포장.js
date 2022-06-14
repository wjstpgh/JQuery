$(function( ){
    function showInfo(userName,id,nickName,age,address){
        document.write( '이름 : '+userName+
                        ' 아이디 : '+id+
                        ' 별명 : '+nickName+
                        ' 나이 : '+age+
                        ' 주소 : '+address );
    }
    //showInfo('김','kim','돌김','1','남해');

    function showLiteral(Info){
        document.write( '이름 : '+Info.userName+
                        ' 아이디 : '+Info.id+
                        ' 별명 : '+Info.nickName+
                        ' 나이 : '+Info.age+
                        ' 주소 : '+Info.address );
    }
    //리터럴 방식
    var userInfo={
        userName:'박',
        id:'park',
        nickName:'대박',
        age:'2',
        address:'지붕위'
    }
    showLiteral(userInfo);
});