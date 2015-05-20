function save_options() {
  var group01 = document.getElementById('textarea01').value;
  var group02 = document.getElementById('textarea02').value;

	chrome.storage.sync.set({
    reviewersGroup: {
			group01: group01,
			group02: group02
		}
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    reviewersGroup: {
			group01: [
				'hernan.seghetti@wnco.com'
			],
			group02: [
				'martin.rodriguez@wnco.com'
			]
		}
  }, function(items) {
    document.getElementById('textarea01').value = items.reviewersGroup.group01;
    document.getElementById('textarea02').value = items.reviewersGroup.group02;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
