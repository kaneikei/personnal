$(function()
{	
	var w=$(window).width();
	var $gengduo = $('.gengduo');
	var $gengduoul = $('.gengduoul');
	$gengduo.bind('click',function()
	{
		$gengduoul.slideToggle()
		return false;
	})
	$(document).bind('click',function()
	{
		$gengduoul.slideUp()
	})
	$(window).resize(function()
	{
		w=$(window).width();
	})
	var move=(function()
	{
		var index = 1;
		return function()
		{
			var off=-index*w;
			index+=1;
			if(index===2)
			{
				index=0;
			}
			$(".imgbox").css({"transform":"translateX("+off+"px)"});
		}

	})()
	var t=setInterval(move,4000);
	var jieshao="我是李海涛，是一名前端工程师。热爱生活，热爱前端，喜欢漫画，喜欢音乐。享受按照客户要求完成作品的过程，享受这一刻的成就感。相信努力就有收获，双手创造明天！";
	var $ziwojieshao=$('.erloubox .jutijianjie');
	$ziwojieshao.text();
	var zichuxian=(function()
			{	var index=0;
				return function()
				{	
					if(index==jieshao.length)
					{
						clearInterval(dazi);
					}
					$ziwojieshao.append(jieshao.charAt(index));
					index++;
				}
			})()
	var dazi=setInterval(zichuxian,100);

	//功能：获取滚动条与页面顶部的距离
	// function getScrollT()
	// {	
	// 	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	// 	var scrollT=obj.scrollTop;
	// 	return scrollT;
	// }
	// var scrollT=getScrollT();
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	var $erlou=$('.erlou');
	var juli1=$erlou.offset().top;
	var $sanlou=$('.sanlou');
	var juli2=$sanlou.offset().top;
	var $silou=$('.silou');
	var juli3=$silou.offset().top;
	var $wulou=$('.wulou');
	var juli4=$wulou.offset().top;


	$('.lanmu1').children().first().bind('click',function()
	{
		$(obj).animate({scrollTop:juli1},1000,'swing')
	})
	$('.gengduoul').children().eq(0).bind('click',function()
	{
		$(obj).animate({scrollTop:juli1},1000,'swing')
	})
	$('.lanmu1').children().last().bind('click',function()
	{
		$(obj).animate({scrollTop:juli2},1000,'swing')
	})
	$('.gengduoul').children().eq(1).bind('click',function()
	{
		$(obj).animate({scrollTop:juli2},1000,'swing')
	})
	$('.lanmu2').children().first().bind('click',function()
	{
		$(obj).animate({scrollTop:juli3},1000,'swing')
	})
	$('.gengduoul').children().eq(2).bind('click',function()
	{
		$(obj).animate({scrollTop:juli3},1000,'swing')
	})
	$('.lanmu2').children().last().bind('click',function()
	{
		$(obj).animate({scrollTop:juli4},1000,'swing')
	})
	$('.gengduoul').children().eq(3).bind('click',function()
	{
		$(obj).animate({scrollTop:juli4},1000,'swing')
	})
	
	
})