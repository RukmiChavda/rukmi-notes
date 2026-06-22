# Unix `grep`, `awk`, and `sed` Cheat Sheet

This file covers the most common text-processing commands used in Unix shells.

## 1. `grep`

Use `grep` to search for patterns in files or command output.

### Basic search

```bash
grep "error" app.log
```

### Ignore case

```bash
grep -i "error" app.log
```

### Show line numbers

```bash
grep -n "error" app.log
```

### Count matches

```bash
grep -c "error" app.log
```

### Invert match

```bash
grep -v "debug" app.log
```

### Recursive search

```bash
grep -r "TODO" .
grep -rn "TODO" .
```

### Match whole word

```bash
grep -w "cat" words.txt
```

### Extended regex

```bash
grep -E "error|warning|fatal" app.log
```

### Only matching text

```bash
grep -oE "[0-9]+" file.txt
```

### Search multiple files

```bash
grep -H "main" *.c
```

Common switches:

- `-i`: ignore case
- `-n`: show line numbers
- `-c`: count matches
- `-v`: show non-matching lines
- `-r`: recursive
- `-w`: whole word match
- `-E`: extended regex
- `-o`: print matched part only
- `-H`: print file name

## 2. `awk`

Use `awk` for column-based processing and lightweight reporting.

### Print a whole line

```bash
awk '{print}' file.txt
```

### Print specific columns

```bash
awk '{print $1, $3}' file.txt
```

### Use a custom delimiter

```bash
awk -F: '{print $1, $7}' /etc/passwd
awk -F, '{print $1, $2}' data.csv
```

### Print lines matching a condition

```bash
awk '$3 > 100' data.txt
```

### Match pattern and print

```bash
awk '/error/ {print $0}' app.log
```

### Add labels to output

```bash
awk '{print "User:", $1, "Shell:", $7}' /etc/passwd
```

### Sum a column

```bash
awk '{sum += $2} END {print sum}' numbers.txt
```

### Count lines

```bash
awk 'END {print NR}' file.txt
```

### Print line number with content

```bash
awk '{print NR, $0}' file.txt
```

### Conditional formatting

```bash
awk '$2 >= 50 {print $1, "PASS"} $2 < 50 {print $1, "FAIL"}' marks.txt
```

### Built-in variables

- `NR`: current record number
- `NF`: number of fields
- `$1`, `$2`, ...: field values
- `$0`: full line

### Print last field

```bash
awk '{print $NF}' file.txt
```

## 3. `sed`

Use `sed` for stream editing, replacements, and line-based text manipulation.

### Replace first occurrence in each line

```bash
sed 's/error/warning/' file.txt
```

### Replace all occurrences

```bash
sed 's/error/warning/g' file.txt
```

### In-place edit

```bash
sed -i 's/localhost/127.0.0.1/g' config.txt
```

### Print only matching lines

```bash
sed -n '/error/p' app.log
```

### Delete a line by number

```bash
sed '3d' file.txt
```

### Delete a range of lines

```bash
sed '5,10d' file.txt
```

### Print a line range

```bash
sed -n '5,10p' file.txt
```

### Replace using extended regex

```bash
sed -E 's/[0-9]+/NUMBER/g' file.txt
```

### Remove blank lines

```bash
sed '/^$/d' file.txt
```

### Add text before or after a line

```bash
sed '/START/i Header line' file.txt
sed '/END/a Footer line' file.txt
```

Common switches:

- `-n`: suppress automatic printing
- `-i`: edit file in place
- `-E`: extended regular expressions

## 4. Practical Patterns

### Find failed login attempts

```bash
grep -i "failed" auth.log
```

### Extract usernames from `/etc/passwd`

```bash
awk -F: '{print $1}' /etc/passwd
```

### Change tabs to commas

```bash
sed 's/\t/,/g' file.tsv
```

### Show only unique error lines with counts

```bash
grep -i "error" app.log | sort | uniq -c
```

### Print first and last column

```bash
awk '{print $1, $NF}' file.txt
```

### Remove comments from config file

```bash
sed '/^#/d' config.conf
```

## 5. Quick Comparison

| Tool | Best Use |
|------|----------|
| `grep` | Search lines by pattern |
| `awk` | Field and column processing |
| `sed` | Replace, delete, and transform lines |

## 6. Combined Examples

### Search, extract, and format

```bash
grep "ERROR" app.log | awk '{print $1, $2, $NF}'
```

### Filter CSV rows and print one column

```bash
awk -F, '$3 > 100 {print $1}' sales.csv
```

### Replace text in all `.txt` files

```bash
sed -i 's/old/new/g' *.txt
```

### Print matching lines with line numbers

```bash
grep -nE "fail|error" app.log
```

## 7. Regex Reminders

### Common regex pieces

- `.`: any character
- `*`: zero or more
- `+`: one or more
- `^`: start of line
- `$`: end of line
- `[0-9]`: any digit
- `[A-Za-z]`: any letter
- `[^ ]`: not a space

### Example patterns

```bash
grep -E '^[0-9]+$' file.txt
grep -E '^[A-Za-z].*' file.txt
sed -E 's/[[:space:]]+/ /g' file.txt
```
