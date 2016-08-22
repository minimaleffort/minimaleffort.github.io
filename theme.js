var themes = [
  {
    id: "UGOTHASSELED",
    name: "GOT SOM HOFF?",
    headerURL: "http://minimaleffort.nl/header.jpeg",
    footerURL: "http://minimaleffort.nl/header.jpeg",
    textcolor: "#ff0066",
    accentcolor: "#0000ff"
  },
  {
    id: "example-02",
    name: "Foxkeh Boom",
    headerURL: "http://www.example.com/firefox/personas/02/header.jpg",
    footerURL: "http://www.example.com/firefox/personas/02/footer.jpg",
    textcolor: "#bcf",
    accentcolor: "#8888FF"
  }
];

const INSTALL = "InstallBrowserTheme";
const PREVIEW = "PreviewBrowserTheme";
const RESET_PREVIEW = "ResetBrowserThemePreview";

function setTheme(node, theme, action) {
  node.setAttribute("data-browsertheme", JSON.stringify(themes[theme]));
  var event = document.createEvent("Events");
  event.initEvent(action, true, false);
  node.dispatchEvent(event);
}
