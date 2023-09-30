var executeButton = document.getElementById('executeCode');
if (executeButton) {
    executeButton.addEventListener('click', function() {
        // background.js

        chrome.action.onClicked.addListener((tab) => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: () => {
                    // Your code to execute on the current tab
                    console.log("Script executed on the current tab.");
                },
            });
        });

    });
} else {
    alert('Элемент с id "executeCode" не найден на странице.');
}