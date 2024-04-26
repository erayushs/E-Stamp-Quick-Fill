function injectTheScript() {
    // Wuery the active tab, which will be only one tab and inject the script in it.
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['script.js'] })
    })
}

document.getElementById('set').addEventListener('click', injectTheScript)


// https://stackoverflow.com/questions/26390322/clicking-an-element-on-a-page-through-chrome-extension

// https://developer.chrome.com/docs/extensions/reference/scripting/