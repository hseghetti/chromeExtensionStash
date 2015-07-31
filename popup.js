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

function renderGroupsButtons () {
  chrome.storage.sync.get({
    reviewersGroup: [
    ]
  }, function(items) {

    var button = null;
    var buttonContainer = document.getElementById('groupsContainer');

    for (groupIndex in items.reviewersGroup) {
      if (items.reviewersGroup[groupIndex]) {
        button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("id", items.reviewersGroup[groupIndex].id);
        button.setAttribute("value", items.reviewersGroup[groupIndex].name);
        buttonContainer.appendChild(button);
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', function() {
  // var buttons = document.getElementsByTagName('button');
  // buttons[0].addEventListener('click', addReviewers);
  renderGroupsButtons();
});
