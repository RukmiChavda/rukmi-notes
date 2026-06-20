## Fast Editing

#### Fast Editing

### Using a Count to Edit Faster

**Using Numbers to Speed Up Editing**

- Precede commands with a number to repeat actions:
- `9k` – Move up 9 lines (instead of typing `kkkkkkkkk`).
- `3a!` – Append `!` three times to the end of a line.
- `3x` – Delete 3 characters under the cursor.

**General Rule:**
- Numbers modify most Vim commands. For example, `3dw` deletes 3 words.
- This can significantly speed up your editing process.

### Word Movement

- `w` moves the cursor forward by one word.
- `b` moves the cursor backward by one word.
- Numeric prefixes repeat the movement; e.g., `4b` moves back four words.
- A "word" is defined by Vim based on whitespace and punctuation.
- Uppercase variants like `W` and `B` use different word boundaries (non-whitespace).

### Moving to the Start or End of a Line

- `$` moves to the end of the current line.
- Also mapped to `<End>` and `<kEnd>` (keypad End).
- Numeric argument moves to end of the *n*-th line; e.g., `2$` goes to end of the next line.
- `^` moves to the first nonblank character of the line.
- `0`, `<Home>`, and `<kHome>` move to the first character of the line.
- Numeric prefixes are accepted but ignored by these commands.

### Moving to a Specific Line

- `G` moves to a specific line number when used with a numeric prefix.
- Example: `3G` moves to line 3; `1G` moves to the top of the file.
- Without an argument, `G` moves to the end of the file.
- A workaround like `9999k` followed by `2j` works but is inefficient.
- Useful when responding to compiler errors referencing specific line numbers.

For navigating compiler errors efficiently, see commands like `:make` and `:clist`.

### Line Numbers in Files

- Line numbers help indicate position in the file.
- Use `:set number` to enable line numbering.
- Use `:set nonumber` to disable line numbering.
- The `number` option is Boolean — it can be toggled on or off.
- Line numbers appear on the left, aiding navigation and debugging.
- Often used with commands like `G`, `:3`, or `/pattern`.

![](images/line-number.png)

![](images/no-line-number.png)

### Scrolling Up and Down

- `CTRL-U`: Scrolls up half a screen of text.
- Up means backward in the file (text moves down on the screen).
- `CTRL-D`: Scrolls down half a screen of text.
- Navigating with `CTRL-U` and `CTRL-D` helps you move through the file quickly.

### Delete Commands in Vim

**Common Delete Operations in Normal Mode**

| **Command** | **Description** |
|---|---|
| `x` | Delete character under cursor |
| `X` | Delete character before the cursor |
| `dw` | Delete from cursor to end of word |
| `d$` | Delete from cursor to end of line |
| `dd` | Delete the entire current line |
| `d0` | Delete from cursor to beginning of line |
| `dG` | Delete from cursor to end of file |
| `dgg` | Delete from cursor to beginning of file |
| `d{motion}` | Delete text defined by a motion (e.g., `d2w`, `d/word`) |

**Other Useful Variants:**
- `c{motion}` – Delete and switch to insert mode (e.g., `cw`, `cc`).
- `D` – Shortcut for `d$`, deletes to end of line.
- `J` – Join line below with current line (not a delete but useful for cleanup).

### Where to Put the Count (`3dw` or `d3w`)

- `3dw`: Deletes one word three times.
- `d3w`: Deletes three words at once.
- Both commands have the same effect — a difference without a distinction.
- Use two counts, such as `3d2w`.
- `3d2w`: Deletes two words, repeated three times, for a total of six words.

### Changing Text with the `c` Command

- The `c` command changes text, like `d`, but leaves you in insert mode.
- `cw`: Changes a word (deletes the word and enters insert mode).
- `dw`: Deletes a word and the space following it.
- Example:

  - Before: "To err is human."
  - After: "To screw is human." (`cwscrew<Esc>`)

- `cc`: Deletes the entire line and enters insert mode.
- `c$` or `C`: Changes text from the cursor to the end of the line.

### Joining Lines with the `J` Command

- The `J` command joins the current line with the next one.
- A space is added between the lines to separate them.
- If a count is specified, the count of lines (minimum of two) are joined.
- Example:

  - Before: "This is line one."   
"This is line two."
  - After: "This is line one. This is line two."

### Replacing Characters with the `r` Command

- The `r` command replaces the character under the cursor with another character.
- Example: `rx` replaces the character under the cursor with `x`.
- Can be used with a count: `5ra` replaces the first five characters with `a`.
- Example:

  - Before: "This is a test."
  - After: "This is a test." (`rs` replaces `z` with `s`)

- `5ra`: Replaces the first five characters with `a`.
- Example:

  - Before: "This is a test."
  - After: "aaaaais a test."

### Changing Case with the `~` Command

- The `~` command changes the case of a character (uppercase to lowercase and vice versa).
- Example:

  - Before: "now is the time..."
  - After: "Now is the time..." (`~`)

- If a count is specified, it changes that many characters.
- Example with count:

  - Before: "NOW IS the TIME..."
  - After: "Now is THE time..." (`14~`)

### Using Keyboard Macros

- Keyboard macros allow you to record a series of keystrokes and replay them automatically.
- The `q*character*` command starts recording keystrokes into a register named *character* (where *character* is between `a` and `z`).
- After recording, use `q` to stop the recording.
- The recorded macro can then be executed with `@*character*`.
- If a count is specified, the macro will be executed that many times (e.g., `3@*character*` repeats the macro three times).

### Example of Using Keyboard Macros

stdio.h   
fcntl.h   
unistd.h   
stdlib.h

#include "stdio.h"   
#include "fcntl.h"   
#include "unistd.h"   
#include "stdlib.h"

To achieve this, follow these steps:
- `qa`: Start recording the macro in register `a`.
- `^`: Move to the beginning of the line.
- `i#include "<Esc>`: Insert text at the start of the line.
- `$`: Move to the end of the line.
- `a”<Esc>`: Insert the double quote.
- `j`: Move to the next line.
- `q`: Stop recording.
- `@a`: Execute the macro (this applies the changes to the first line).
- `3@a`: Execute the macro 3 times to apply the changes to all three lines.

### Using Digraphs in Vim

- Digraphs allow you to enter characters not available on the keyboard (e.g., special symbols or foreign characters).
- To enter a character, press `CTRL-K` followed by two characters representing the symbol.
- Example: To insert a copyright symbol `©`, type `CTRL-K c0`.
- View available digraphs using `:digraphs`, which shows a table of key combinations and their symbols.
- Example from the digraph table:
  - `CTRL-K ~!` inserts the `¡` character (character number 161).
- Digraphs are generally based on the ISO-646 character set, but your system might use a different character set.

### Filtering Text (Using External Commands)

- Vim can process text through external shell commands.
- Syntax: `!motion command`
- The selected text is:
  - Sent to the external command.
  - Replaced by the command’s output.
- Powerful when used with tools like `sort`, `awk`, `sed`, etc.

- Place cursor on line 1.
- Type: `!10Gsort`
- Breakdown:
  - `!` – Begin filter.
  - `10G` – Select until line 10.
  - `sort` – External sort command.
- Result: Lines 1–10 are replaced with sorted output.

### Inserting Shell Output with `!!`

- Runs the given command and inserts its output at the current line.
- Syntax: `!!command`
- Common use: insert file lists, timestamps, or system info.

- `!!ls` — Inserts list of files in current directory.  
*(Windows: use `!!dir`)*
- `!!date` — Inserts the current date/time.  
Useful for timestamps or logs.

These commands are very handy for generating logs or including shell data directly in your text.

### Summary: Fast Editing

| **Feature** | **Description** |
|---|---|
| Numeric Counts | Prefix commands with numbers: `3x`, `9k`, `3a!` |
| Word Navigation | `w`, `b`, `4b`, `W`, `B` — move across words |
| Line Navigation | `$`, `0`, `^`, `G`, `1G`, `3G` |
| Line Numbers | Enable with `:set number`, disable with `:set nonumber` |
| Scrolling | `CTRL-U`, `CTRL-D` — scroll half screen up/down |
| Delete Commands | `x`, `X`, `dw`, `dd`, `d$`, `dG`, `d{motion}` |
| Change Commands | `cw`, `cc`, `c$` — delete and switch to insert mode |
| Join Lines | `J` joins current line with next; count joins multiple lines |
| Replace | `rx`, `5ra` — replace character(s) under cursor |
| Change Case | `~` toggles case; `14~` affects 14 characters |
