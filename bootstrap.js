let lightweightTheme = {
    id: "example-01",
    name: "Third Planet",
    headerURL: "http://minimaleffort.nl/header.jpeg",
    footerURL: "http://minimaleffort.nl/header.jpeg",
    textcolor: "#fff",
    accentcolor: "#6b6b6b"
};

Components.utils.import("resource://gre/modules/LightweightThemeManager.jsm");

function startup(data, reason) {
    LightweightThemeManager.themeChanged(lightweightTheme);
}
function shutdown(data, reason) {
    LightweightThemeManager.forgetUsedTheme(lightweightTheme.id);
}
