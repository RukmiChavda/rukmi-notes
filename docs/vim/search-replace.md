## Search and Replace

#### Search and Replace

### Single-Character Search — `f`, `F`

- `f*x*` moves forward to the next occurrence of character *x* on the same line.
- `F*x*` moves backward to the previous occurrence of *x* on the same line.
- Numeric prefixes repeat the operation:
  - `3fe` moves to the third `e` forward.
  - `2Fa` moves to the second `a` in reverse.
- Example: `fh` moves the cursor to the `h` in “human”.
- Spaces can be searched: `5f<Space>` moves to the fifth space character.

**Figure 2.4:** Demonstrates `f` and `F` movements.

### Single-Character Search — `t`, `T` and Cancelling

- `t*x*` moves forward to just before character *x*.
- `T*x*` moves backward to just before character *x*.
- Examples:
  - `ti`, `t,`, `2to`
  - `2Ta`, `3te`
- Use <Esc> to cancel a pending search or any incomplete command (e.g., `f<Esc>`).
- <Esc> acts as a universal cancel key in many Vim operations.

**Figure 2.5:** Demonstrates `t` and `T` behavior.

### Forward and Backward Searches

- **Forward Search:**
  - Use `/pattern` to search forward.
  - Press `<Enter>` to jump to the match.
  - Use `n` to repeat in the same (forward) direction.

- **Backward Search:**
  - Use `?pattern` to search backward.
  - Use `n` to repeat the last search direction.
  - Use `N` to repeat in the opposite direction.

- **Search Direction Rules:**
  - Last search command (`/` or `?`) defines direction.
  - `n` repeats in that direction; `N` reverses it.

For better context, use `:set number` to show line numbers.

### Highlighting, Incremental Search, and History

- **Highlighting matches:**
  - Enable: `:set hlsearch`
  - Disable: `:set nohlsearch` or `:nohlsearch`
- **Incremental search:**
  - Enable: `:set incsearch` — matches update as user type.
  - Disable: `:set noincsearch`
- **Search history:**
  - Press `/` then `<Up>` or `<Down>` to cycle previous searches.
  - Example history: `/one`, `/two`, `/three`
- Special characters like `.*[]^/%?~$` need escaping with `\`
