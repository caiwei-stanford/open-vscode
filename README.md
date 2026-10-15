# open-vscode

Two one-page redirects, for links that GitHub keeps clickable to custom URL schemes that it otherwise drops when it renders Markdown, since it keeps only `https` (and a few others, never a scheme it does not recognize).

## Open a folder in VS Code

```
https://caiwei-stanford.github.io/open-vscode/#/absolute/path/to/folder
```

The page turns the part after `#` into `vscode://file/absolute/path/to/folder?windowId=_blank` and sends your browser there. The browser asks whether to open VS Code, which then opens the folder in a new window, leaving your current window as it is. This works only on a computer that has that folder and VS Code.

- The path stays on your computer: browsers never send the part after `#` to a server.
- The page opens nothing but `vscode://file/` links to absolute paths. Anything else just shows its instructions.
- Write special characters in the path as in any URL, such as a space as `%20`.

## Attach to a tmux session in iTerm2

```
https://caiwei-stanford.github.io/open-vscode/attach.html#session-name
```

`attach.html` and `attach.js` turn the part after `#` into `iterm2:/command?c=tmux%20attach%20-t%20session-name` and send your browser there. Unlike the VS Code redirect above, this does not open silently: iTerm2's own command handler always shows a dialog first, where you review (and can edit) the command and choose whether it runs in a new window, a new tab, or the current session — there is no way for a link iTerm2 did not itself generate to skip that, by [iTerm2's own documented security model](https://iterm2.com/documentation-url-scheme.html). This works only on a computer that has iTerm2 installed and that tmux session running.

- The session name stays on your computer, the same as the VS Code redirect's path.
- The page opens nothing but a plain word made of letters, digits, `_` and `-`. Anything else just shows its instructions.
