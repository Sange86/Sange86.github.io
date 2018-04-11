$(document).ready(function(){
			change();
			scroll();
			$(window).resize(function(){
				change();
				console.log($(document).width());
			});
		});
function change(){
	if($(document).width()<1291)
	{   
		alert(666);
		$(".bg-video video").css({"width":"4200px","height":"2500px","top":"0","left":"-1170px"});
	}
	if($(document).width()>=1291){
		$(".bg-video video").css({"width":"1583px","height":"891px","top":"-49px","left":"0"});
	}
}
function scroll(){
	$("#scroll").click(function(){
	$('body').animate({scrollTop:$('.main-b').offset().top}, 800);
});
}