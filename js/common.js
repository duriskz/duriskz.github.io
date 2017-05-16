$(function() {
	$('.buy_pr').click(function(){
		var form = $(this).data('form');
		$('#fast__order input[name="form_subject"]').val(form);
	});
	$('.popup-modal').magnificPopup();
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	var $tab_item = $('.tab.active').data('tab-id');
	if($('.tab.active')){
		$('#load_more').attr('data-tab-id', $tab_item);
		$('.tab_item[data-tab-id="' + $tab_item + '"] .item_content:hidden').slice(0, 3).addClass('show');
	}

	$('#load_more[data-tab-id="' + $tab_item + '"]').click(function(e) {
		e.preventDefault();
		$('.tab_item.active .item_content:hidden').slice(0, 3).addClass('show');
	});
	$('.tab').click(function(){
		var $tab_item = $(this).data('tab-id');
		if($(this).hasClass('active')){
		}else{
			$('.tab').removeClass('active');
			$(this).addClass('active');
			$('.tab_item').removeClass('active');
			$('.tab_item[data-tab-id="' + $tab_item + '"]').addClass('active');
			$('.tab_item.active .item_content:hidden').slice(0, 3).addClass('show');
		}
	});

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
				$.magnificPopup.close();
				$.magnificPopup.open({
					items: {
						src: '#order__sucess'
					},
					type: 'inline'
				});
		});
		return false;
	});

	$('a[href*="#"]:not([href="#"])').not('.popup-modal').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
					$('html, body').animate({
							scrollTop: target.offset().top
					}, 1000);
				}
				return false;
		}
	});
	$(".phone").mask("+7 (999) 999 99 99");
});
