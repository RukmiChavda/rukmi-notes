# TCL — Complete Guide

## Getting Started with Scripting

#### Getting Started with Scripting

### What is TCL?

Characteristics
- Interpreted Language: Tcl is an interpreted language, meaning code is executed directly without the need for compilation.
- Cross-Platform: Tcl scripts can run on various operating systems like Windows, macOS, and Linux without modification.
- Simple Syntax: Tcl's syntax is designed to be simple and easy to learn, making it accessible for beginners.

Usage
- Embedded Command Language: Tcl is often embedded in applications to provide a flexible command interface.
- Scripting and Automation: Tcl is widely used for automating tasks in various domains, including system administration, networking, and EDA (Electronic Design Automation).
- Graphical User Interface (GUI): With the Tk extension, Tcl can be used to create cross-platform GUI applications.

### What is TCL?

Extension and Integration
- Tcl can be extended with custom commands written in C or other languages.
- It integrates well with other languages and systems, making it versatile for various use cases.

Community and Support
- Tcl has a strong community with extensive documentation, tutorials, and libraries available, making it easy to find help and resources.

### Writing a First TCL Script

Getting Started
- Tcl scripts are plain text files with a **.tcl** extension.
- run Tcl scripts using the *tclsh* command or by making the script executable.

Basic Structure
- A Tcl script consists of commands, comments, and variables.

Example
```
# This is a simple Tcl script 
puts "Hello, World"
```

### Running the Script

Command Line Execution
- Save the script as *hello.tcl*
- Run with: *tclsh hello.tcl*

Executable Script
- Add *#!/usr/bin/env tclsh* at the top of the script.
- Make it executable: *chmod +x hello.tcl*
- Run with: *./hello.tcl*


## Comments & Variables

#### Comments and Variables

### Comments

- Tcl supports single-line comments using the # symbol.
- For multi-line commenting,  place # at the beginning of each line.
- Proper commenting is important for code readability and maintainability.

Example:

```
# Define a variable
set varName "Tcl Example"

set varName "Tcl Example"  ; # This is an inline comment
```

### Defining Variables

- Use the set command to define variables.
- Syntax : **set varName value**
- Accessing Variables: Accessing Variables

**Example**
```
set myVar 10
puts "The value of myVar is $myVar"

set name "Tcl"
puts "Hello, $name"
```


## Operators

#### Operators

### Arithmetic Operators

| **Operator** | **Description** |  Example |
|---|---|---|
| + | Addition | *expr 2 + 3* → 5 |
| - | Subtraction | *expr 5 - 2* → 3 |
| * | Multiplication | *expr 4 * 3* → 12 |
| / | Division | *expr 8 / 2* → 4 |
| % | Modulus | *expr 7 % 3* → 1 |
| ** | Exponentiation | *expr 2 ** 3* → 8 |

### String Operators

| **Operator** | **Description** | **Example** |
|---|---|---|
| `eq` | String equal | `expr {"abc" eq "abc"}` → 1 |
| `ne` | String not equal | `expr {"abc" ne "def"}` → 1 |
| `gt` | Greater than | `expr {"abc" gt "def"}` → 1 |
| `lt` | Less than | `expr {"abc" lt "def"}` → 1 |

### Relational Operators

| **Operator** | **Description** | **Example** |
|---|---|---|
| == | Equal to | `expr {5 == 5}` → 1 |
| != | Not equal to | `expr {5 != 3}` → 1 |
| > | Greater than | `expr {5 > 3}` → 1 |
| < | Less than | `expr {3 < 5}` → 1 |
| >= | Greater than or equal to | `expr {5 >= 5}` → 1 |
| <= | Less than or equal to | `expr {3 <= 5}` → 1 |

### Bitwise Operators

| **Operator** | **Description** |  Example |
|---|---|---|
| & | Bitwise AND | *expr 5 & 3* → 1 |
| \| | Bitwise OR | *expr 4 \| 5* → 5 |
| ~ | Bitwise NOT | *expr ~ 5* → -6 |
|  | Bitwise XOR | *expr 5 \  3* → 6 |
| << | Left shift | *expr 4 << 1* → 8 |
| >> | Right shift | *expr 3 >> 1* → 2 |

### Ternary Operator

condition ? true_result : false_result   

*expr 2 > 1 ? "yes" : "no"* → yes


## Expression Evaluation & Command Substitution

#### Expression Evaluation & Command Substitution

### What is Expression Evaluation?

- expr processes and evaluates an expressions as a mathematical or logical operation.
- This allows Tcl to treat strings as numbers, perform computations, and apply logical conditions all within a single statement.
- It handles arithmetic, comparison, logical, bitwise operations, and more.

Example:

```
expr {2 + 3}
```

- Expressions in Tcl are enclosed in braces  to prevent premature variable substitution.

### String vs. Numeric Evaluation

- Tcl simplifies scripting by not requiring explicit type definitions.
- When expr encounters a string that looks like a number, it converts it and evaluates the expression.
- This flexibility is particularly useful when reading data from external sources where types are not known beforehand.

Example:

```
expr {"10" + 5}
```

- Returns 15 (the string "10" is converted to a number).

### Operator Precedence

- multiplication and division have higher priority than addition and subtraction.
- When multiple operators are used in an expression, expr evaluates them according to these rules unless parentheses override them.

Example:

```
expr {2 + 3 * 4}
```

- Returns 15 (the string "10" is converted to a number).

### Using Parentheses

- Parentheses (()) can be used to override the default precedence and force the order of operations.

Example:

```
expr {(2 + 3) * 4}
```

- Returns 20 because the parentheses force addition to be performed first.

### Combining Expressions

- Multiple types of operations (arithmetic, comparison, logical) can be combined in a single expr command.

Example:

```
set a 5
set b 10
expr {$a > 3 && $b < 20}
```

- 1 (True) because both conditions are satisfied.

### Example: Grade Calculation

calculate averages and use conditional logic to determine whether a student has passed.

```
set grade1 85
set grade2 90
set grade3 70

set average [expr {($grade1 + $grade2 + $grade3) / 3}]
set is_passing [expr {$average >= 60 ? "Pass" : "Fail"}]

puts "Average: $average"
puts "Status: $is_passing"
```

### Command Substitution

- Command substitution executes a command inside square brackets [] and uses the result in the enclosing command.
- Nested command substitutions are evaluated from the innermost to the outermost.

Example:

```
set x 5
set y [expr {[string length "hello"] + $x}]
puts "Value of y is: $y"
```

- string length "hello" returns 5, and then the expr command multiplies it by 2, resulting in 10.


## Data Structures

#### Data Structures

### List

- Ordered collections of elements.
- can be of any type, including strings, numbers, or even other lists.
- A space separates each element in a list, and lists are created using either braces  or the list command.

```
set mylist {1 2 3 4 5}
set mylist [list 1 2 3 4 5]
```

### List Operations - 1

| **Operation** | **Command** | **Description** | **Example Code** |
|---|---|---|---|
| Access Element | lindex list index | Retrieves the element at a specific index (0-based) | *set elem [lindex mylist 2]* |
| Get List Length | llength list | Returns the number of elements in the list | *set len [llength mylist]* |
| Append Element | lappend listName element | Adds an element to the end of the list | *lappend mylist 6* |
| Insert Element | linsert list index element1 element2 ... | Inserts elements at the specified index | *set mylist [linsert mylist 2 10 20]* |
| Replace Elements | lreplace list firstIndex lastIndex newElement1 ... | Replaces elements in a specified range with new elements | *set mylist [lreplace mylist 1 3 10 20]* |
| Extract Sublist | lrange list firstIndex lastIndex | Extracts a sublist from the specified range of indices | *set sublist [lrange mylist 1 3]* |
| Remove Elements | lremove list element1 element2 ... | Removes specified elements from the list (Available from Tcl 8.6) | *set mylist [lremove mylist 2 3]* |
| Sort List | lsort options list | Sorts the list using options like -integer, -real, -ascii, etc. | *set sorted_list [lsort -integer mylist]* |
| Merge Lists | concat list1 list2 ... | Concatenates two or more lists into a single list | *set mergedList [concat list1 list2]* |
| Combine Lists into List | list element1 element2 ... | Combines elements (can be lists) into a single list. | *set newList [list list1 list2]* |
| Flatten Nested Lists | concat list1 list2 ... | Flattens nested lists into a single list. | *set flatList [concat list1 list2]* |
| Reversing a List | lsort -decreasing list | Sorts the list in reverse order (acts as reversing) | *set reversedList [lsort -decreasing mylist]* |

### List Operations - 2

| **Operation** | **Command** | **Description** | **Example Code** |
|---|---|---|---|
| Unique Elements | lsort -unique list | Sorts the list and removes duplicate elements | *set uniqueList [lsort -unique mylist]* |
| Join List into String | join list delimiter | Joins list elements into a string with the specified delimiter | *set str [join mylist ","]* |
| Split String into List | split string delimiter | Splits a string into a list by the specified delimiter | *set list [split "a,b,c" ,]* |
| Search in List | lsearch options list pattern | Searches for a pattern in the list and returns its index | *set idx [lsearch -exact mylist 3]* |
| For-each Loop | foreach varname list commands | terates over each element in the list | *foreach item mylist  puts item * |
| List Contains | lsearch -exact list element | Checks if the list contains an element, returns the index if found | *set idx [lsearch -exact mylist 3]* |
| Check if List is Empty | llength list | Checks if a list is empty by getting its length | *if  [llength mylist] == 0   ... * |
| Modify Element by Index | lset list index newValue | Changes an element at a specific index | *lset mylist 2 10* |
| Map List Elements | foreach varname list  ...  | Maps and applies commands to each list element | *foreach item mylist  lappend newlist [expr item * 2] * |
| Delete Element by Index | lreplace list index index  | Removes an element by replacing it with nothing | *set mylist [lreplace mylist 2 2]* |
| List Equality Check | string equal [join list1] [join list2] | Compares two lists for equality (as strings) | *if  [string equal [join list1] [join list2]]   ... * |

### String

- A string is a sequence of characters.
- Strings are one of the most fundamental data types and can contain any combination of letters, numbers, special characters, and even spaces.

```
set name "John" 
set greeting "Hello, $name!" 
puts $greeting
```

### String Operations - 1

| **Operation** | **Description** | **Example** | **Output** |
|---|---|---|---|
| string length | Returns the length of a string | *string length "hello"* | 5 |
| string compare | Compares two strings lexicographically | *string compare "abc" "abd"* | -1 |
| string equal | Checks if two strings are equal | *string equal "hello" "hello"* | 1 |
| string match | Checks if a string matches a pattern | *string match "h*l*" "hello"* | 1 |
| string first | Finds the first occurrence of a substring | *string first "l" "hello"* | 2 |
| string last | Finds the last occurrence of a substring | *string last "l" "hello"* | 3 |
| string index | Returns the character at a specific index | *string index "hello" 1* | e |
| string range | Returns a range of characters from a string | *string range "hello" 1 3* | ell |
| string tolower | Converts a string to lowercase | *string tolower "HELLO"* | hello |
| string toupper | Converts a string to uppercase | *string toupper "hello"* | HELLO |

### String Operations - 2

| **Operation** | **Description** | **Example** | **Output** |
|---|---|---|---|
| string trim | Removes leading and trailing whitespace | *string trim " hello "* | hello |
| string trimleft | Removes leading whitespace | *string trimleft " hello"* | hello |
| string trimright | Removes trailing whitespace | *string trimright "hello "* | hello |
| string replace | Replaces a range of characters in a string | *string replace "hello" 1 3 "ey"* | heylo |
| string repeat | Repeats a string a specified number of times | *string repeat "ab" 3* | ababab |
| string map | Replaces specific substrings according to a mapping | *string map hello hi "hello world"* | hi world |
| string reverse | Reverses a string | *string reverse "hello"* | olleh |
| string is | Checks if a string is of a certain type | *string is integer "123"* | 1 |
| string bytelength | Returns the number of bytes used to represent a string | *string bytelength "hello"* | 5 |
| string totitle | Converts the first character of each word to uppercase | *string totitle "hello world"* | Hello World |

### Array

- Associative arrays for indexed collections.
- meaning they use keys (which are strings) instead of numeric indices.

```
array set colors {red #FF0000 green #00FF00 blue #0000FF}
puts "Red color code: $colors(red)"
```

### Array Operations

| **Operation** | **Syntax** | **Example** | **Output** |
|---|---|---|---|
| Create an array element | *set arr(key) "value"* | *set arr(name) "Alice"* | No output |
| Access an array element | *puts arr(key)* | *puts arr(name)* | Alice |
| List all keys | *array names arr* | *set keys [array names arr] ; puts keys* | name |
| Check if a key exists | *info exists arr(key)* | *if [info exists arr(name)]  puts "Key exists" * | Key exists |
| Delete an array element | *unset arr(key)* | *unset arr(name)* | No output |
| Delete the entire array | *unset arr* | *unset arr* | No output |
| Get the size of the array | *array size arr* | *set size [array size arr] ; puts size* | 1 (before deletion) |
| Iterate over the array | *foreach key [array names arr] ...* | *foreach key [array names arr]  puts "key => arr(key)" * | name => Alice age => 30 |
| Array search (matching keys) | *array names arr "pattern*"* | *set matchingKeys [array names arr "first*"] ; puts matchingKeys* | firstName |
| Merge two arrays | *array set arr2 [array get arr1]* | *array set arr2 [array get arr1] ; puts [array names arr2]* | a b c |
| Get all key-value pairs | *array get arr* | *set kv_pairs [array get arr] ; puts kv_pairs* | x 100 y 200 |
| Sort array by keys | *lsort [array names arr]* | foreach key [lsort [array names arr]]  puts "key => arr(key)"  | a = 1 b = 2 c = 3 |

### Dictionaries

- dictionaries are associative arrays that allow you to store key-value pairs.
- perform various operations on dictionaries, such as setting, getting, deleting, merging, and iterating over key-value pairs.

```
set myDict [dict create name "John" age 30]
puts "Name: [dict get $myDict name]"
```

### Dictionary Operations

| **Operation** | **Command** | **Example** | **Description** |
|---|---|---|---|
| Create a Dictionary | dict create | *set myDict [dict create key1 value1 key2 value2]* | Creates a dictionary with key-value pairs. |
| Add/Update Key-Value Pair | dict set | *dict set myDict key3 value3* | Adds or updates a key-value pair in the dictionary. |
| Retrieve Value by Key | dict get | *set value [dict get myDict key1]* | Retrieves the value associated with the specified key. |
| Delete Key-Value Pair | dict unset | *dict unset myDict key1* | Deletes the key-value pair from the dictionary. |
| Check if Key Exists | dict exists | if [dict exists myDict key2] puts "Key2 exists" | Checks if a key exists in the dictionary. |
| Merge Dictionaries | dict merge | *set mergedDict [dict merge dict1 dict2]* | Merges two or more dictionaries into one. |
| Get All Keys | dict keys | *set keys [dict keys myDict]* | Retrieves all keys in the dictionary. |
| Get All Values | dict values | *set values [dict values myDict]* | Retrieves all values in the dictionary. |
| Get Dictionary Size | dict size | *set size [dict size myDict]* | Returns the number of key-value pairs in the dictionary. |
| Iterate Over Dictionary | dict for | dict for key value myDict puts "key: value" | Iterates over each key-value pair in the dictionary. |
| Filter Dictionary by Key | dict filter | *set filteredDict [dict filter myDict key *pattern*]* | Filters the dictionary based on key pattern. |
| Filter Dictionary by Value | dict filter | *set filteredDict [dict filter myDict value *pattern*]* | Filters the dictionary based on value pattern. |


## Special Variables

#### Special Variables

### env - Special Variables

- Description : env is an associative array containing the environment variables of the operating system.
- Usage: Access system-specific data like the user's home directory, shell, or path.

**Example:**
```
puts "Home Directory: $env(HOME)"
puts "Shell: $env(SHELL)"
```

- env(HOME) returns the home directory of the current user.
- env(SHELL) returns the default shell being used.

### argv - Special Variables

- Description : argv is a list containing the command-line arguments passed to the Tcl script.
- Usage: Parse input arguments when running scripts from the command line.

**Example:**
```
puts "First argument: [lindex $argv 0]"
puts "All arguments: $argv"
```

- lindex argv 0 retrieves the first command-line argument.
- argv returns the entire list of command-line arguments.

### argc - Special Variables

- Description : argc is an integer variable that holds the number of command-line arguments passed to the script.
- Usage: Determine how many arguments were passed to the script.

**Example:**
```
puts "Number of arguments: $argc"
```

- argc helps in handling the arguments appropriately based on their count.

### tcl_version - Special Variables

- Description: Holds the version number of the Tcl interpreter being used.
- Usage: Check the version of Tcl to ensure compatibility or use version-specific features.

**Example:**
```
puts "Tcl version: $tcl_version"
```

- tcl_version returns the version as a string (e.g., 8.6).

### tcl_interactive - Special Variables

- Description: A boolean variable that indicates whether the Tcl interpreter is running in interactive mode.
- Usage: Useful for determining if a script is running interactively or as a batch job.

**Example:**
```
if {$tcl_interactive} {    
	puts "Running in interactive mode"
} else {    
	puts "Running in batch mode"
}
```

- tcl_interactive is 1 for interactive mode and 0 for non-interactive mode.

### tcl_platform - Special Variables

- Description: An associative array that provides details about the platform Tcl is running on, such as OS type, machine architecture, etc.
- Usage: Access platform-specific information for cross-platform scripting.

**Example:**
```
puts "Operating System: $tcl_platform(os)"
puts "Machine Architecture: $tcl_platform(machine)"
```

- tcl_platform(os) might return Linux, Windows, or Darwin.
- tcl_platform(machine) returns the architecture, e.g., x86-64.

### Special Variables Example 1

Handling Command-Line Arguments: A script that takes a filename as an argument and prints the contents.

```
if {$argc != 1} {
    puts "Usage: script.tcl <filename>"
    exit
}

set filename [lindex $argv 0]
set fileData [read [open $filename]]
puts "Contents of $filename:\n$fileData"
```

- Checks if exactly one argument is passed using argc.
- Retrieves the filename from argv and reads the file's contents.

### Special Variables Example 2

Customizing Behavior Based on Environment Variables: A script that changes behavior based on the USER environment variable

```
if {$env(USER) == "admin"} {
    puts "Welcome, admin! You have full access."
} else {
    puts "Welcome, $env(USER)! Your access is limited."
}
```

- Uses env(USER) to personalize the script's response based on the user.

### Special Variables Example 3

Version-Specific Code Execution: A script that runs different commands based on the Tcl version.

```
if {[string compare $tcl_version "8.6"] >= 0} {
    puts "Running with enhanced features for Tcl 8.6 and above."
} else {
    puts "Running with basic features for older Tcl versions."
}
```

- Compares tcl_version to determine which code to execute.

### Special Variables Example 4

Platform-Specific Configuration: Adjust settings based on the operating system.

```
switch -- $tcl_platform(os) {
    "Linux" { puts "Configuring for Linux" }
    "Windows" { puts "Configuring for Windows" }
    "Darwin" { puts "Configuring for macOS" }
    default { puts "Unknown platform" }
}
```

- Uses tcl_platform(os) to apply platform-specific configurations.


## Control Flow (If, Switch, Loops)

#### Control Flow (If, Switch, Loops)

### Conditional Statements – if

**Definition**   
Conditional statements control the flow of a script based on whether certain conditions are met.

 Purpose   
To execute specific blocks of code only when certain conditions are true.

**Key Statements**   
if, elseif, and else.

### if Statement

**Purpose**   
Checks a condition and executes the block if the condition is true.

**Syntax**

```
if {condition} { 
    # code to execute if condition is true 
}
```

**Example**

```
set age 20 
if {$age >= 18} { 
    puts "You are an adult." 
}
```

### elseif Statement

**Purpose**   
Checks additional conditions if the previous if or elseif conditions were false.   

**Syntex**
```
if {condition1} {    
        # code if condition1 is true
} elseif {condition2} {    
       # code if condition2 is true
}
```

**Example**
```
set score 75 
if {$score >= 90} { 
        puts "Grade: A" 
} elseif {$score >= 80} { 
        puts "Grade: B" 
}
```

### else Statement

**Purpose**   
Executes code when none of the previous conditions is true..   

**Syntex**
```
if {condition1} { 
    # code if condition1 is true 
} elseif {condition2} { 
    # code if condition2 is true 
} else { 
    # code if none of the conditions are true 
}
```

**Example**
```
set score 65
if {$score >= 90} {    
    puts "Grade: A"
} elseif {$score >= 80} {    
    puts "Grade: B“
} elseif {$score >= 70} {    
    puts "Grade: C"
} else {    
    puts "Grade: F"
}
```

### Conditional Statements – switch case

- the switch statement is used to evaluate a given expression against a series of patterns and execute the corresponding block of code when a match is found.
- It's similar to the if-elseif-else structure but is often more convenient when user need to compare a single value against multiple possible patterns.

**Syntex**
```
switch expression {
    pattern1 {
        # code to execute if expression matches pattern1
    }
    pattern2 {
        # code to execute if expression matches pattern2
    }
    ...
    default {
        # code to execute if no pattern matches
    }
}
```

**Example**
```
set score 65
if {$score >= 90} {    
    puts "Grade: A"
} elseif {$score >= 80} {    
    puts "Grade: B“
} elseif {$score >= 70} {    
    puts "Grade: C"
} else {    
    puts "Grade: F"
}
```

### More options with switch

**Purpose**   
Executes code when none of the previous conditions is true..   

**Regular Expressions with switch**
```
switch -regexp $input {
    "^[0-9]+$" {
        puts "Input is a number."
    }
    "^[a-zA-Z]+$" {
        puts "Input is a string."
    }
    default {
        puts "Input is something else."
    }
}
```

**Multiple Patterns for a Single Block**
```
switch $day {
    "Saturday" - "Sunday" {
        puts "It's the weekend!"
    }
    "Monday" - "Friday" {
        puts "It's a weekday."
    }
    default {
        puts "Not a valid day."
    }
}
```

### else Statement

**Purpose**   
The while loop continues executing a block of code as long as a specified condition is true.
  

**Syntex**
```
while {condition} {    
    # code to execute while the condition is true
}
```

**Example**
```
set i 1while {$i <= 5} {    
    puts "Iteration $i"    
    incr I
}
```

### else Statement

**Purpose**   
The foreach loop iterates over the elements of a list or multiple lists. It's useful for traversing arrays or lists.
  

**Syntex**
```
foreach varname list {
    # code to execute for each element in the list
}
```

**Example**
```
set numbers {1 2 3 4 5}
foreach num $numbers {
    puts "Number: $num"
}
```

### Loops - loop (in Tcl 8.6+)

**Purpose**   
The loop command is a more flexible version of for, and it can handle more advanced iteration scenarios. It allows for multiple initialization, condition, and increment actions.
  

**Syntex**
```
loop {init condition update} {
    # code to execute while the condition is true
}
```

**Example**
```
loop {set i 1} {$i <= 5} {incr i} {
    puts "Iteration $i"
}
```

### Two Parts

**break:** Exits the loop prematurely.   
```
for {set i 1} {$i <= 10} {incr i} {
    if {$i == 5} {
        break
    }
    puts "Iteration $i"
}
```

The loop stops completely when i becomes 5 due to the break statement.

**continue:** Skips the current iteration and proceeds to the next one.   
```
for {set i 1} {$i <= 5} {incr i} {
    if {$i == 3} {
        continue
    }
    puts "Iteration $i"
}
```

When i is 3, the continue statement skips the current iteration and jumps to the next one, so "Iteration 3" is not printed.


## Procedures

#### Procedures


## Conclusion

#### Conclusion

### Conclusion

#### **Questions?**

#### **Thank You!**

Presented by: **Rukmi Chavda**   

`rukmikchavda@gmail.com`   

`https://github.com/RukmiChavda`   

**2026**
