// function addReviewers(e) {
// 	chrome.storage.sync.get({
// 		reviewersGroup: {
// 			group01: [
// 				'hernan.seghetti@wnco.com'
// 			],
// 			group02: [
// 				'martin.rodriguez@wnco.com'
// 			]
// 		}
// 	}, function(items) {
// 		document.getElementById('searchInput').value = items.reviewersGroup[e.target.id];
// 	});
// };





function fillReviewers (reviewersList) {
	// var e = $.Event("keypress");
	// e.which = 13;
	// e.keyCode = 13;

	for(reviewer in reviewersList) {
		$('.select2-input').val($('.select2-input').val() + reviewersList[reviewer]);
		// $("#searchInput").trigger(e);
		$('.select2-input').trigger(jQuery.Event('keypress', {which: 13}));
	}
};
