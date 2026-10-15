// Turn the part of the link after "#" into an iterm2:/command/ URL that attaches to a tmux session on this
// computer, or null if the fragment is not a plausible session name.
// iTerm2's command handler always shows its own review dialog before running anything, letting you see, edit
// or cancel the command and choose where it runs; there is no way to skip that for a link iTerm2 did not
// generate itself (see https://iterm2.com/documentation-url-scheme.html, "Security Model").
function attachUrl(hash) {
  var name;
  try {
    name = decodeURIComponent(hash.replace(/^#/, ""));
  } catch (e) {
    return null;
  }
  if (!/^[A-Za-z0-9_-]+$/.test(name)) {
    return null;
  }
  return "iterm2:/command?c=" + encodeURIComponent("tmux attach -t " + name);
}

if (typeof module !== "undefined") {
  module.exports = attachUrl;
} else {
  (function () {
    var target = attachUrl(location.hash);
    if (!target) {
      return;
    }
    var msg = document.getElementById("msg");
    var code = document.createElement("code");
    code.textContent = decodeURIComponent(location.hash.slice(1));
    msg.textContent = "Attaching to tmux session ";
    msg.appendChild(code);
    msg.appendChild(document.createTextNode(" in iTerm2. iTerm2 will ask you to review the command first. If nothing happens, use the button below."));
    var go = document.getElementById("go");
    go.href = target;
    go.hidden = false;
    location.href = target;
  })();
}
