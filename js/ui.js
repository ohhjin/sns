
$(function(){

	if( $(".js-tab-wrap").length ){
		sns.tab();
	}


});

var sns = {}



/*
*	404 error
*/
sns.notFound = function(){
	alert('이 페이지는 현재 작업중입니다.');
	return false;
}



/*
*	tab
*/
sns.tab = function(){
	var $wrap = $(".js-tab-wrap");
	var $item = $wrap.find(".js-tab-item");

	// init
	$item.hide();
	$wrap.each(function(){
		$(this).find(".js-tab-item").eq(0).show();
	});

	// click
	$wrap.children(".js-tab-menu").find("a").on("click", function(){
		var $this = $(this);
		var $thisWrap = $this.closest(".js-tab-wrap");

		var $thisMenuLi = $thisWrap.children(".js-tab-menu").find("li");
		var $thisItem = $thisWrap.children(".js-tab-item");

		var idx = $thisWrap.find("li").index( $this.parent() );

		// console.log(idx);

		// 동작_menu
		$thisMenuLi.removeClass("on");
		$thisMenuLi.eq(idx).addClass("on");

		// 동작_item
		$thisItem.hide();
		$thisItem.eq(idx).fadeIn(300);
		return false;
	});
}

