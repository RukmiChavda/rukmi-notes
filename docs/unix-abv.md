# Unix Advanced Command Usage Cheat Sheet

This file covers useful commands beyond the basics, especially for combining, formatting, and comparing data.

## 1. `cut`

Use `cut` to extract columns or character ranges.

### Extract characters

```bash
cut -c1-10 file.txt
cut -c5- file.txt
```

### Extract fields by delimiter

```bash
cut -d: -f1 /etc/passwd
cut -d, -f1,3 data.csv
```

Common switches:

- `-c`: character positions
- `-d`: delimiter
- `-f`: fields

## 2. `paste`

Use `paste` to merge lines from files side by side.

### Merge two files by columns

```bash
paste names.txt scores.txt
```

### Use a custom delimiter

```bash
paste -d, names.txt scores.txt
paste -d"|" col1.txt col2.txt
```

### Merge lines from one file into one row

```bash
paste -s file.txt
paste -sd, file.txt
```

- `-s`: serial mode
- `-d`: delimiter

## 3. `column`

Use `column` to format text into aligned tables.

### Align space-separated data

```bash
column -t file.txt
```

### Align CSV-like content

```bash
column -s, -t data.csv
```

### Format command output

```bash
ps -ef | column -t
```

- `-s`: input separator
- `-t`: create table alignment

## 4. `sort` and `uniq`

### Alphabetic sort

```bash
sort names.txt
```

### Numeric sort

```bash
sort -n numbers.txt
```

### Human-readable numeric sort

```bash
sort -h sizes.txt
```

### Reverse sort

```bash
sort -r file.txt
```

### Remove duplicate adjacent lines

```bash
uniq sorted.txt
```

### Count duplicates

```bash
sort file.txt | uniq -c
sort file.txt | uniq -d
```

- `uniq -c`: count duplicates
- `uniq -d`: show duplicated lines only

## 5. `tr`

Use `tr` to translate or delete characters.

### Convert lowercase to uppercase

```bash
echo "hello" | tr 'a-z' 'A-Z'
```

### Replace spaces with underscores

```bash
echo "hello world" | tr ' ' '_'
```

### Delete digits

```bash
echo "abc123" | tr -d '0-9'
```

### Squeeze repeated spaces

```bash
echo "a   b    c" | tr -s ' '
```

- `-d`: delete characters
- `-s`: squeeze repeats

## 6. `xargs`

Use `xargs` to build command lines from input.

### Remove files listed in a file

```bash
cat files.txt | xargs rm
```

### Run one item at a time

```bash
cat files.txt | xargs -n 1 echo
```

### Find and remove safely

```bash
find . -name "*.tmp" | xargs rm
```

### Use placeholder

```bash
echo "file.txt" | xargs -I{} cp {} {}.bak
```

- `-n 1`: one argument per command
- `-I{}`: placeholder token

## 7. `tee`

Use `tee` to write output to screen and file at the same time.

```bash
ls -l | tee listing.txt
make 2>&1 | tee build.log
```

### Append instead of overwrite

```bash
date | tee -a history.log
```

- `-a`: append

## 8. `comm`

Use `comm` to compare two sorted files.

```bash
comm file1.txt file2.txt
comm -1 file1.txt file2.txt
comm -2 file1.txt file2.txt
comm -3 file1.txt file2.txt
```

- `-1`: suppress lines unique to file1
- `-2`: suppress lines unique to file2
- `-3`: suppress common lines

Note: input files should be sorted first.

## 9. `join`

Use `join` to combine files on a common field.

```bash
join file1.txt file2.txt
join -t, -1 1 -2 1 names.csv scores.csv
```

- `-t,`: comma delimiter
- `-1 1`: use field 1 from first file
- `-2 1`: use field 1 from second file

Note: both files should be sorted on the join field.

## 10. `split`

Use `split` to break large files into smaller pieces.

```bash
split -l 1000 bigfile.txt chunk_
split -b 10M archive.log part_
```

- `-l`: split by number of lines
- `-b`: split by size

## 11. `nl`

Use `nl` to number lines.

```bash
nl file.txt
nl -ba file.txt
```

- `-ba`: number all lines, including blank ones

## 12. `seq`

Generate sequences of numbers.

```bash
seq 5
seq 1 2 10
```

## 13. `watch`

Run a command repeatedly and refresh output.

```bash
watch df -h
watch -n 2 "ls -l"
```

- `-n 2`: refresh every 2 seconds

## 14. `diff`

Compare files line by line.

```bash
diff old.txt new.txt
diff -u old.txt new.txt
```

- `-u`: unified diff format

## 15. `cmp`

Compare files byte by byte.

```bash
cmp file1.bin file2.bin
```

## 16. Useful Combined Examples

### Format a CSV as a table

```bash
column -s, -t data.csv
```

### Join names and scores

```bash
paste -d, names.txt scores.txt
```

### Find unique entries

```bash
sort file.txt | uniq
```

### Count top repeated values

```bash
sort file.txt | uniq -c | sort -nr
```

### Extract first column, sort, and count

```bash
cut -d, -f1 data.csv | sort | uniq -c
```

### Compare two sorted lists

```bash
comm old-list.txt new-list.txt
```

## 17. Quick Reference

| Command | Purpose |
|---------|---------|
| `cut` | Extract columns |
| `paste` | Merge files side by side |
| `column` | Pretty-print tables |
| `tr` | Translate/delete characters |
| `xargs` | Build commands from input |
| `tee` | Save and display output |
| `comm` | Compare sorted files |
| `join` | Merge files on a common key |
| `split` | Break large files into chunks |
| `diff -u` | Show file differences |
