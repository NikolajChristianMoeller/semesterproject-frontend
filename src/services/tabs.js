let lastTab = document.querySelector("#product-tab");
//set lastTab to product tab so it knows that's where the page starts

export default function tabs(event) {

        const tab = event.target;
        // only accept click, if tab isn't selected
        if (!tab.classList.contains("active")) {
            // unselect last tab - if any
            if (lastTab) {
                lastTab.classList.remove("active");
                document.querySelector(`#${lastTab.dataset.tabShow}`).classList.add("hidden");
            }
            // select this tab
            tab.classList.add("active");
            document.querySelector(`#${tab.dataset.tabShow}`).classList.remove("hidden");
    
            // remember the selected tab
            lastTab = tab;
        }
}
