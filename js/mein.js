window.onload = () => {
    console.log("Ze silva")
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
};

