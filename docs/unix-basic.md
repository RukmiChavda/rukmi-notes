# Unix Basic Commands Cheat Sheet

This file covers day-to-day Unix commands with practical examples and commonly used switches.

## 1. Navigation and Directory Commands

### Print current directory

```bash
pwd
```

### List files

```bash
ls
ls -l
ls -la
ls -lh
ls -ltr
```

Common switches:

- `-l`: long listing format
- `-a`: show hidden files
- `-h`: human-readable sizes
- `-t`: sort by modified time
- `-r`: reverse sort order

### Change directory

```bash
cd /path/to/dir
cd ..
cd ~
cd -
```

- `cd ..`: go up one directory
- `cd ~`: go to home directory
- `cd -`: go to previous directory

### Create directories

```bash
mkdir project
mkdir -p parent/child/grandchild
```

- `-p`: create parent directories as needed

## 2. File Handling Commands

### Create empty file

```bash
touch notes.txt
```

### View file contents

```bash
cat file.txt
less file.txt
more file.txt
head file.txt
head -n 20 file.txt
tail file.txt
tail -n 50 file.txt
tail -f app.log
```

Common switches:

- `head -n 20`: show first 20 lines
- `tail -n 50`: show last 50 lines
- `tail -f`: follow a growing log file

### Copy files and directories

```bash
cp source.txt dest.txt
cp -r src_dir backup_dir
cp -i file.txt backup.txt
cp -v file.txt backup.txt
```

- `-r`: copy directories recursively
- `-i`: prompt before overwrite
- `-v`: verbose output

### Move or rename

```bash
mv oldname.txt newname.txt
mv file.txt /tmp/
mv -i file.txt /tmp/
```

- `-i`: prompt before overwrite

### Remove files and directories

```bash
rm file.txt
rm -i file.txt
rm -r old_dir
rmdir empty_dir
```

- `rm -i`: prompt before deleting
- `rm -r`: remove directories recursively
- `rmdir`: remove empty directories only

## 3. File and Directory Information

### Show file type

```bash
file script.sh
```

### Disk usage

```bash
du -sh .
du -sh *
df -h
```

- `du -sh`: total size, human-readable
- `df -h`: filesystem space usage

### Count lines, words, bytes

```bash
wc file.txt
wc -l file.txt
wc -w file.txt
wc -c file.txt
```

- `-l`: lines
- `-w`: words
- `-c`: bytes

## 4. Search and Locate

### Find files

```bash
find . -name "*.log"
find . -type d
find . -type f -name "*.txt"
find . -mtime -1
```

- `-type f`: files only
- `-type d`: directories only
- `-mtime -1`: modified within last 1 day

### Locate files by name

```bash
locate notes.txt
```

Note: `locate` depends on a file database and may not be up to date.

## 5. Permissions and Ownership

### View permissions

```bash
ls -l
```

### Change permissions

```bash
chmod 644 file.txt
chmod 755 script.sh
chmod +x script.sh
chmod -R 755 mydir
```

- `644`: owner read/write, others read
- `755`: owner full, others read/execute
- `+x`: add execute permission
- `-R`: recursive

### Change ownership

```bash
chown user file.txt
chown user:group file.txt
chown -R user:group mydir
```

## 6. Everyday Text and Output Commands

### Echo text

```bash
echo "Hello"
echo $HOME
```

### Redirect output

```bash
echo "hello" > file.txt
echo "world" >> file.txt
command > output.txt
command 2> error.txt
command > all.txt 2>&1
```

- `>`: overwrite file
- `>>`: append to file
- `2>`: redirect stderr
- `2>&1`: combine stderr with stdout

### Pipe output

```bash
ls -l | less
ps aux | grep ssh
cat file.txt | wc -l
```

## 7. Process and System Commands

### Show running processes

```bash
ps
ps -ef
ps aux
top
```

- `ps -ef`: full-format process list
- `ps aux`: common BSD-style process view

### Kill a process

```bash
kill 1234
kill -9 1234
pkill nginx
```

- `-9`: force kill
- `pkill`: kill by process name

### Current user and identity

```bash
whoami
id
who
```

## 8. Archives and Compression

### Tar archives

```bash
tar -cvf archive.tar mydir
tar -xvf archive.tar
tar -tvf archive.tar
```

- `-c`: create archive
- `-x`: extract archive
- `-t`: list contents
- `-v`: verbose
- `-f`: archive file name follows

### Tar with gzip

```bash
tar -czvf archive.tar.gz mydir
tar -xzvf archive.tar.gz
```

- `-z`: use gzip compression

### Zip

```bash
zip -r files.zip mydir
unzip files.zip
```

## 9. Networking Basics

### Download files

```bash
curl -O https://example.com/file.txt
wget https://example.com/file.txt
```

### Test connectivity

```bash
ping example.com
```

### Show network info

```bash
hostname
hostname -I
```

## 10. Useful Day-to-Day Commands

### Command history

```bash
history
history | tail
```

### Calendar and date

```bash
date
cal
```

### Sort and unique

```bash
sort file.txt
sort -r file.txt
sort -n numbers.txt
uniq file.txt
sort file.txt | uniq
sort file.txt | uniq -c
```

- `sort -r`: reverse order
- `sort -n`: numeric sort
- `uniq -c`: count repeated lines

## 11. Quick Examples

### Find the largest files in current directory

```bash
du -sh * | sort -h
```

### Watch a log file

```bash
tail -f /var/log/syslog
```

### Copy directory safely

```bash
cp -riv source_dir backup_dir
```

## 12. Quick Reference

| Command | Purpose |
|---------|---------|
| `pwd` | Show current directory |
| `ls -la` | List all files with details |
| `cd -` | Go to previous directory |
| `mkdir -p` | Create nested directories |
| `cp -r` | Copy directories |
| `mv` | Move or rename |
| `rm -i` | Delete with prompt |
| `find` | Search files |
| `chmod` | Change permissions |
| `df -h` | Disk free space |
| `du -sh` | Directory size |
| `wc -l` | Count lines |
| `tail -f` | Follow logs |
