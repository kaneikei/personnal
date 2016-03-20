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
	var t=setInterval(move,5000);
	var jieshao="我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛我是李海涛";
	var $ziwojieshao=$('.erlou span');
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