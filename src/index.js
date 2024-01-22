import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

import "@spectrum-web-components/styles/typography.css";
import '@spectrum-web-components/theme/express/theme-light.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import "@spectrum-web-components/theme/sp-theme.js"; // for the spectrum theme tag itself

/* Import only those components that you need to use in your add-on. */
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/button-group/sp-button-group.js";
import "@spectrum-web-components/field-label/sp-field-label.js";
// import '@spectrum-web-components/icon/sp-icon.js';
// import '@spectrum-web-components/icons/sp-icons-ui.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-checkmark400.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-arrow75.js';
import "@spectrum-web-components/icons-workflow/icons/sp-icon-play-circle.js"
// import '@spectrum-web-components/icons/sp-icons-medium.js';

import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import "@spectrum-web-components/number-field/sp-number-field.js";
import '@spectrum-web-components/picker/sp-picker.js';
import "@spectrum-web-components/slider/sp-slider.js";
import "@spectrum-web-components/swatch/sp-swatch.js";
import '@spectrum-web-components/switch/sp-switch.js';

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    /* STEP 2 - REMOVE */
    // const clickMeButton = document.getElementById("clickMe");
    // clickMeButton.addEventListener("click", () => {
    //     clickMeButton.innerHTML = "Clicked";
    // });

    // Enable the button only when:
    // 1. `addOnUISdk` is ready, and
    // 2. `click` event listener is registered.
    // clickMeButton.disabled = false;
});
