chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("webclicker.web.app/instructor")) {
    const sessionID = tab.url.split("/")[4];
    const courseID = tab.url.split("/")[5];

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      courseID: courseID,
      sessionID: sessionID,
    });
  }
});
