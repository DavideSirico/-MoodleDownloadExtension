chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ disableForcedownload: true }, function () {
    console.log("Forcedownload is enabled by default.");
  });
});
