chrome.storage.local.get('disableForcedownload', function(data) {
  if (data.disableForcedownload) {
    var anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
      let href = anchor.getAttribute('href');
      if (href && href.includes('forcedownload=1')) {
        href = href.replace('forcedownload=1', 'forcedownload=0');
        anchor.setAttribute('href', href);
      }
    });
  }
});