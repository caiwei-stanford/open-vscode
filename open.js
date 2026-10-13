// Turn the part of the link after "#" into a vscode://file/ URL, or null if it is not an absolute path.
// windowId=_blank makes VS Code open the folder in a new window instead of replacing the current one.
function vscodeUrl(hash) {
  var path;
  try {
    path = decodeURIComponent(hash.replace(/^#/, ""));
  } catch (e) {
    return null;
  }
  if (!/^\/[^\u0000-\u001f\u007f]*$/.test(path)) {
    return null;
  }
  return "vscode://file" + path.split("/").map(encodeURIComponent).join("/") + "?windowId=_blank";
}

if (typeof module !== "undefined") {
  module.exports = vscodeUrl;
} else {
  (function () {
    var target = vscodeUrl(location.hash);
    if (!target) {
      return;
    }
    var msg = document.getElementById("msg");
    var code = document.createElement("code");
    code.textContent = decodeURIComponent(location.hash.slice(1));
    msg.textContent = "Opening ";
    msg.appendChild(code);
    msg.appendChild(document.createTextNode(" in VS Code. If nothing happens, use the button below."));
    var go = document.getElementById("go");
    go.href = target;
    go.hidden = false;
    location.href = target;
  })();
}
