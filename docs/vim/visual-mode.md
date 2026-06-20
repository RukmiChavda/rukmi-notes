## Visual Mode

#### Visual Mode

### What is Visual Mode?

- Visual mode allows for selecting and operating on a text region interactively.
- It is similar to selecting text with a mouse in a GUI editor, but entirely keyboard-driven.
- Once text is highlighted, apply commands like:
  - `d` – delete
  - `y` – yank (copy)
  - `c` – change
- Useful for editing, formatting, or copying blocks of text quickly.
- Supports character-wise, line-wise, and block-wise selection.

### Visual Modes

**Modes:**
- `v` — Character-wise mode
- `V` — Line-wise mode
- `CTRL-V` — Block-wise mode

**Operations:**
- Move cursor to highlight text
- Use commands like `d`, `y`, `c` to operate
- Example: `v`, move, then `d` deletes selection

**Exiting Visual Mode:**
- `<Esc>` — Back to normal mode
- `CTRL-C` — Alternative to `<Esc>`
- `CTRL-\ CTRL-N` — Silent return to normal mode (no beep)

### Editing with Visual Mode

**Basic Steps:**
- Select text using visual mode (`v`, `V`, `CTRL-V`).
- Apply an editing command.
**Editing Commands:**
- `d` — Deletes highlighted text.
- `D` — Deletes full lines, even if only partially selected.
- `y` — Yanks (copies) the selection to a register.
- `Y` — Yanks full lines.
- `c` — Deletes and enters insert mode.
- `C` — Like `c`, but for full lines.
- `J` — Joins highlighted lines with spaces.
- `gJ` — Joins lines without spaces.
- Switch visual modes at any time: e.g., press `CTRL-V` while in `v` mode.
- Press `<Esc>` or the same visual key again (`v`, `V`, etc.) to exit.

### Commands for Programmers

- `>` — Indents selected lines by one shift width.
- `<` — Un-indents selected lines by one shift width.
- `=` — Auto-indents the selected text.
- `CTRL-]` — Jumps to the definition of the highlighted function or tag.
- `K` — Looks up the selected keyword using the `man` command.

**Note:**
- Indentation commands behave differently in block mode.
- `shiftwidth` setting controls the amount of space used for indentation.
