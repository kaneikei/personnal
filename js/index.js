$(function()
{	
	var w=$(window).width();
	var $gengduo = $('.gengduo');
	var $gengduoul = $('.gengduoul');
	$gengduo.bind('click',function()
	{
		$gengduoul.slideToggle()
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
	var dazi=setInterval(zichuxian,100)
	
})