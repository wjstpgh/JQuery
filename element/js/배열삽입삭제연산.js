var menu=['menu1','menu2','menu3','menu4'];
document.write('실행 전 : '+menu.join(',')+'</br>');
menu.push('menu5');//끝에 배열 요소 추가
document.write('push 실행 : '+menu.join(',')+'</br>');

menu.unshift('menu0');//앞에 배열요소 추가
document.write('unshift 실행 : '+menu.join(',')+'</br>');

menu.splice(2,3,'메뉴추가');//배열 n번째에 배열 요소 추가
document.write('splice 실행 : '+menu.join(',')+'</br>');

menu.shift();//첫번째 배열요소 삭제
document.write('shift 실행 : '+menu.join(',')+'</br>');

menu.pop();//마지막 배열요소 삭제
document.write('pop 실행 : '+menu.join(',')+'</br>');