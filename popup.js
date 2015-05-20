function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
};

function addReviewers(e) {
  var script = '';
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
    //script = "document.getElementById('searchInput').value = '" + items.reviewersGroup[e.target.id] + "';";
    script = "fillReviewers('" + items.reviewersGroup[e.target.id] + "');";
    chrome.tabs.executeScript({code : script});
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.getElementsByTagName('button');
  buttons[0].addEventListener('click', addReviewers);
});
