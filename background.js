browser.contextMenus.create({
    id: "iparcel",
    title: browser.i18n.getMessage("ExtensionName"),
    "contexts": ["selection"],
    enabled: true,
});

chrome.contextMenus.onClicked.addListener(
    function(info)
    {
        if (info.menuItemId == "iparcel")
        {
            chrome.tabs.create({
                url: 'https://tracking.i-parcel.com/Home/Index?trackingnumber=' + encodeURIComponent(info.selectionText)
            });
        }
});
