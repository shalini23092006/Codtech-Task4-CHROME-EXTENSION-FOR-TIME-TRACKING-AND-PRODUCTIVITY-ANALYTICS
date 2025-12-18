const usageList = document.getElementById("usage");

chrome.storage.local.get(null, (items) => {
  for (let site in items) {
    const li = document.createElement("li");
    li.textContent = `${site}: ${(items[site] / 60000).toFixed(2)} min`;
    usageList.appendChild(li);
  }
});
