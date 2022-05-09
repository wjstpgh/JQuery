//지구를 클릭하면 점수증가
        //5초동안만 가능
        $(document).ready(function(){
            //점수 저장변수
            var cnt=0;
            //점수 출력부
            var $score=$('#score');
            //플래그변수 선언
            var play=true;

            $('#gigu').click(function(){
                //클릭시 점수증가
                if(play){
                    cnt++;
                    $score.html(cnt);
                }
            });
            //5초후 게임 종료
            setTimeout(function(){
                play=false;
                alert('게임종료');
            },5000);
        });