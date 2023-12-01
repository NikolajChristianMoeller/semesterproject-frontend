let selectedTab = null;

export default function tabs(event) {
    const tab = event.target;
    // only accept click, if tab isn't selected
    if (!tab.classList.contains("active")) {
        // unselect last tab - if any
        if (selectedTab) {
            selectedTab.classList.remove("active");
            document.querySelector(`#${selectedTab.dataset.tabShow}`).classList.add("hidden");
        }
        // select this tab
        tab.classList.add("active");
        document.querySelector(`#${tab.dataset.tabShow}`).classList.remove("hidden");

        // remember the selected tab
        selectedTab = tab;
    }
}
