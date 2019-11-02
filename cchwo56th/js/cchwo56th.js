$(function() {
    $('#humberger').on('click', function(){
        $('#humberger').toggleClass('active');
        $('#drawer').toggleClass('open');
        $(document.body).toggleClass('lock');
        console.log('humberger open!');
        return false;
    });
    $('#menu a[href]').on('click', function(e) {
        console.log('jump!');
        $('#humberger').trigger('click');
    });
    $(document).on('click', '.lock', function(e) {
        console.log('click lock!');
        $('#humberger').trigger('click');
    });
});

$(function() {
    $('#slide1').slick({
        dots: true,
        dotsClass: 'slide-dots',
        autoplay :true,
        autoplaySpeed :7000,
        speed :500,
        infinite :true,
        centerMode :true,
        centerPadding :'75%',
        adaptiveHeight :true,
        fade :true,
        arrows :true,
        prevArrow: '<div class="slide-arrow prev-arrow fa fa-angle-left"/>',
        nextArrow: '<div class="slide-arrow next-arrow fa fa-angle-right"/>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        }],
        customPaging: function(slick, index){
            var num = slick.$slides.eq(index).html();
            return '●';
        }
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
		$('.detail li').css('display','none');
		$('.detail li').eq(index).css('display','block');

		// 一度タブについているselectを消去、クリックされたタブのみにselectを付与
		$('.tab li').removeClass('select');
		$(this).addClass('select');
	});
});
