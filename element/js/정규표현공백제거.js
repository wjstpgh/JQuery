var str='  공백  제거  문자열  커팅  ';
console.log('원본 문자열:'+str);
//정규 표현식을 이용한 전체공백제거
console.log('전체 공백 제거:'+str.replace(/(\s*)/g,''));
console.log('앞 공백 제거:'+str.replace(/^\s*/,''));
console.log('뒷 공백 제거:'+str.replace(/\s*$/,''));