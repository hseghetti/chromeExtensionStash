function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
};

function addReviewers(e) {
  
  var script = '';
  chrome.storage.sync.get({
    reviewersGroup: [
    ]
  }, function(items) {
    //script = "document.getElementById('searchInput').value = '" + items.reviewersGroup[e.target.id] + "';";
    for (groupIndex in items.reviewersGroup) {
      if (items.reviewersGroup[groupIndex] && items.reviewersGroup[groupIndex].id == e.target.id) {
        script = "fillReviewers('" + items.reviewersGroup[groupIndex].data + "');";
      }
    }

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
        button.onclick = function (event) {addReviewers(event);};
        buttonContainer.appendChild(button);
      }
    }

    // var buttons = document.getElementsByTagName('input');
    //
    // for (index in buttons) {
    //   buttons[index].addEventListener('click', addReviewers);
    // }
  });
};

document.addEventListener('DOMContentLoaded', function() {
  renderGroupsButtons();


});
