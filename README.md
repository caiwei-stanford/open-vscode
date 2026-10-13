# open-vscode

A one-page redirect that opens a folder on your own computer in VS Code, from a link that GitHub keeps clickable. GitHub drops `vscode://` links when it renders Markdown, but keeps `https` ones, so link here instead:

```
https://caiwei-stanford.github.io/open-vscode/#/absolute/path/to/folder
```

The page turns the part after `#` into `vscode://file/absolute/path/to/folder?windowId=_blank` and sends your browser there. The browser asks whether to open VS Code, which then opens the folder in a new window, leaving your current window as it is. This works only on a computer that has that folder and VS Code.

- The path stays on your computer: browsers never send the part after `#` to a server.
- The page opens nothing but `vscode://file/` links to absolute paths. Anything else just shows its instructions.
- Write special characters in the path as in any URL, such as a space as `%20`.
