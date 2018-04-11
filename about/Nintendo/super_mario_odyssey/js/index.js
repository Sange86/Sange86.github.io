/* window.onload比 $(function(){}) 加载的更晚一些，这样那些宽度的计算在Chrome中就可以准确计算了*/ 
  window.onload = function(){ 
        demo1();
        demo2();
        demo3();
        demo4();
        demo5();
        demo6();
        $(window).scroll(function(){
       demo5();
       demo6();
      });        
  }; 
  function demo1(){
        /*计算一个segment的宽度*/
//   outerWidth()  不包括margin
//   outerWidth(true)  包括margin
    var segmentWidth = 0; 
    $("#container #content li").each(function(){ 
      segmentWidth+= $(this).outerWidth(true);
    }); 
  
    $("#container #content li").clone().appendTo($("#container #content")); 
  
    run(20000); 
  
    function run(interval){ 
      $("#container #content").animate({"left":-segmentWidth}, interval,"linear",function(){ 
        $("#container #content").css("left",0); 
        run(20000); 
      }); 
    } 
  
    // $("#container").mouseenter(function(){ 
    //   $("#container #content").stop(); 
    // }).mouseleave(function(){ 
    //   var passedCourse = -parseInt($("#container #content").css("left")); 
    //   var time = 20000 * (1 - passedCourse/segmentWidth); 
    //   run(time); 
    // }); 
  }
    var i=0;
    function demo2(){
    var mask=$(".game-bg-mask");
    var bg=$(".game-bg-item");
    var bga=$(".game-screen-item");
    mask.removeClass("is-enter");
    mask.removeClass("is-leave");      
      
    mask.addClass("is-enter");
    // setTimeout(function(){
    //     mask.addClass("is-enter");
    // },2000);    
    setTimeout(function(){
        mask.addClass("is-leave");
        bga.eq(i).addClass("is-active"); 
        bg.eq(i).addClass("is-active"); 
                for(var j=0;j<bg.length+1;j++){
      if (i==j) {
      }
      else {
          bga.eq(j).removeClass("is-active");
          bg.eq(j).removeClass("is-active");
      }
    }
    i++;
    if(i>6){
      i=0;
    }          
    },2000);      
    setTimeout(function(){ 
       demo2();     
    },6000);          
}

  function demo3(){
	   $(".foot-all").click(function(){
	       $('body').animate({scrollTop:$('#start').offset().top}, 800);
	   });     
  }
  function demo4(){
    var h=document.documentElement.clientHeight;
//  alert(h);
     $(".main-a-a img").css("display","none");
     $(".main-a-b img").css("display","none");
//  $("body").css("overflow","hidden");
    $(".mv").css("height",h);
    $(".mv").css("line-height",h+'px');
    $("#mva").addClass('mv2');
     setTimeout(function(){
       $(".mv").addClass('mv1');
      },1000);
      setTimeout(function(){
       $(".mv").css("display","none");
//    $("body").css("overflow","visible");
       $(".main-a-a img").css("display","block");
       $(".main-a-a img").addClass('mv3');
      },2000); 
      setTimeout(function(){
         $(".main-a-b img").css("display","block");
         $(".main-a-b img").addClass('mv3');
      },2600);   
  }
  function demo5(){
    if(($("#imga").offset().top + $("#imga").height()) < ($(window).height()+$(window).scrollTop())) {
              $(".main-d ul li img").each(function(){
                if($(this).attr("src") == ""){
                $(this).attr("src",$(this).attr("src-x"));
                $("#li1").addClass('li1');
                $("#li2").addClass('li2');
                $("#li3").addClass('li3');
               }                
              });
            }
    }
function demo6(){
    if(($(".main-e-c-a").offset().top + $("#imga").height()-600) < ($(window).height()+$(window).scrollTop())) {
              $(".main-e-c img").each(function(){
                if($(this).attr("src") == ""){
                $(this).attr("src",$(this).attr("src-x"));
                $(".main-e-c-a").addClass('g1');
                $(".main-e-c-b").addClass('g2');
               }                
              });
            }
    }  