

function updateOutput () {
	$("iframe").contents().find('html').html(
		"<html><head><style type='text/css'>"
		+ $("#cssPanel").val()
		+ "</style></head><body>"
		+ $("#htmlPanel").val()
		+ "</body></html>"
	);
}

$(".toggleButton").hover(function () {
	$(this).addClass('highlightedButton');
}, function () {
	$(this).removeClass('highlightedButton');
});

$(".toggleButton").click(function() {
	$(this).toggleClass('active');
	$(this).removeClass('highlightedButton');

	var panelID = $(this).attr('id') + "Panel";
	$("#" + panelID).toggleClass('hidden');

	var numberOfActivePanels = 4 - $(".hidden").length;
	$(".panel").width(($(window).width() / numberOfActivePanels) - 10);
});

$(".panel").height($(window).height() - $("#header").height() - 15);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput();

$("textarea").on('onchange keyup paste', function () {
	updateOutput();
})