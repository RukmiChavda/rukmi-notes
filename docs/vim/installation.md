## Vim Installation

#### Installation

### Installing Vim and GVim

- **Linux (Debian/Ubuntu)**:
  - `sudo apt install vim`
  - `sudo apt install gvim` (for GUI)
- **Linux (RedHat/Fedora)**:
  - `sudo dnf install vim-enhanced`
  - `sudo dnf install gvim`
- **macOS (Homebrew)**:
  - `brew install vim`
  - `brew install macvim` (GVim alternative)
- **Windows**:
  - Download installer from `https://www.vim.org`
  - Or install via `choco install vim` (using Chocolatey)
- **Optional**: Compile from source for latest features.

### Checking Vim Installation

- Open a terminal or command prompt.
- Run: `vim --version`
  - If Vim is installed, version info will appear.
  - If not, you’ll see a “command not found” or similar error.
- Optional: `which vim` (Unix/macOS) or `where vim` (Windows)
- For GVim, try running `gvim` or check your application menu.

### Running Vim for first time

```
$vim 
```

![](images/vim.png)

```
$gvim
```

![](images/gvim.png)
