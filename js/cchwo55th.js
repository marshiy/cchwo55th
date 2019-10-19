/**
 * スライド
 */
$(function(){
	$('#slide1').slick({
		dots: true,
		autoplay :true,
		autoplaySpeed :7000,
		speed :500,
		infinite :true,
		centerMode :true,
		centerPadding :'75%',
		adaptiveHeight :true,
		fade :true,
		arrows :true,
		prevArrow: '<img src="55thimage/slide_prev.png" class="slide-arrow prev-arrow"/>',
		nextArrow: '<img src="55thimage/slide_next.png" class="slide-arrow next-arrow"/>',
		responsive: [{
			breakpoint: 1200,settings: {
				arrows: false
			}
		}]
	});
});

/**
 * タブ切り替え
 */
$(function(){
	$('.tab li').click(function(){
		// .index()を使用、クリックされたタブの順番を調べ、indexに代入
		var index = $('.tab li').index(this);

		// コンテンツを一度全て非表示、クリックされたタブと同じ順番のコンテンツを表示
		$('.content li').css('display','none');
		$('.content li').eq(index).css('display','block');

		// 一度タブについているselectを消去、クリックされたタブのみにselectを付与
		$('.tab li').removeClass('select');
		$(this).addClass('select');
	});
});
