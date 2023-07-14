export async function getActiveTabURL() {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  });

  if (tabs && tabs.length > 0) {
    return tabs[0].url;
  } else {
    return null;
  }
}

export function checkAccess() {
  return new Promise((resolve) => {
    chrome.tabs.query({}, (tabs) => {
      const matchingTab = tabs.find(
        (tab) => tab.url && tab.url.includes("webclicker.web.app/instructor")
      );

      const hasAccess = !!matchingTab;
      const tabURL = matchingTab ? matchingTab.url : null;

      resolve({ hasAccess, tabURL });
    });
  });
}




