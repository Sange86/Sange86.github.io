$(document).ready(function(){
			imgLoader1();
			imgLoader2();
			scroll();
			hid();
			close();
			$(window).scroll(function(){
				imgLoader1();
				imgLoader2();
			});
		});
		function imgLoader1(){
				if($("#imga").attr("src") == ""){
					console.log($("#imga").offset().top+ $("#imga").height());
					console.log($(window).height()+$(window).scrollTop());
						if(($("#imga").offset().top + $("#imga").height()) < ($(window).height()+$(window).scrollTop()))
						{
							$(".main2-bottom-f-left img").each(function(){
								if($(this).attr("src") == ""){

								$(this).attr("src",$(this).attr("src-x"));
								console.log($(this).attr("src"));
							}
							});

							  $(".main2-bottom-f-left").addClass("img-left");
						}
					}
				}			
		
		function imgLoader2(){
			$(".main2-bottom-f-right img").each(function(){
				if($(this).attr("src") == ""){
					if(($(this).offset().top + $(this).height()-600) < ($(window).height()+$(window).scrollTop())){
						$(this).attr("src",$(this).attr("src-x"));
						   $(".main2-bottom-f-right").addClass("img-right");
						 

					}
				}
			});
		}	
	function scroll(){
	$("#a3").click(function(){
	$('body').animate({scrollTop:$('#m3').offset().top}, 800);
});
	$("#a4").click(function(){
	$('body').animate({scrollTop:$('#m4').offset().top}, 800);
});	
	$("#a5").click(function(){
	$('body').animate({scrollTop:$('#m5').offset().top}, 800);
});	
	$("#ss").click(function(){
	$('body').animate({scrollTop:$('#start').offset().top}, 800);
});			
}	
	function hid(){
		$(".gg").click(function(){
			$("#hid").fadeIn(500);
			$("body").css("overflow","hidden");
			$("#hid").css("display","block");
		
});
	}
	function close(){
		$("#close").click(function(){
			$("#hid").fadeOut(500);
	    	$("body").css("overflow","visible");
	    	$("#hid").css("display","none");
});
	}	