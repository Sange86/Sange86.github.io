$(document).ready(function(){
				demo();
			$(window).scroll(function(){
				demo();
//				alert("w");
			});
		});
		function demo(){
			if($(window).width()>=1040){
//				$("#logo").css("display","block");
//				$(".col2").css("text-align","right");
//				$(".col2 img").css("padding","50px 12% 50px 0");				
				if($(window).scrollTop()>=3200){
					$("#logo").css("opacity","0");
				}
				if($(window).scrollTop()<3200){
//					$("#logo").css("display","block");
					$("#logo").css("opacity","1");
				}					
			}
			if($(window).width()<1040){
//				console.log("666");
				console.log($(window).width());
				$("#logo").css({"position":"absolute","top":"3280px","left":"43%"});
				$(".col2").css("text-align","center");
				$(".col2 img").css({"padding-left":"0","padding-right":"0"});
			}
		}
		