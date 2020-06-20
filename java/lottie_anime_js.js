// JavaScript Document  
	
$(window).on("load",function(){
	
	$('html , body').animate({scrollTop:0});
	
	$("#loading").delay(800).fadeOut("slow");
	
var index_loading = lottie.loadAnimation({
	
		container:document.getElementById('loading'),
		path:'https://assets4.lottiefiles.com/packages/lf20_Okb43w.json',
		rederer:'svg',
		loop:true,
		autoplay:true,
	
});
	
	
$(document).ready(function(){

var index_behind_cloud = lottie.loadAnimation({
	
		container:document.getElementById('index_behind_cloud'),
		path:'https://assets6.lottiefiles.com/packages/lf20_xbQqde.json',
		rederer:'svg',
		loop:true,
		autoplay:true,
	
});


var index_sparta = lottie.loadAnimation({
	
	container:document.getElementById('index_sparta'),
	path:'https://assets1.lottiefiles.com/packages/lf20_KpD5pD.json',
	rederer:'svg',
	loop:true,
	autoplay:true,
	
});

var index_front_cloud = lottie.loadAnimation({
	
	container:document.getElementById('index_front_cloud'),
	path:'https://assets3.lottiefiles.com/packages/lf20_uv47Xl.json',
	rederer:'svg',
	loop:true,
	autoplay:true,
	
	
});
	
var page01_cloud = lottie.loadAnimation({
	
	container:document.getElementById('page01_cloud'),
	path:'https://assets7.lottiefiles.com/packages/lf20_E4DjDL.json',
	rederer:'svg',
	loop:true,
	autoplay:true,
	
});	
	
var page01_river = lottie.loadAnimation({
	
	container:document.getElementById('page01_river'),
	path:'https://assets4.lottiefiles.com/packages/lf20_BPhnqx.json',
	rederer:'svg',
	loop:true,
	autoplay:true,
	
});	

var page01_sparta = lottie.loadAnimation({
	
	container:document.getElementById('page01_sparta'),
	path:'https://assets9.lottiefiles.com/packages/lf20_deqCuF.json',
	rederer:'svg',
	loop:false,
	autoplay:false,
	
});	
	
var page02_cloud = lottie.loadAnimation({
	
	container:document.getElementById('page02_cloud'),
	path:'https://assets6.lottiefiles.com/packages/lf20_UKRPDL.json',
	rederer:'svg',
	loop:true,
	autoplay:true,
	
});	
	
var page02_sparta = lottie.loadAnimation({
	
	container:document.getElementById('page02_sparta'),
	path:'https://assets10.lottiefiles.com/packages/lf20_Pu9Ep5.json',
	rederer:'svg',
	loop:true,
	autoplay:false,
	
});	

var page02_start = lottie.loadAnimation({
	
	container:document.getElementById('page02_start'),
	path:'https://assets3.lottiefiles.com/packages/lf20_iBbV5P.json',
	rederer:'svg',
	loop:false,
	autoplay:false,
	
});	
	
var page02_enemy = lottie.loadAnimation({
	
	container:document.getElementById('page02_enemy'),
	path:'https://assets10.lottiefiles.com/packages/lf20_efupd4.json',
	rederer:'svg',
	loop:true,
	autoplay:true,
	
});	
	
var page03_behind_moun = lottie.loadAnimation({
	
	container:document.getElementById('page03_behind_moun'),
	path:'https://assets2.lottiefiles.com/packages/lf20_Ps848J.json',
	rederer:'svg',
	loop:false,
	autoplay:false,
	
});	

var page03_anime = lottie.loadAnimation({
	
	container:document.getElementById('page03_anime'),
	path:'https://assets6.lottiefiles.com/packages/lf20_woNV4w.json',
	rederer:'svg',
	loop:false,
	autoplay:false,
	
});		


	
var controller = new ScrollMagic.Controller();
	
var page01_pall = new TimelineMax()
		.add([
			
			TweenMax.to(".page01_bg" , 1 , {y:'-10%'}),
			TweenMax.to(".page01_behind" , 1 , {y:'10%'}),
			TweenMax.to("#page01_text_div" , 1 , {y:'10%'}),
			
		]);

var page01_play = new ScrollMagic.Scene({
	
	triggerElement:'#page01_sparta',
	duration:400,
	triggerHook:0.2,
	
})

.on("enter",function(){
	
	page01_sparta.setDirection(1);
	page01_sparta.play();
	
	if($(window).width() > 700){
		$("#page01_text_div").animate({opacity:0.8}, 1000);
		$(".page01_text_p").addClass("p_fade");
		$(".page01_text_h2").addClass("fade_in");
	}
})

.on("leave",function(){
	
	page01_sparta.setDirection(-1);
	page01_sparta.play();
	
	if($(window).width() > 700){
		$("#page01_text_div").animate({opacity:0}, 1000);
		$(".page01_text_p").removeClass("p_fade");
		$(".page01_text_h2").removeClass("fade_in");
	}
	
})
.setTween(page01_pall)
.addTo(controller);

var page02_pall = new TimelineMax()
		.add([
			TweenMax.to(".page02_bg" , 1 , {y:'-15%'}),
			TweenMax.to(".page02_behind" , 1 , {y:'10%'}),
			TweenMax.to(".page02_front" , 1 , {y:'5%'}),
			TweenMax.to("#page02_sparta" , 1 , {y:'5%'}),
			TweenMax.to("#page02_start" , 1 , {y:'5%'}),
			TweenMax.to("#page02_text_div" , 1 , {y:'10%'}),
		]);
	
	
var page02_start_scene = new ScrollMagic.Scene({
	
	triggerElement:'#page02_start',
	duration:600,
	triggerHook:0.3,

})

.on("enter",function(){
	
	page02_start.play();
	page02_sparta.play();
	$('#page02_sparta').delay(800).animate({opacity:1});
	
	if($(window).width() > 700)
	{
		$("#page02_text_div").animate({opacity:0.8}, 1000);
		$(".page02_text_h2").addClass("fade_in");
		$(".page02_text_p").addClass("p_fade");
	}
	
})

.on("leave",function(){
	
	page02_start.goToAndStop(page02_start.firstFrame + 0 , true);
	$('#page02_sparta').animate({opacity:0});
	
	if($(window).width() > 700){
		$("#page02_text_div").animate({opacity:0}, 1000);
		$(".page02_text_h2").removeClass("fade_in");
		$(".page02_text_p").removeClass("p_fade");
	}
})

.setTween(page02_pall)
.addTo(controller);


var page03_pall = new TimelineMax()
		.add([
			TweenMax.to(".page03_bg" , 1 , {y:'-10%'}),
			TweenMax.to(".page03_behind_moun" , 1 , {y:'20%'}),
			TweenMax.to("#page03_text_div" , 1 , {y:'15%'}),
			
		]);	


	
var page03_start_scene = new ScrollMagic.Scene({
	
	triggerElement:'#page03_anime',
	duration: 800, 
	triggerHook:0.8,

})

.on("enter",function(){
	
	page03_behind_moun.setDirection(1);
	page03_behind_moun.play();
	page03_anime.setDirection(1);
	page03_anime.play();
	
	if($(window).width() > 700){
		$("#page03_text_div").animate({opacity:0.8}, 1000);
		$(".page03_text_h2").addClass("fade_in");
		$(".page03_text_p").addClass("p_fade");
	}
	
})

.on("leave",function(){
	
	page03_behind_moun.setDirection(-1);
	page03_behind_moun.play();
	page03_anime.setDirection(-1);
	page03_anime.play();
	
	if($(window).width() > 700){
		$("#page03_text_div").animate({opacity:0}, 1000);
		$(".page03_text_h2").removeClass("fade_in");
		$(".page03_text_p").removeClass("p_fade");
	}
	
	
})
.setTween(page03_pall)
.addTo(controller);
	

$('.page01_text_btn').click(function(){
	
	if($(window).width()<700){
		$("#page01_text_div").animate({opacity:0.8}, 1000);
		$(".page01_text_p").addClass("p_fade");
		$(".page01_text_h2").addClass("fade_in");
		$('.page01_text_btn').fadeOut('slow');
	}
	
});
	
$('#page01_text_div').click(function(){
	
	if($(window).width()<700){
		$("#page01_text_div").animate({opacity:0}, 1000);
		$(".page01_text_p").removeClass("p_fade");
		$(".page01_text_h2").removeClass("fade_in");
		$('.page01_text_btn').fadeIn('slow');
	}
	
});
	
$('.page02_text_btn').click(function(){
	
	if($(window).width()<700){
		$("#page02_text_div").animate({opacity:0.8}, 1000);
		$(".page02_text_p").addClass("p_fade");
		$(".page02_text_h2").addClass("fade_in");
		$('.page02_text_btn').fadeOut('slow');
	}
	
});
	
$('#page02_text_div').click(function(){
	
	if($(window).width()<700){
		$("#page02_text_div").animate({opacity:0}, 1000);
		$(".page02_text_p").removeClass("p_fade");
		$(".page02_text_h2").removeClass("fade_in");
		$('.page02_text_btn').fadeIn('slow');
	}
	
});
	
$('.page03_text_btn').click(function(){
	
	if($(window).width()<700){
		$("#page03_text_div").animate({opacity:0.8}, 1000);
		$(".page03_text_p").addClass("p_fade");
		$(".page03_text_h2").addClass("fade_in");
		$('.page03_text_btn').fadeOut('slow');
	}
	
});
	
$('#page03_text_div').click(function(){
	
	if($(window).width()<700){
		$("#page03_text_div").animate({opacity:0}, 1000);
		$(".page03_text_p").removeClass("p_fade");
		$(".page03_text_h2").removeClass("fade_in");
		$(".page03_text_btn").fadeIn('slow');
	}
});

var index_pall = new TimelineMax()
		.add([
			TweenMax.to(".index_bg" , 1 , {y:'-10%'}),
			TweenMax.to(".index_behind" , 1 , {y:'10%'}),
			TweenMax.to(".index_title" , 1 , {y:'15%'}),
			
		]);	


	
var index_scene = new ScrollMagic.Scene({
	
	triggerElement:'#index_sparta',
	duration:600,
	triggerHook:0,
	

})
	
.setTween(index_pall)
.addTo(controller);
	
	
});
	
});

