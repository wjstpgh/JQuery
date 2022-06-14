//리터럴 방식으로 생성된 클래스는 
//변수에 자동으로 인스턴스가 만들어져 주소가 대입됨
var user={
    name:'kim',
    age:19,
    showInfo:function(){
        //this는 객체 자신의 주소를 가르킨다.
        //this는 인스턴스가 생성될 때 활성화됨
        document.write('이름은 '+this.name+'입니다.');
    }
}
user.showInfo();
document.write('나이는 '+user.age+'입니다.')
//리터럴은 하나의 인스턴스만 생성가능하다
//데이터 포장용이나 매개변수로 사용할 때 자주 쓰임