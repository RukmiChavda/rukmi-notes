## Cut, Copy and Paste

#### Cut, Copy and Paste

### Deleting and Putting (Pasting) in Vim

- Delete the text using `d`, `x`, or similar commands, Vim saves the deleted text.
- Use `p` to "put" (paste) the text back:
  - `dd` deletes an entire line.
  - `p` places the deleted line below the current line.
  - Use `P` (uppercase) to put the deleted text before the cursor

`Line 1`   
`Line 2   <— dd (deletes this line)`   
`Line 3`

Move to Line 1 and press `p`:

`Line 1`   
`Line 3`   
`Line 2   <— pasted below cursor`

Before: `We will delete the word in the middle`   
Command: `dw` on `delete`

After `dw`: `We will the word in the middle`   

Move cursor to `will` and press `p`:

Result: `We will delete the word in the middle`

### Character Twiddling in Vim

- A common typo like `teh` instead of `the` can be quickly fixed in Vim.
- Use the `xp` command to swap two adjacent characters:
  - `x` deletes the character under the cursor.
  - `p` pastes it after the next character.
- Place the cursor on the second character (e.g., the `e` in `teh`) and press `xp`.

Before: `teh`   
Cursor on `e`, press `xp` → `the`

- `p` — puts the deleted text **after** the cursor.
- `P` — puts the deleted text **before** the cursor.
- Repeat the insertion using counts: e.g., `3p` inserts it 3 times.

**Tip:** Use `xp` to quickly fix letter-order typos like `gril` → `girl`!

### Marks in Vim: What and Why

- Marks let you remember and jump to specific positions in your text.
- Set a mark using `ma` — this marks the current position as mark `a`.
- There are 26 marks (a–z), plus special system-defined marks.
- To return to a mark:
  - "a` — moves to the exact location (line + column)
  - `'a` — moves to the beginning of the line
- Marks are persistent unless the text containing the mark is deleted.
- Use `:marks` to view all current marks.

`ma` — Set mark `a`   
"a` — Go to mark `a` (line + column)   
`'a` — Go to start of line with mark `a`   
`:marks` — List all active marks

### Example: Using Marks for Deletion

1. Move to start of the block   
`ma` — Set mark `a` here   [0.2em]
2. Move to end of the block   
`d'a` — Delete from current line to mark `a`

Deletes all lines between the current cursor and mark `a` (inclusive).   
This works regardless of cursor being before or after mark `a`.

**Tip:** Use marks for quick navigation and precise operations in large files!

### Yanking in Vim (Copying Without Deleting)

- Yanking means copying text into a register without deleting it.
- Similar to delete (`d`) command, but it doesn’t remove text.
- Command form: `y{motion}` — yank a text object.
- `yy` — yank the current line.
- `Y` — same as `yy`; yank entire line.
- Use marks to yank large text blocks:
  - Set start with `ma`, move to end.
  - Use `y'a` to yank from cursor to mark `a`.
- Paste with `p` (after) or `P` (before).

`yy` — Yank current line   
`3yy` — Yank 3 lines   
`y'a` — Yank to mark `a`   
`p` or `P` — Paste yanked text

### Example: Yanking a Block with Marks

Step-by-Step Use Case
- Move to the start of the text: `ma` — Mark position as `a`
- Move to the end of the block: `y'a` — Yank from current line to mark `a`
- Move to the new location: `p` — Paste text after the cursor

Yanking Multiple Lines
- `3yy` — Yank 3 lines starting from current line
- `p` — Paste after the cursor
- `P` — Paste before the cursor

Yanking is safer than deleting — original text stays untouched!

### Summary: Cut, Copy, Paste, and Marks

| **Feature** | **Description** |
|---|---|
| Delete | `x`, `dw`, `dd` — delete character, word, or line |
| Paste | `p` — paste after cursor; `P` — paste before cursor |
| Cut + Paste | `dd` then `p` or `P` to move line(s) |
| Copy (Yank) | `yy` — yank line; `y{motion}`, `y'a` — yank by motion or mark |
| Marks | `ma` — mark position; `'a`, `'a` — jump to mark `a` |
| Use Marks with Delete | `d'a` — delete from cursor to mark `a` |
| Use Marks with Yank | `y'a` — yank from cursor to mark `a` |
| Swap Characters | `xp` — swap two characters (e.g., fix "teh" → "the") |
| Alternate File Toggle | `CTRL-^` — switch to the last edited file |
| Multi-File Navigation | `:args`, `:next`, `:prev`, `:wnext`, `:wprev` — move across files |
