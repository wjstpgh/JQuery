//부모 클래스 정의
function Car(speed){
    this.speed=speed;
}
//메서드 정의
Car.prototype.speedUp=function(){
    this.speed+=10;
    document.write('Car speed : '+this.speed+'</br>');
}
Car.prototype.speedDown=function(){
    this.speed-=10;
    document.write('Car speed : '+this.speed+'</br>');
}
Car.prototype.stop=function(){
    document.write('차가 멈춥니다.</br>');
}
//자식 클래스 정의
function SportCar(speed){
    this.speed=speed;
}
//자식클래스 메서드 정의
SportCar.prototype.run=function(){
    document.write('Sport Car!! Speed : '+this.speed+'</br>');
}
//부모 클래스 인스턴스 생성
var car=new Car(100);
car.speedUp();
car.speedDown();
car.stop();
//자식 클래스 인스턴스 생성
var sportCar1=new SportCar(40);
sportCar1.run();
//상속
SportCar.prototype=new Car();
//자식클래스 메서드 정의
SportCar.prototype.run=function(){
    document.write('Sport Car!! Speed : '+this.speed+'</br>');
}
var sportCar2=new SportCar(50);
sportCar2.speedUp();
sportCar2.speedDown();
sportCar2.stop();
sportCar2.run();