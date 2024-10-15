document.addEventListener("DOMContentLoaded", () => {
  let set = document.getElementById("set");
  let get = document.getElementById("get");

  set.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["save.js"],
      });
      set.innerText = "Form Saved!";
      set.style.backgroundColor = "green";
    });
  });

  get.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["retrieve.js"],
      });
      document.getElementById("get").innerText = "DONE!";
      get.style.backgroundColor = "green";
    });
  });
});
