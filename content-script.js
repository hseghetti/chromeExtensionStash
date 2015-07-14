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
		jQuery('.select2-sizer').text(reviewersList[reviewer]);
		// $("#searchInput").trigger(e);
		//jQuery('#select2-drop').trigger(jQuery.Event('keypress', {which: 13}));
		document.getElementsByClassName('select2-results-dept-0 select2-result select2-result-selectable select2-highlighted').trigger(jQuery.Event('keypress', {which: 13}));
	}
};
