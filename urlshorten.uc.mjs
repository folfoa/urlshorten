(() => {
    if (typeof BrowserUIUtils === "undefined") {
        console.error("BrowserUIUtils is not available");
        return;
    }

    BrowserUIUtils.trimURL = function (aURL) {
        let url = this.removeSingleTrailingSlashFromURL(aURL);

        // Remove http:// or https://
        url = url.replace(/^https?:\/\//, "");

        // Remove Zen's bracketed path:
        // chatgpt.com[/c/12345]
        url = url.replace(/\[.*?\]$/, "");

        // Remove a normal path:
        // chatgpt.com/c/12345 -> chatgpt.com
        url = url.split("/")[0];

        // Remove query and hash
        url = url.split("?")[0].split("#")[0];

        return url;
    };
})();