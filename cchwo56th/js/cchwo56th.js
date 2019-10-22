var tabs = document.getElementsByClassName


function clickTab() {

}

/**
 * タブ切り替え
 */
$(function(){
	$('.tab li').click(function(){
		// .index()を使用、クリックされたタブの順番を調べ、indexに代入
		var index = $('.tab li').index(this);

		// コンテンツを一度全て非表示、クリックされたタブと同じ順番のコンテンツを表示
		$('.detail li').css('display','none');
		$('.detail li').eq(index).css('display','block');

		// 一度タブについているselectを消去、クリックされたタブのみにselectを付与
		$('.tab li').removeClass('select');
		$(this).addClass('select');
	});
});
