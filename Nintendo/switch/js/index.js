  window.onload = function(){ 
        demo1();
       	demo2();
       	demo3();
       	demo4();
       	demo5();
       	demo6();
       	demo7();
       	demo8();
       	demo9();
       	demo10();
        $(window).scroll(function(){
    		demo2();
    		demo3();
    		demo4();
    		demo5();
    		demo6();
    		demo9();
    		demo10();
      });        
  }; 

	var i=0;
    function demo1(){
   	var h=window.screen.availHeight;
   	var w=window.screen.availWidth;
// 	alert(h);
   	
// 	console.log(h);
// 	console.log(w);
    var mask=$(".main-a-mask");
    var bg=$(".main-a-bg-item");
    // mask.removeClass("is-enter");
    // mask.removeClass("is-leave");      
      
    // mask.addClass("is-enter");
    // setTimeout(function(){
    //     mask.addClass("is-enter");
    // },2000);   
    bg.eq(i).addClass("is-active");
    mask.addClass('mask-show');
    setTimeout(function(){
    	mask.removeClass('mask-show');
    	mask.addClass('mask-hide');
	      for(var j=0;j<bg.length+1;j++){
		      if (i==j) {
		      }
		      else {
		          bg.eq(j).removeClass("is-active");
		      }
    		}
		    i++;
		    if(i>15){
		      i=0;
		    };          
		    },1000);  
		    console.log(i);    
		    setTimeout(function(){ 
		       mask.removeClass('mask-hide');
		       mask.addClass('mask-showStart');       
		    },4000);
 			setTimeout(function(){ 
		       mask.removeClass('mask-showStart');
		       mask.addClass('mask-show');       
		    },5000);
			setTimeout(function(){ 
		       demo1();    
		    },6000);		    		       
}

function demo2(){
			if($(".main-a").hasClass('move01')&&$(".main-logo-logo").hasClass("logo-move1")){
 				if($(document).scrollTop()<30){
 						$(".main-logo-logo").removeClass("logo-move1");
					 	$(".main-a").removeClass("move01");
					 	$(".main-a").addClass("move02");
					 	$(".main-logo-logo").addClass("logo-move2");
					 	$(".main-b-bg1-a img:nth-child(2)").removeClass("logo-move4");
					 	$(".main-b-bg1-a img:nth-child(2)").addClass("logo-move3");
					 }
			}
			if($(document).scrollTop()>=35)
			{
				if($(".main-a").hasClass('move02')&&$(".main-logo-logo").hasClass("logo-move2")){
					$(".main-a").removeClass("move02");
					$(".main-logo-logo").removeClass("logo-move2");
					$(".main-b-bg1-a img:nth-child(2)").removeClass("logo-move3");
				}
				$(".main-a").addClass("move01");
				$(".main-b-bg1-a img:nth-child(2)").addClass("logo-move4");
				$(".main-logo-logo").addClass("logo-move1");
			}						
												
		}
function demo3(){
	if(($(".imga").offset().top + $(".imga").height()-300) < ($(window).height()+$(window).scrollTop())){
			$(".imga").addClass('img-move1');
			$(".main-b-bg1-b-a .a2 ul li:nth-child(3) img").addClass('img-move1');
			$(".main-b-bg1-b-a .a2 ul li:nth-child(1) img").addClass('img-move1');
			$(".main-b-bg1-b-a .a2 ul li:nth-child(2) img").addClass('img-move1');
	}
}
function demo4(){
	if(($(".main-b-bg2-a img").offset().top + $(".main-b-bg2-a img").height()-300) < ($(window).height()+$(window).scrollTop())){
			$(".main-b-bg2-a img").addClass('img-move2');
	}
}
function demo5(){
	if(($(".imgb").offset().top + $(".imgb").height()) < ($(window).height()+$(window).scrollTop())){
			$(".imgb").addClass('img-move1');
			$(".main-b-bg2-b-a .a2 ul li:nth-child(3) img").addClass('img-move1');
			$(".main-b-bg2-b-a .a2 ul li:nth-child(1) img").addClass('img-move1');
			$(".main-b-bg2-b-a .a2 ul li:nth-child(2) img").addClass('img-move1');
}
}
function demo6(){
	if(($(".main-c-a").offset().top + $(".main-c-a").height()) < ($(window).height()+$(window).scrollTop())){
			$(".main-c-a-left").addClass('img-move3');	
			$(".main-c-a-right").addClass('img-move3');	
			
	}
}
    var k=0;
    function demo7(){
    var bg=$(".local-mode__pic1");  
    var bga=$(".local-mode__pic2"); 
    var bgb=$(".local-mode__pic3");  
    setTimeout(function(){
        bg.eq(k).addClass("js-active"); 
        bga.eq(k).addClass("js-active"); 
        bgb.eq(k).addClass("js-active"); 
                for(var j=0;j<bg.length;j++){
      if (k==j) {
      	continue;
      }
      else {
          bg.eq(j).removeClass("js-active");
          bga.eq(j).removeClass("js-active");
          bgb.eq(j).removeClass("js-active");
      }
    }
    k++;
    if(k>2){
      k=0;
    };
    demo7();          
    },3200);         
}

 var v=0;
    function demo8(){
    var bg=$(".local-playStyle__switcherConttent");  
    setTimeout(function(){
        bg.eq(v).addClass("is-p"); 
              for(var j=0;j<bg.length+1;j++){
      if (v==j) {
      }
      else {
         bg.eq(j).removeClass("is-p");
      }
    }
    v++;
    console.log(bg.eq(v));
    if(v>2){
      v=0;
    };
    demo8();          
    },3500);         
}
function demo9(){
	if(($("#left-a").offset().top + $("#left-a").height()) < ($(window).height()+$(window).scrollTop())){
			$(".main-c-e-a-left").addClass('gaga');
			$(".main-c-e-a-right").addClass('gaga');
			$(".main-c-e-b").addClass('gaga1');
			$(".main-c-e-d").addClass('gaga1');
			$(".main-c-e-e").addClass('gaga1');
			$(".main-c-e-f").addClass('gaga1');
	}		
}
function demo10(){
	if(($(".main-c-f-c-a").offset().top + $(".main-c-f-c-a").height()-300) < ($(window).height()+$(window).scrollTop())){
			$(".main-c-f-c-a").addClass('ssgaga');
			
	}		
}
