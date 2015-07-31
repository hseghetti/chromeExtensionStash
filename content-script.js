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





function fillReviewers (reviewerData) {
	// var e = $.Event("keypress");
	// e.which = 13;
	// e.keyCode = 13;

	// for(reviewer in reviewersList) {
	// 	jQuery('.select2-sizer').text(reviewersList[reviewer]);
	// 	// $("#searchInput").trigger(e);
	// 	//jQuery('#select2-drop').trigger(jQuery.Event('keypress', {which: 13}));
	// 	document.getElementsByClassName('select2-results-dept-0 select2-result select2-result-selectable select2-highlighted').trigger(jQuery.Event('keypress', {which: 13}));
	// }
	console.log('entro al fillReviewers');
	var currentUserId = jQuery("#current-user").attr("data-username");
	reviewerData = $.grep(reviewerData, function(n) {
			return n.id != currentUserId;
	});
	console.log("444444");
	jQuery("#s2id_reviewers")[0].select2("data", reviewerData);
	// console.log(document.getElementById("s2id_reviewers"));
	// document.getElementById("s2id_reviewers").select2("data", reviewerData);
};
