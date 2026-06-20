## Working with multiple files

#### Working with multiple files

### Editing Another File in Vim

- To open another file without quitting Vim:
  - `:vi file.txt` – Opens `file.txt`, closes current file.
  - If changes are unsaved: Vim warns with `No write since last change`.
- Options when warned:
  - `:write` – Save current file before switching.
  - `:vi! file.txt` – Discard unsaved changes and open new file.

- `:e file.txt` – Equivalent to `:vi file.txt`
- `:view file.txt` – Opens file in read-only mode
- Note: user can still edit a read-only file, but must use `:write!` to force saving.

### Editing Multiple Files in Vim

- Start Vim with multiple files:
  - `gvim one.c two.c three.c`
  - Only `one.c` opens initially.
- Switch to next file:
  - `:next` – Move to next file
  - `:next!` – Force switch (loses unsaved changes!)
  - `:wnext` – Save current file and switch
- Set autowrite:
  - `:set autowrite` – Saves file automatically before switching
- Use `:write` before `:next` to avoid losing changes.

### File Tracking & Backward Navigation

Which File?
- View all open files and current one:
  - `:args` – Lists open files
  - Current file is in [brackets]

Back and First/Last Navigation
- Move backward:
  - `:previous` or `:Next`
  - `:wprevious` – Save and move back
- Jump to boundaries:
  - `:rewind` – First file
  - `:last` – Last file

**Note:** `:first` not supported — use `:rewind` instead.

### Alternate File & CTRL-^ Command

- Vim remembers the last file you edited as the "alternate file"
- Use `CTRL-^` to switch between current and alternate files

**Example:**
- Start Vim: `gvim one.c two.c three.c`
- After editing two.c: `CTRL-^` switches to one.c
- Press again: switches back to two.c
- `1 CTRL-^` → one.c    `2 CTRL-^` → two.c

**Note:** If no alternate file exists (e.g., only one file), `No alternate file` will report.

### Opening and Navigating Windows (1/2)

| **Command / Keys** | **Explanation** |
|---|---|
| `:split` | Splits the screen horizontally into two windows showing the same file. Cursor stays in the top window. |
| `:split filename` | Opens a new window and starts editing the specified file. Each window can show a different file. |
| `:split +/pattern filename` | Opens a file in a new window and jumps to the first match of the pattern. Useful for quick search. |
| Click with mouse | If mouse support is enabled, click in a window to activate it. |

### Opening and Navigating Windows (2/2)

| **Command / Keys** | **Explanation** |
|---|---|
| `CTRL-W w` or `CTRL-W CTRL-W` | Moves the cursor to the next window (cycles through open windows). |
| `CTRL-W j` / `CTRL-W k` | Moves down/up one window respectively. Handy for vertical navigation. |
| `:q` or `CTRL-W c` | Closes the current window. `:q` is safer and more predictable. |
| `CTRL-W CTRL-C` | Does nothing — cancels pending operations, not used for closing windows. |

### Controlling Window Size (1/3)

| **Command / Syntax** | **Explanation** |
|---|---|
| `:3split alpha.c` | Opens a 3-line-high window editing `alpha.c`. Also written as `:3 split alpha.c`. |
| `:split +/pattern file` | Opens a file in a new window and jumps to the first match of `pattern`. |
| `:count split +command file` | General form. Sets window height, executes a command, and opens the file. |
| `:new` | Splits the window and starts editing a new empty file. |
| `:sview file` | Opens file in read-only mode in a split window (split + view). |

### Buffers

- The `buffer` in Vim refers to a file being edited.
- A buffer is a *copy* of the file. Once editing is finished, the contents are written back to the file.
- Buffers hold file contents, marks, settings, and other associated data.
- A buffer's visibility depends on whether it is currently displayed on the screen.
- **Hidden Buffers**: A hidden buffer is not visible but still exists in memory.

**Buffer States**
- A buffer can be in one of three states:
  - **Active**: Appears onscreen.
  - **Hidden**: File is being edited but not displayed.
  - **Inactive**: File is not edited but related information is retained.
- The inactive state is useful for:
  - Files not edited but opened when starting Vim.
  - Discarded content but keeps marks and settings.

### Listing Buffers

- Use the `:buffers` command to list buffers.
- Example output from `:buffers`:

1 #h "one.c"   
2 % "two.c"   
3 - "three.c"   
4 - four.c"   
5 - "help.txt"   
6 - "editing.txt"

- The first column represents the buffer number.
- The second column shows flags indicating the buffer state.

**Buffer Flags**
- Flags in the `:buffers` output:
  - **h**: Hidden buffer.
  - **%**: Current buffer.
  - **#**: Alternate buffer.
  - **+**: File has been modified.
  - **~**: Inactive buffer.

- Select a buffer using the command:
  - `:buffer number` - where `number` is the buffer number.
  - If you know the filename but not the buffer number, use:
  - `:buffer file` - where `file` is the filename.
- Example:
  - `:3buffer` or `:buffer three.c`.

### Other Buffer Commands

- Other buffer-related commands:
  - `:bnext` - Go to the next buffer.
  - `:bprevious` - Go to the previous buffer.
  - `:count bnext` - Go to the next buffer `count` times.
  - `:count bprevious` - Go to the previous buffer `count` times.
- Additional buffer options:
  - `:blast` - Go to the last buffer in the list.
  - `:brewind` - Go to the first buffer in the list.

- `:set hidden` keeps the contents of all buffers around even if they leave the screen.
- If the `hidden` option is set, buffers do not become inactive but are instead hidden when leaving the screen.
- `:hide` always hides the current buffer, regardless of the "hidden" option.
