$(function() {
	$(".drag").draggable({ containment:".room", scroll:false });
	$('.drag').on('click', ".rotate", function(){
		var par = $(this).closest(".drag");
		var w = par.width();
		var h = par.height();
		$(par).width(h);
		$(par).height(w);
	});
	$('.drag').on('click', ".res", function(){
		var par = $(this).closest(".drag");
		var w = par.width();
		var h = par.height();
		if (w == 298) {
			if (h == 212) {
				$(par).height(384);
			} else {
				$(par).height(212);
			}
		} else {
			if (w == 212) {
				$(par).width(384);
			} else {
				$(par).width(212);
			}
		}
	});
});
