## Basic Editing

#### Basic Editing

### Modes

- Vim is a **modal editor**. Behavior changes with the mode.
- **Normal Mode**: Default mode (no label or shows filename).
- **Insert Mode**: Shows `--INSERT--` at the bottom.
- **Visual Mode**: Shows `--VISUAL--`.
- To insert text:
  - Press `i` to enter Insert Mode.
  - Type content.
  - Press `Esc` to return to Normal Mode.
- Press `Esc` anytime to return to Normal Mode.

![](images/insert.png)

![](images/visual.png)

### Inserting and Deleting text

- To insert text:
  - Press `i`, type your text, then press `Esc`.
  - Example: `iA young<Esc>`
- Vim does not wrap lines automatically.
- Press `Enter` to start a new line.
- Press `x` to delete the character under the cursor.
- Example: Move to the start of a line and type `xxxxxxx` to delete 7 characters.

**Before:**
```
intelligent turtle
Found programming UNIX a hurdle
```

**After:**
```
A young intelligent turtle
Found programming UNIX a hurdle
```

### Moving Around

- In Normal Mode, use:

  - `h` – move left
  - `j` – move down
  - `k` – move up
  - `l` – move right

- These keys are on the home row—fast and easy to reach.
- **Avoid arrow keys**—they slow down.
- Frequent hand movement to the arrows reduces efficiency.
- Mnemonics:
  - `h` is left, `l` is right
  - `j` looks like a hook down
  - `k` points up

### Undo and Redo

- Press `u` to undo the last edit.
- Press `u` repeatedly to keep undoing earlier changes.
- Example:

  - `xxxxxxx` deletes `A young`.
  - Pressing `u` restores characters one by one:
`g` → `ng` → `ung` → `young` → `A young`

- Press `CTRL-R` to redo (reverse the last undo).
- Use `U` (uppercase) to undo all changes on the current line.
- Typing `U` again cancels its effect.

### Saving and Exiting

| **Command** | **Description** |
|---|---|
| `:w` | Save file, stay in Vim |
| `:wq` | Save and quit |
| `:wq!` | Force save and quit (e.g., read-only file) |
| `:x` | Save and quit if changes were made |
| `ZZ` | Save and quit (like `:wq`) |
| `:q` | Quit (only if no changes) |
| `:q!` | Quit and discard all changes |

- Press `Esc` to leave Insert Mode and enter Normal Mode.
- Type `:` to enter Command Mode (colon appears at bottom).
- Type the appropriate command (see table below).
- Press `Enter` to execute.

### Insert and Append Commands

**flexible ways to insert text:**

- `i` – Insert **before** the current cursor position.
- `a` – Append **after** the current cursor position.
- `I` – Insert at the **beginning of the line**, no matter where the cursor is.
- `A` – Append at the **end of the line**, regardless of cursor position.

- To insert "Hello" at the start of a line: `IHello<Esc>`
- To append "!!!" at the end of a line: `A!!!<Esc>`
- To insert right before a word: move cursor to the word, type `iText<Esc>`
- To add after a word or character: move cursor, type `aText<Esc>`

### Opening New Lines in Vim

**Insert New Lines Quickly in Normal Mode**

- `o` – Opens a new line **below** the current line and enters insert mode.
  - Example: Place the cursor on a line and press `o`, type text, press `<Esc>`.

- `O` – Opens a new line **above** the current line and enters insert mode.
  - Useful when inserting comments or headers above code.

- After typing the new line, press `<Esc>` to return to Normal mode.

### Getting Help

- Vim has a built-in help system.
- To access it, In normal mode type: `:help` and press `Enter`.
- Opens a new window with general help topics.
- Use it to learn commands, options, and usage examples.
- Navigate help with:
  - `Ctrl-]` – follow a link
  - `Ctrl-o` – go back
  - `:q` – close help window
- For specific topics: `:help <command>`
- Example: `:help :wq` or `:help visual-mode`

![](images/help.png)

### Accessing Help in Vim

**Accessing the Help Screen**

- Press `<F1>` to open the general help screen in Vim.
- If your keyboard has a `<Help>` key, you can press that to open the help.
- Once in the help screen, navigate using Vim's normal commands like `h`, `j`, `k`, and `l`.

**Exiting Help:**
- To exit the help screen, use `ZZ` to save and quit, or `:q!` to quit without saving.

### Summary: Basic Editing

| **Feature** | **Description** |
|---|---|
| Modes | Normal, Insert, Visual – switch using keys like `i`, `Esc` |
| Inserting/Deleting | Use `i` to insert, `x` to delete a character |
| Navigation | Move with `h, j, k, l` instead of arrow keys |
| Undo/Redo | `u` for undo, `CTRL-R` for redo, `U` for line undo |
| Saving/Exiting | Commands like `:w`, `:q`, `:wq`, `:q!`, `ZZ` |
| Insert/Append | Use `i`, `a`, `I`, `A` for different insertion points |
| New Lines | `o` for line below, `O` for line above |
| Help | `:help`, `<F1>`, navigate with `Ctrl-]`, `Ctrl-o`, `:q` |
