document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get('disableForcedownload', function(data) {
    let button = document.getElementById('toggleButton');
    button.textContent = data.disableForcedownload ? 'Disable Forcedownload' : 'Enable Forcedownload';
  });
});

document.getElementById('toggleButton').onclick = function(element) {
  chrome.storage.local.get('disableForcedownload', function(data) {
    chrome.storage.local.set({disableForcedownload: !data.disableForcedownload}, function() {
      let button = document.getElementById('toggleButton');
      button.textContent = !data.disableForcedownload ? 'Disable Forcedownload' : 'Enable Forcedownload';
      console.log("Forcedownload is now " + (!data.disableForcedownload ? "enabled" : "disabled"));
    });
  });
};