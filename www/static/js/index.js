$(function(){

	var navFix = $("#fixed-nav"),
		contPos = {};
	setTimeout(function(){
		$(".cont").each(function(){
			contPos[$(this).attr("id")] = $(this).offset().top;
		})
	},300);

	$(".logo").click(function(){
		var pos1 = $(window).scrollTop();
		scrollWin(pos1,0);
	})

	var sclTimer = null;

	// 滚动窗口到相应位置
	function scrollWin(pos1,pos2){
		window.scrollTo(0, pos2);
		
		// sclTimer = setInterval(function(){
		// 	if(pos1 <= pos2){//pos2在下面
		// 		pos1+=30;
		// 	}else{
		// 		pos1-=30;
		// 	}
		// 	if(Math.abs(pos1-pos2)<30){
		// 		window.scrollTo(0,pos2);
		// 		clearInterval(sclTimer);
		// 	}else{
		// 		window.scrollTo(0,pos1);
		// 	}
			
		// },2);
	}

	// 页面顶部跟随导航
	navFix.find("a").click(function(){
		var me = $(this);
		var _id = me.data("cont");
		navFix.find("li").removeClass("active");
		me.parent().addClass("active");
		var pos1 = $(window).scrollTop();
		scrollWin(pos1,Number(contPos[_id])-20);
	})

	var showNavHeight = 0,
		scrollEndTimer = null,
		docHeight = $(document).height(),
		winHeight = $(window).height();

	// 滚动结束定位nav
	$(window).scroll(function(){
		if (scrollEndTimer){
			clearTimeout(scrollEndTimer);
		}
		scrollEndTimer = setTimeout(function(){
			if($(window).scrollTop()>=showNavHeight){
				navFix.show();
			}else{
				navFix.hide();
			}
			var len = $(".cont").length;
			var sclTop = $(window) .scrollTop();

			if(sclTop == 0){
					navFix.find("li").removeClass("active");
					return false;
				}
			for(var i = 0; i<len;i++){

				if(elementInViewport($(".cont")[i])){
					if( docHeight == $(window) .scrollTop() + winHeight){
						//如果到页面底部，则取最后一个的数据
						continue;
					}else{
						var _id = $(".cont").eq(i).attr("id");
						navFix.find("li").removeClass("active")
						navFix.find("a[data-cont="+_id+"]")
						.parent().addClass("active");
						break;
					}
				}
			}
			
		},100);
	})
	//是否在当前视窗
	function elementInViewport(el) {
		var rect = el.getBoundingClientRect(),
			winHeight = $(window).height(),
			curTop = rect.top,
			curBottom = curTop + rect.height,
			triggerHeight = Math.min(rect.height / 2, winHeight / 3);

		return !(curTop > (winHeight - triggerHeight) || curBottom < triggerHeight);
	}

})