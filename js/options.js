window.onload = function init() {
    // todo query from local settings
    var originSettings = {
        "localPath": "D:/extensions",
        "enableLocalVocabulary": true
    };

    if (originSettings === null) {
        return;
    }
    /**
     * localPath
     */
    let localPath = document.querySelector("#local-path");
    if (originSettings.localPath !== null) {
        localPath.setAttribute("value", originSettings.localPath)
    }
    localPath.addEventListener("input", tempChange)
    /**
     * enableLocalVocabulary
     */
    let enableLocalVocabularyY = document.querySelector("#enable-local-vocabulary-radio-Y");
    let enableLocalVocabularyN = document.querySelector("#enable-local-vocabulary-radio-N");
    if (originSettings.enableLocalVocabulary) {
        enableLocalVocabularyY.setAttribute("checked", true);
    } else {
        enableLocalVocabularyN.setAttribute("checked", true)
    }
    enableLocalVocabularyY.addEventListener("input", tempChange);
    enableLocalVocabularyN.addEventListener("input", tempChange);

    /**
     * save
     */
    document.querySelector("#save-button").addEventListener('click', saveChange);
}

function tempChange() {
    let saveAttention = document.querySelector("#save-attention");
    saveAttention.style.display = "inline"
}

function saveChange() {
    alert("save!");
    // todo save local settings
    let saveAttention = document.querySelector("#save-attention");
    saveAttention.style.display = "none"
}