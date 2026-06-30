# Python — Complete Guide

*Part I: A solid foundation*

## Introduction

#### Introducation

"Code is read much more often than it is written."

 --  Guido van Rossum (Creator of Python)

### What is Python?

- Python is a high-level, interpreted, general-purpose programming language.
- Created by **Guido van Rossum** and first released in **1991**.
- Emphasizes code readability and simplicity.
- Widely used in:
  - Web development
  - Data Science and AI
  - Automation
  - Scripting and DevOps
  - Electronic Design Automation (EDA)
  - ASIC/SoC Design Flows
- Extensively used for writing:
  - Custom EDA tool scripts (e.g., for flow automation and report parsing)
  - RTL linting and code quality checks
  - Timing, power, and area analysis summaries
  - Bitstream and GDS post-processing
- Easily integrates with TCL, Perl, and shell scripts in complex EDA toolchains.

### History of Python

### Installing Python (Overview & Windows)

- Visit https://www.python.org/downloads/ to get the latest version.
- Choose the installer based on your Operating System.

**Windows:**
- Download the `.exe` installer for Windows.
- **Important:** Check the box *"Add Python to PATH"* during installation.
- Click “Install Now” or use “Customize Installation” if needed.
- Once installed, open Command Prompt and verify:
```
$ python --version
Python 3.12.0
```

### Installing Python (macOS & Linux/Unix)

**macOS:**
- Download the `.pkg` installer from the Python website.
- Or install via Homebrew (recommended for developers):
```
$ brew install python
```

- macOS may have Python 2.x pre-installed — always use `python3`.

**Linux/Unix:**
- Most distros have Python 3 pre-installed.
- To install or update manually:
```
$ sudo apt install python3       # Debian/Ubuntu
$ sudo dnf install python3       # Fedora/RHEL
```

- Use `python3 --version` to verify.

### Python Interpreter

- Python is an **interpreted language**, meaning code is executed line-by-line by the Python interpreter.

- **Modes of Execution:**
  - **Interactive Mode:** Run `python` or `python3` in the terminal for quick experiments.
  - **Script Mode:** Save code in a `.py` file and run using:
```
$ python script.py
```

- **Interpreter Example:**
```
>>> print("Hello, World!")
Hello, World!
```

**Benefits of Python being interpreted:**
- Easy to test and debug code.
- Platform-independent execution.
- No compilation step needed.

**Limitations:**
- Slower than compiled languages (e.g., C/C++).
- Errors may show up only at runtime.

### What is an IDE? Why Use One?

- **IDE = Integrated Development Environment**
- An IDE is a software application that provides comprehensive tools for coding.

- **Key Features:**
  - Code editor with syntax highlighting and autocompletion.
  - Integrated debugger and terminal.
  - Project/file navigation and version control (Git) support.
  - Testing, linting, and code formatting tools.

- **Why it's important:**
  - Increases productivity by centralizing tools.
  - Helps beginners with errors and code hints.
  - Simplifies project and dependency management.
  - Makes debugging and refactoring easier.

### PyCharm vs VS Code

![](images/example-image)

**PyCharm**

- Developed by JetBrains
- Full-featured and heavyweight
- Smart code analysis and suggestions
- Best for professional projects

![](images/example-image)

**VS Code**

- Developed by Microsoft
- Lightweight and fast
- Highly extensible with plugins
- Popular among both beginners and pros

### Why Learn Python?

- **Simple and readable syntax:**
Easy to learn and write, similar to plain English—ideal for beginners.

- **Extensive community and ecosystem:**
Large global community, with thousands of packages for everything from data science to game development.

- **Cross-domain versatility:**
Widely used in:
  - Web development (Flask, Django)
  - Data Science & Machine Learning (Pandas, NumPy, scikit-learn, TensorFlow)
  - Automation & Scripting
  - Embedded systems (MicroPython, Raspberry Pi)

- **Excellent for education and prototyping:**
Used in universities, coding bootcamps, and startups for rapid development.

### Hello World

**Python Code (hello.py):**
```
# This is your first Python program
print("Hello, World!")
```

**Expected Output:**
```
Hello, World!
```

**How to Run (in terminal):**
```
$ python3 hello.py
```


*Part I: A solid foundation*

## Basic Syntax & Variables

#### Basic Syntax & Variables

### Basic Python Syntax

- **Indentation is mandatory:**
Python uses indentation (typically 4 spaces) to define blocks of code, rather than curly braces `{}` like in C, Java, and other languages. Improper indentation causes syntax errors.

- **No semicolons needed:**
Python statements don’t require semicolons at the end of lines — though you can use them to separate multiple statements on the same line (not recommended).

- **Comments use `#`:**
Everything after `#` on a line is treated as a comment and ignored during execution. Useful for explaining code.

- **Case sensitivity:**
Python is case-sensitive. For example, `Variable` and `variable` are treated as different names.

**Example:**
```
# This is a comment
if True:
    print("Python is fun!")  # Indented block
print("This is outside the if block")
```

### Variable Assignment

- **Dynamically Typed:**
You don't need to declare variable types. Python infers the type from the value assigned.

- **Assignment using `=`:**
Use the equals sign `=` to assign a value to a variable.

- **Type Flexibility:**
A variable can hold a value of any type — and can be reassigned to another type later.

- **Variable Naming Rules:**
  - Must start with a letter or underscore (`_`)
  - Can contain letters, digits, and underscores
  - Cannot be a reserved keyword (e.g., `if`, `class`, `True`)

**Example:**
```
x = 10          # integer
print(type(x))  # <class 'int'>

x = "hello"     # reassigned to string
print(type(x))  # <class 'str'>

y = 3.14        # float
print(type(y))  # <class 'float'>
```

### Variable Naming Conventions

- **Use lowercase with underscores** for regular variables
`user_name`, `total_price`

- **Use ALL CAPS for constants** (by convention)
`MAX_LIMIT`, `PI`

- **Avoid Python reserved keywords**
(e.g., `if`, `class`, `def`, `return`)

- **Names must start with a letter or underscore**
`_temp`, `value1` — but not `1value`

- **Choose descriptive and meaningful names**
Prefer `user_age` over `ua`

 **Bad:** `x = 25`,    `1name = "abc"`   
 **Good:** `age = 25`,    `user_name = "abc"`

### Built-in Data Types (Overview)

| **Category** | **Type** | **Example / Description** |
|---|---|---|
| Numeric | `int` | Whole numbers, e.g., `5`, `-10` |
|  | `float` | Decimal numbers, e.g., `3.14`, `-0.5` |
|  | `complex` | Complex numbers, e.g., `2 + 3j` |
| Text | `str` | String of characters, e.g., `"hello"` |
| Boolean | `bool` | Logical values: `True`, `False` |
| Sequence | `list` | Mutable ordered list, e.g., `[1, 2, 3]` |
|  | `tuple` | Immutable sequence, e.g., `(1, 2, 3)` |
|  | `range` | Sequence of numbers, e.g., `range(5)` |
| Mapping | `dict` | Key-value pairs, e.g., `{"a": 1}` |
| Set Types | `set` | Unordered, unique items, e.g., `{1, 2, 3}` |
|  | `frozenset` | Immutable set version |
| None Type | `None` | Represents absence of value |

### Examples of Data Types

**Python Code and Explanations:**
```
a = 42             # int        Integer value
b = 3.14           # float      Decimal (floating-point) number
c = "Python"       # str        Text (string) value
d = True           # bool       Boolean value (True/False)

e = [1, 2, 3]      # list       Mutable ordered sequence
f = (1, 2, 3)      # tuple      Immutable ordered sequence

g = {"a": 1}       # dict       Key-value mapping
h = {1, 2, 3}      # set        Unordered collection of unique values

i = None           # NoneType   Represents null or no value
```

*Each variable is assigned a different built-in data type. Python infers the type automatically (dynamic typing).*

### Input and Output

**Using `print()`:**
- Displays text or values to the console.
- Can print multiple values separated by commas.

**Example:**
```
name = "Alice"
print("Hello", name)
# Output: Hello Alice
```

**Using `input()`:**
- Reads user input as a string.
- Useful for interactive programs.

**Example:**
```
age = input("Enter your age: ")
print("You are", age, "years old")
```

### Type Conversion

- User input via `input()` is always a string.
- Use built-in functions to convert:
  - `int()` – to convert to integer
  - `float()` – to convert to floating point number
  - `str()` – to convert to string

**Example:**
```
x = input("Enter a number: ")       # input is a string
x = int(x)                          # convert to integer
print(x + 5)                        # prints number + 5
```


*Part I: A solid foundation*

## Control Structures

#### Control Structures

### Operators

- Operators are special symbols that perform operations on variables and values.
- Categories of operators:
  - Arithmetic Operators
  - Comparison Operators
  - Logical Operators
  - Assignment Operators
  - Bitwise Operators
  - Membership Operators
  - Identity Operators

### Arithmetic Operators

| Operator | Description | Example |
|---|---|---|
| `+` | Addition | `5 + 3 = 8` |
| `-` | Subtraction | `5 - 3 = 2` |
| `*` | Multiplication | `5 * 3 = 15` |
| `/` | Division | `5 / 2 = 2.5` |
| `//` | Floor Division | `5 // 2 = 2` |
| `%` | Modulus | `5 % 2 = 1` |
| `**` | Exponentiation | `2 ** 3 = 8` |

### Comparison Operators

| Operator | Description | Example |
|---|---|---|
| `==` | Equal to | `5 == 5` → True |
| `!=` | Not equal to | `5 != 3` → True |
| `>` | Greater than | `5 > 3` → True |
| `<` | Less than | `5 < 3` → False |
| `>=` | Greater than or equal to | `5 >= 5` → True |
| `<=` | Less than or equal to | `5 <= 4` → False |

### Logical Operators

| Operator | Description | Example |
|---|---|---|
| `and` | True if both are true | `True and False → False` |
| `or` | True if at least one is true | `True or False → True` |
| `not` | Inverts the truth value | `not True → False` |

### Assignment Operators

| Operator | Example Meaning |
|---|---|
| `=` | `x = 5` |
| `+=` | `x += 3` → x = x + 3 |
| `-=` | `x -= 2` → x = x - 2 |
| `*=` | `x *= 3` |
| `/=` | `x /= 2` |
| `//=` | `x //= 2` |
| `%=` | `x %= 2` |
| `**=` | `x **= 2` |

### Assignment Operators

| Operator | Example Meaning |
|---|---|
| `=` | `x = 5` |
| `+=` | `x += 3` → x = x + 3 |
| `-=` | `x -= 2` → x = x - 2 |
| `*=` | `x *= 3` |
| `/=` | `x /= 2` |
| `//=` | `x //= 2` |
| `%=` | `x %= 2` |
| `**=` | `x **= 2` |

### Conditional Statements: `if`, `elif`, `else`

- Python uses indentation (typically 4 spaces) to define blocks.
- Conditions do not require parentheses.
- `elif` stands for "else if", and is used for multiple conditions.

**Example:**
```
x = 5

if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")
```

### `if`-`elif`-`else` Syntax Summary

| **Rule / Feature** | **Explanation / Common Mistake** |
|---|---|
| Indentation is required | Use consistent 4-space indentation. No `{}` like C/C++. |
| Condition syntax | No parentheses needed around condition. `if x > 0:` is correct. |
| Colon `:` | Always place a colon at the end of `if`, `elif`, or `else` lines. |
| Chaining conditions | Use `elif` instead of multiple `if` statements. |
| Else must be last | Only one `else` block allowed, and it must be the final block. |
| Comparison operators | Use `==` for equality (not `=`). |

### Nested `if` Statements

- An `if` statement inside another `if` is called a nested `if`.
- Useful for checking multiple, dependent conditions.
- Each level must be correctly indented.

**Example:**
```
score = 85

if score >= 60:
    if score >= 90:
        print("Excellent")
    else:
        print("Pass")
else:
    print("Fail")
```

**Output:**
```
Pass
```

### `while` Loop

- Repeats a block of code as long as the condition remains `True`.
- Update the loop variable to avoid infinite loops.

**Code Example:**
```
count = 0
while count < 3:
    print("Count:", count)
    count += 1
```

**Output:**
```
Count: 0
Count: 1
Count: 2
```

### `for` Loop

- Used to iterate over a sequence like a list, string, or range.
- Automatically assigns each item in the sequence to the loop variable.

**Example 1: Loop over `range`**   
```
for i in range(5):
    print(i)
```

**Output:**
```
0
1
2
3
4
```

**Example 2: Loop over `string`**   
```
for char in "Python":
    print(char)
```

**Output:**
```
P
y
t
h
o
n
```

### Loop Control: `break` and `continue`

- `break`: Exits the loop when a condition is met.
- `continue`: Skips the current iteration and continues with the next.

**Using `break`**:
```
for i in range(5):
    if i == 3:
        break
    print(i)
```

**Output:**
```
0
1
2
```

**Using `continue`**:
```
for i in range(5):
    if i == 2:
        continue
    print(i)
```

**Output:**
```
0
1
3
4
```

### The `range()` Function

- Generates a sequence of numbers.
- Commonly used in loops.
- Syntax: `range(stop)`, `range(start, stop)`, `range(start, stop, step)`
**Example:**
```
for i in range(5):
    print(i)         # 0 to 4

for i in range(2, 10, 2):
    print(i)         # 2, 4, 6, 8
```

### The `enumerate()` Function

- Used to iterate over a list and get index + value.
- Returns a tuple: `(index, value)`.
**Example:**
```
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(index, fruit)
```

### The `pass` Statement

- The `pass` statement is a **null operation**.
- Used when a statement is **syntactically required**, but no action is needed.
- Commonly used as a **placeholder** in loops, functions, classes, etc.

**Example:**
```
for i in range(3):
    if i == 1:
        pass  # Placeholder: do nothing
    print("i =", i)
```

**Output:**
```
i = 0
i = 1
i = 2
```

### List Comprehension - Basics

- A concise way to create lists using a single line of code.
- Syntax: `[expression for item in iterable]`
- More readable and efficient than using a for loop.

**Example:**
```
squares = [x**2 for x in range(5)]
print(squares)   # [0, 1, 4, 9, 16]
```

### List Comprehension - With Condition

- You can include an `if` condition inside the list comprehension.
- Syntax: `[expression for item in iterable if condition]`

**Example:**
```
evens = [x for x in range(10) if x 
print(evens)   # [0, 2, 4, 6, 8]
```

### `match-case` Statement (Python 3.10+)

- Introduced in Python 3.10 as a structural pattern matching feature.
- Works like a `switch-case` in other languages.
- The `_` (underscore) acts as a default or "catch-all" case.

**Example:**
```
command = "start"

match command:
    case "start":
        print("Starting system...")
    case "stop":
        print("Stopping system...")
    case _:
        print("Unknown command")
```

**Output:**
```
Starting system...
```


*Part I: A solid foundation*

## Functions

#### Functions

### Functions

**Defining a Function**
- Use `def` to define a function.
- Use parentheses even if there are no parameters.
**Example:**
```
def greet():
    print("Hello, Python!")

greet()
```

**Parameters & Return Values**
- Parameters allow data input.
- `return` sends output to the caller.
**Example:**
```
def add(a, b):
    return a + b

print(add(2, 3))
```

### Advanced Function Arguments

**Default & Keyword Arguments**
- Provide default values.
- Use keyword args for clarity.
**Example:**
```
def greet(name="User"):
    print("Hello,", name)

greet()
greet("Alice")
```

***args and **kwargs**
- `*args` for variable positional args.
- `**kwargs` for keyword args.
**Example:**
```
def total(*nums):
    print(sum(nums))

def show(**info):
    for k, v in info.items():
        print(k, v)
```

### Comparison: `*args` vs `**kwargs`

| **Aspect** | **`*args`** | **`**kwargs`** |
|---|---|---|
| Full Form | Arbitrary positional arguments | Arbitrary keyword arguments |
| Data Type Collected | Tuple | Dictionary |
| Use Case | When number of positional arguments is unknown | When number of keyword arguments is unknown |
| Function Definition | `def func(*args):` | `def func(**kwargs):` |
| Function Call | `func(1, 2, 3)` | `func(a=1, b=2)` |
| Example Access | `args[0], args[1]` | `kwargs['a'], kwargs['b']` |

### Local vs Global Scope

- Variables declared inside a function are **local** to that function.
- Variables declared outside all functions are **global**.
- Local and global variables with the same name do not affect each other.
**Example:**
```
x = 10  # Global variable

def show():
    x = 5  # Local variable
    print("Inside:", x)

show()
print("Outside:", x)
```

### The `global` Keyword

- Use `global` to modify a global variable inside a function.
- Without `global`, assignment creates a new local variable.
**Example:**
```
count = 0  # Global variable

def increment():
    global count
    count += 1

increment()
print(count)  # Output: 1
```

### The `nonlocal` Keyword

- Used in nested functions to modify a variable from the enclosing (non-global) scope.
- Useful when working with closures or nested functions.
**Example:**
```
def outer():
    x = "outer"

    def inner():
        nonlocal x
        x = "inner"

    inner()
    print(x)  # Output: inner

outer()
```

### Lambda Functions - Basics

- `lambda` creates anonymous (unnamed) functions.
- Syntax: `lambda arguments: expression`
- Commonly used for short, simple functions.

**Example:**
```
square = lambda x: x**2
print(square(5))  # Output: 25
```

### Lambda with Built-ins

- `lambda` is useful with functions like `map()`, `filter()`, and `sorted()`.

**Examples:**
```
# Using map()
nums = [1, 2, 3]
squared = list(map(lambda x: x**2, nums))

# Using filter()
even = list(filter(lambda x: x 

# Using sorted()
names = ['Alice', 'Bob', 'Charlie']
sorted_names = sorted(names, key=lambda name: len(name))
```

### map() Function

- `map(function, iterable)` applies the function to each item in the iterable.
- Returns a map object, which can be converted to list.

**Example:**
```
nums = [1, 2, 3, 4]
squares = list(map(lambda x: x**2, nums))
print(squares)  # Output: [1, 4, 9, 16]
```

### filter() Function

- `filter(function, iterable)` returns items for which function returns True.
- Often used to remove unwanted elements.

**Example:**
```
nums = [1, 2, 3, 4, 5]
even_nums = list(filter(lambda x: x 
print(even_nums)  # Output: [2, 4]
```

### reduce() Function

- `reduce(function, iterable)` applies a rolling computation to elements.
- Must be imported from `functools`.

**Example:**
```
from functools import reduce

nums = [1, 2, 3, 4]
product = reduce(lambda x, y: x * y, nums)
print(product)  # Output: 24
```


*Part I: A solid foundation*

## Data Structures

#### Data Structures

### Lists in Python

- A **list** is a built-in data structure to store multiple items in one variable.
- Lists are:
  - **Ordered** – items have a defined order.
  - **Mutable** – items can be changed.
  - **Allow duplicates**.
- Lists are defined using square brackets `[]`, with items separated by commas.

**Example:**
```
fruits = ["apple", "banana", "cherry"]
print(fruits[1])  # Output: banana
```

### Common List Operations in Python

| **Operation** | **Description** |
|---|---|
| `list.append(x)` | Add item `x` to the end of the list |
| `list.insert(i, x)` | Insert item `x` at position `i` |
| `list.remove(x)` | Remove first occurrence of `x` |
| `list.pop()` | Remove and return the last item |
| `list.pop(i)` | Remove and return item at index `i` |
| `list.index(x)` | Return index of first occurrence of `x` |
| `list.count(x)` | Count occurrences of `x` |
| `list.sort()` | Sort the list in ascending order |
| `list.reverse()` | Reverse the order of the list |
| `list.copy()` | Return a shallow copy of the list |
| `list.clear()` | Remove all items from the list |

### More List Operations (General)

| **Operation** | **Example / Description** |
|---|---|
| Length | `len(lst)` → returns number of elements |
| Membership | `'a' in lst` → checks if 'a' is in the list |
| Iteration | `for x in lst:` → loop through elements |
| List comprehension | `[x*2 for x in lst]` → create new list |
| Slicing | `lst[1:4]` → sublist from index 1 to 3 |
| Concatenation | `lst1 + lst2` → join two lists |
| Repetition | `lst * 2` → repeat list contents |

### Tuples in Python

- Tuples are **ordered** and **immutable** collections.
- Defined using `()` (parentheses) or without any delimiters.
- Allow duplicate values.
- Cannot be modified (no add, remove, or change).

**Example:**
```
colors = ("red", "green", "blue")
print(colors[0])      # red

# Tuple with one element needs a trailing comma
single = ("apple",)
print(type(single))   # <class 'tuple'>
```

### Common Tuple Operations

- **Access elements:** `t[0]`, `t[-1]`
- **Slicing:** `t[1:3]`
- **Length:** `len(t)`
- **Membership:** `"a" in t`
- **Concatenation:** `t1 + t2`
- **Repetition:** `t * 3`
- **Iteration:** `for item in t: ...`
- **Index:** `t.index(x)` – first occurrence of `x`
- **Count:** `t.count(x)` – number of occurrences of `x`
- **Nested Tuples:** `t = (1, (2, 3))`
- **Tuple unpacking:** `a, b = (1, 2)`
- **Conversion from list:** `tuple([1, 2, 3])`

### List vs Tuple

| **Feature** | **List** | **Tuple** |
|---|---|---|
| Definition Syntax | `[1, 2, 3]` | `(1, 2, 3)` |
| Mutability | Mutable (can be changed) | Immutable (cannot be changed) |
| Methods Available | Many (e.g., append, remove, pop) | Very few (e.g., count, index) |
| Performance | Slower (due to mutability) | Faster (more memory-efficient) |
| Use Case | Dynamic data, frequently modified | Static data, fixed values |
| Allows Duplicates | Yes | Yes |

### Tuple vs List Operations

| **Operation** | **List** | **Tuple** |
|---|---|---|
| Ordered | Yes | Yes |
| Mutable | Yes | No |
| Allows Duplicates | Yes | Yes |
| Indexing & Slicing | Yes | Yes |
| Iteration | Yes | Yes |
| Length: `len()` | Yes | Yes |
| Concatenation: `+` | Yes | Yes |
| Repetition: `*` | Yes | Yes |
| Membership: `in` | Yes | Yes |
| Add/Remove Elements | Yes (`append()`, `remove()`) | No |
| Change Element Value | Yes | No |
| Immutability Use-Case | No | Yes (Safe) |
| Conversion | `list(t)` | `tuple(l)` |

### Strings in Python

- Immutable sequence of characters.
- Defined using quotes: `" "` or `' '`
- Supports indexing, slicing, and many methods.
**Example:**
```
text = "Hello, Python!"
print(text[0])       # H
print(text[-1])      # !
print(text[0:5])     # Hello
```

### Common String Methods

- `lower()`, `upper()`, `strip()`, `replace()`
- `split()`, `join()`, `find()`, `count()`
**Example:**
```
s = "  Hello, World!  "
print(s.strip())          # "Hello, World!"
print(s.lower())          # "  hello, world!  "
print(s.replace("World", "Python"))
```

### Sets in Python

- **Unordered collection** of unique elements.
- **Mutable**, but elements must be immutable (e.g., numbers, strings, tuples).
- No duplicates — automatically removes repeated values.
- Defined using curly braces: `{}` or with `set()` constructor.

**Example:**
```
# Duplicate 2 will be removed automatically
unique_nums = {1, 2, 2, 3}
unique_nums.add(4)
print(unique_nums)  # Output: {1, 2, 3, 4}
```

### Set Operations in Python

- **Add elements:** `add(elem)`, `update(iterable)`
- **Remove elements:** `remove(elem)`, `discard(elem)`, `pop()`
- **Mathematical operations:**
  - `a | b` — Union
  - `a & b` — Intersection
  - `a - b` — Difference
  - `a ^ b` — Symmetric Difference
- **Others:** `len()`, `in`, `clear()`, `copy()`

**Example:**
```
a = {1, 2, 3}
b = {3, 4, 5}

print("Union:", a | b)
print("Intersection:", a & b)
print("Difference:", a - b)
print("Symmetric Difference:", a ^ b)
```

### Dictionaries in Python

- Stores data in **key-value** pairs.
- Keys must be **unique and immutable** (e.g., strings, numbers, tuples).
- As of Python 3.7+, dictionaries **preserve insertion order**.
- Defined using curly braces: `{}`, or `dict()` constructor.

**Example:**
```
person = {
    "name": "Alice",
    "age": 30,
    "is_student": False
}
print(person["name"])       # Access value by key
person["age"] = 31          # Modify value
print(person)
```

### Dictionary Operations

- Access: `dict[key]`, Add/Update: `dict[key] = value`
- Remove: `pop(key)`, `del dict[key]`
- Loop: `for k, v in dict.items()`

**Common Methods (Tabular View):**

| **Method** | **Description** |
|---|---|
| `dict.get(key)` | Returns value or `None` if key not found |
| `dict.keys()` | Returns all keys |
| `dict.values()` | Returns all values |
| `dict.items()` | Returns key-value pairs |
| `dict.update(other)` | Merges another dictionary |
| `dict.pop(key)` | Removes and returns value by key |

**Example:**
```
person["city"] = "New York"
for key, value in person.items():
    print(key, value)
```

.

### Mutable vs Immutable Objects

- **Mutable**: Can be changed after creation (e.g., `list`, `dict`, `set`).
- **Immutable**: Cannot be changed after creation (e.g., `int`, `float`, `str`, `tuple`).

**Example - Mutable:**
```
my_list = [1, 2, 3]
my_list.append(4)  # List is modified
print(my_list)     # [1, 2, 3, 4]
```

**Example - Immutable:**
```
x = 10
y = x
x = x + 1
print(x)  # 11
print(y)  # 10 (y is not affected)
```

### `is` vs `==`

- `==` checks for **equality** of values (contents are the same).
- `is` checks for **identity** (same memory location).

**Examples:**
```
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)  # True: values are equal
print(a is b)  # False: different memory locations

c = a
print(a is c)  # True: both refer to same object
```


*Part I: A solid foundation*

## File Handling

#### File Handling

### File I/O Basics

- Use `open(filename, mode)` to work with files.
- Always close files after use, or use `with` statement for automatic handling.
- Common Modes:
  - `'r'` – Read (default), error if file doesn't exist
  - `'w'` – Write (creates/truncates file)
  - `'a'` – Append to existing file
  - `'b'` – Binary mode (e.g., `'rb'`, `'wb'`)

**Writing Example:**
```
with open("sample.txt", "w") as file:
    file.write("Hello, world!\n")
```

**Reading Example:**
```
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)
```

### Binary File Handling

- Use binary modes: `'rb'` = read binary, `'wb'` = write binary
- Used for non-text files: images, videos, executables, etc.
- Data is handled as `bytes`, not strings.

**Example – Writing Binary Data:**
```
data = bytes([65, 66, 67])  # A, B, C
with open("binary.dat", "wb") as f:
    f.write(data)
```

**Example – Reading Binary Data:**
```
with open("binary.dat", "rb") as f:
    binary_data = f.read()
    print(binary_data)  # Output: b'ABC'
```


*Part II: Core scripting and automation*

## Exception Handling

#### Exception Handling

### Exception Handling - try/except

- Used to handle runtime errors and avoid program crash.
- Syntax: `try-except`

**Example:**
```
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

### Handling Multiple Exceptions

- Use multiple `except` blocks for different errors.
- Use `else` for code to run if no exception occurs.

**Example:**
```
try:
    x = int("10")
except ValueError:
    print("Conversion failed")
else:
    print("Conversion succeeded:", x)
```

### finally Block

- The `finally` block is always executed, even if an exception occurs.
- Useful for cleanup tasks (e.g., closing files).

**Example:**
```
try:
    f = open("data.txt", "r")
    # process file
except FileNotFoundError:
    print("File not found.")
finally:
    print("Closing file.")
    f.close()
```

### Raising Exceptions Manually

- Use `raise` to trigger exceptions.
- Can raise built-in or custom exception types.

**Example:**
```
def withdraw(balance, amount):
    if amount > balance:
        raise ValueError("Insufficient balance")
    return balance - amount

print(withdraw(100, 150))
```


*Part II: Core scripting and automation*

## Modules and Packages

#### Modules and Packages

### What Are Modules?

- A module is a file containing Python code (functions, variables, classes).
- Used to organize code and reuse functionality.
- Python has many built-in modules like `math`, `os`, etc.

**Example:**
```
import math

print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.1415...
```

### Import Variants

- `import module`
- `from module import name`
- `import module as alias`

**Examples:**
```
from math import sqrt
print(sqrt(25))      # Only sqrt is imported

import math as m
print(m.pi)          # Using alias
```

### Creating and Using Your Own Module

- Write Python functions in a separate `.py` file.
- Import it in your main script.

**myutils.py:**
```
def greet(name):
    return f"Hello, {name}!"
```

**main.py:**
```
import myutils
print(myutils.greet("Ravi"))
```

### Exploring Modules with dir() and help()

- `dir(module)`: Lists all attributes of a module.
- `help(module)`: Shows documentation for a module.

**Example:**
```
import math

print(dir(math))     # List all functions/vars
help(math)           # Detailed help
```

### Modules and Imports

- A module is a file containing Python definitions and statements.
- Use `import` to include a module in your script.
- Common standard modules: `math`, `random`, `datetime`
- Use `as` to rename, `from ... import ...` to import specific items.
**Example 1 - Import entire module:**
```
import math
print(math.sqrt(16))  # 4.0
```

**Example 2 - Import specific function:**
```
from math import pi
print(pi)  # 3.141592653589793
```

**Example 3 - Alias:**
```
import random as rnd
print(rnd.randint(1, 10))  # Random number between 1 and 10
```


*Part II: Core scripting and automation*

## Working with OS and Files

#### Working with OS and Files

### The `os` Module

- The `os` module in Python allows you to interact with the operating system.
- It provides functions to:
  - Navigate the file system
  - Create/remove directories and files
  - Execute system commands
  - Access environment variables
- It acts as a bridge between Python and your OS.

### Why Use the `os` Module?

- Automate file operations (like moving, renaming, deleting)
- Build portable code that works on Windows, Linux, and Mac
- Manage working directories for reading/writing files
- Enable scripting and batch processing using Python

Automatically create folders and sort downloaded files by type (e.g., images, PDFs).

### Getting Started with `os`

- First, import the module:

```
import os
```

- Use `dir(os)` to see available functions

### Working with Directories

- Get Current Working Directory:
```
os.getcwd()
# Output: '/home/user/projects'
```

- Change Directory:
```
os.chdir('/home/user/Documents')
```

### Listing and Creating Files/Folders

- List files in a directory:
```
os.listdir('.')
```

- Create new directory:
```
os.mkdir('new_folder')
```

- Create intermediate directories:
```
os.makedirs('parent/child/grandchild')
```

### Listing and Creating Files/Folders

- List files in a directory:
```
os.listdir('.')
```

- Create new directory:
```
os.mkdir('new_folder')
```

- Create intermediate directories:
```
os.makedirs('parent/child/grandchild')
```

### Directory Structure Example

### Deleting Files and Directories

- Delete a file:
```
os.remove('file.txt')
```

- Remove an empty directory:
```
os.rmdir('empty_folder')
```

- Remove a directory and all its contents:
```
import shutil
shutil.rmtree('parent_folder')
```

### Accessing Environment Variables

- View all environment variables:
```
os.environ
```

- Get a specific variable:
```
os.environ.get('HOME')
```

### Summary: `os` Module

- `os` is essential for file and OS-level automation.
- Core functions:
  - `os.getcwd()`, `os.chdir()`, `os.listdir()`
  - `os.mkdir()`, `os.remove()`, `os.rmdir()`
- Use `shutil` for high-level operations.
- Use `pathlib` for modern path management (next section!).

### `os.path` Module

- Part of the `os` module: handles pathname manipulations.
- Ensures cross-platform compatibility for file paths.
- Common functions:
  - `join`, `exists`, `basename`, `dirname`
  - `isfile`, `isdir`, `split`

### `os.path` Examples

```
import os

path = "/home/user/file.txt"

os.path.basename(path)   # 'file.txt'
os.path.dirname(path)    # '/home/user'
os.path.exists(path)     # True or False
os.path.isfile(path)     # True
os.path.isdir(path)      # False
```

### `shutil` Module

- High-level file operations.
- Useful for:
  - Copying files or directories
  - Moving files or directories
  - Removing directories recursively
  - Archiving and unpacking

### Common `shutil` Functions

```
import shutil

# Copy file
shutil.copy('file1.txt', 'backup/file1.txt')

# Move file
shutil.move('file1.txt', 'archive/file1.txt')

# Remove folder recursively
shutil.rmtree('old_logs')

# Make archive (zip, tar, etc.)
shutil.make_archive('backup', 'zip', 'my_folder')
```

### `pathlib` Module

- Introduced in Python 3.4 as an object-oriented alternative to `os.path`.
- Use `Path` objects for path manipulations.
- Clean syntax and cross-platform compatibility.

### `pathlib` Examples

```
from pathlib import Path

# Current directory
p = Path('.')

# Join paths
new_file = p / 'data' / 'file.txt'

# Check existence
new_file.exists()

# List all .txt files
list(p.glob('*.txt'))
```

### `sys` Module

- Provides access to system-specific parameters and functions.
- Key uses:
  - Command-line arguments
  - Exiting programs
  - Accessing stdin, stdout, stderr

### Using `sys.argv` (Command Line Arguments)

```
import sys

print("Script name:", sys.argv[0])
print("Arguments:", sys.argv[1:])
```

- Example usage:
```
$ python script.py input.txt output.txt
```

### Other `sys` Functions

```
# Exit the script
sys.exit()

# Get Python version
sys.version

# Access stdout and stderr
sys.stdout.write("Hello\n")
```

### `subprocess` Module

- Allows you to spawn new processes, connect to their input/output/error pipes.
- Used to run shell/system commands from Python.
- Preferred over `os.system()`.

### `subprocess.run()`

```
import subprocess

# Run a simple shell command
subprocess.run(["ls", "-l"])

# Run and capture output
result = subprocess.run(
    ["echo", "Hello"],
    capture_output=True,
    text=True
)

print(result.stdout)
```

### Run with Shell=True (Be Cautious)

```
# Running a full shell command
subprocess.run("ls -la | grep py", shell=True)
```

Using `shell=True` can be dangerous if you're passing untrusted input!

### Summary of Modules

| **Module** | **Purpose** |
|---|---|
| `os` | Low-level OS/file system access |
| `os.path` | Path manipulations |
| `shutil` | High-level file operations |
| `pathlib` | OOP-style path handling |
| `sys` | Access CLI args, system info |
| `subprocess` | Execute shell/system commands |


*Part II: Core scripting and automation*

## Text Processing

#### Text Processing

### String Processing in Python

- Strings are one of the most used data types in scripting and automation.
- Python provides:
  - Built-in string methods
  - Regular expressions for pattern matching
  - Powerful parsing capabilities for structured/unstructured data

### Basic String Operations

```
s = "Hello, World!"

print(len(s))           # 13
print(s.lower())        # hello, world!
print(s.upper())        # HELLO, WORLD!
print(s.strip("!"))     # Hello, World
```

- Strings are immutable in Python.
- Methods like `.lower()` and `.strip()` return new strings.

### Advanced String Methods

```
s = "python,java,c++"

# Splitting
langs = s.split(",")   # ['python', 'java', 'c++']

# Joining
joined = "-".join(langs)  # 'python-java-c++'

# Finding & Replacing
print(s.find("java"))     # 7
print(s.replace("java", "golang"))
```

### Regular Expressions with `re`

- The `re` module allows pattern matching in strings.
- Useful for:
  - Validating formats (emails, phone numbers)
  - Searching or extracting patterns
  - Parsing structured logs

### `re` Module – Key Functions

```
import re

# Search pattern
re.search("abc", "123abcdef")

# Match pattern from start
re.match("abc", "abcdef")  # None

# Find all matches
re.findall(r"\d+", "ID123, Code456")  # ['123', '456']

# Substitute
re.sub(r"\d+", "#", "123 abc 456")  # '# abc #'
```

### Common Regex Patterns

| **Pattern** | **Meaning** |
|---|---|
| `\d` | Digit (0–9) |
| `\w` | Word character (a-z, A-Z, 0-9, _) |
| `.` | Any character except newline |
| `*` | 0 or more times |
| `+` | 1 or more times |
| `?` | Optional (0 or 1 time) |
| `[abc]` | Matches one of a, b, or c |
| `(a\|b)` | Matches either a or b |

### Parsing Logs using Regex

```
import re

log = "[ERROR] 2025-08-07 10:45:23 - Disk full"

match = re.search(r"\[(\w+)\]\s([\d\-]+)\s([\d:]+)", log)

if match:
    level = match.group(1)
    date = match.group(2)
    time = match.group(3)
    print(level, date, time)
```

**Output:** `ERROR 2025-08-07 10:45:23`

### Summary: String Processing

- Use string methods for common manipulations:
`split()`, `join()`, `replace()`, etc.
- Use `re` for advanced pattern-based extraction.
- Combine both for parsing logs and structured text.

Use regex to extract errors, timestamps, or metrics from large logs or reports.


*Part II: Core scripting and automation*

## Functional Programming

#### Functional Programming

### Common Built-in Functions

- Python provides several built-in functions that are always available.
- Common ones include:
  - `len()` – Returns length of a sequence.
  - `type()` – Returns the type of the object.
  - `id()` – Returns the memory address of an object.
  - `sum()` – Sums items of an iterable.
  - `max()`, `min()` – Find maximum/minimum.
  - `sorted()` – Returns a sorted list.

**Examples:**
```
nums = [10, 20, 30]
print(len(nums))        # 3
print(type(nums))       # <class 'list'>
print(id(nums))         # Memory address
print(sum(nums))        # 60
print(max(nums))        # 30
print(sorted(nums))     # [10, 20, 30]
```

### More Built-in Functions

- These functions are commonly used in real-world tasks:
  - `abs()` – Absolute value of a number
  - `round()` – Rounds a number
  - `any()` – Returns `True` if any item is `True`
  - `all()` – Returns `True` if all items are `True`
  - `chr()` – Converts Unicode code to character
  - `ord()` – Converts character to Unicode code

**Examples:**
```
print(abs(-7))           # 7
print(round(3.1416, 2))  # 3.14
print(any([0, 1, 0]))    # True
print(all([1, True, 5])) # True
print(chr(65))           # 'A'
print(ord('A'))          # 65
```

### `zip()` and `map()` Functions

- `zip(iter1, iter2, ...)` combines items from multiple iterables.
- `map(function, iterable)` applies a function to all items.

**Examples - zip:**
```
names = ["Alice", "Bob"]
scores = [85, 92]
combined = list(zip(names, scores))
print(combined)
# Output: [('Alice', 85), ('Bob', 92)]
```

**Examples - map:**
```
nums = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, nums))
print(squared)
# Output: [1, 4, 9, 16]
```


*Part II: Core scripting and automation*

## Working with JSON/XML

#### Working with JSON/XML

### What are JSON and XML?

- **JSON (JavaScript Object Notation)**:
  - Lightweight, human-readable data format.
  - Based on key-value pairs, arrays.
  - Common in REST APIs and config files.

- **XML (eXtensible Markup Language)**:
  - Markup format with nested tags and attributes.
  - Common in legacy systems, documents, and web services (SOAP).

### Why Use JSON and XML?

- **Data exchange between systems** (web, mobile, desktop).
- **Interoperability:** Platform- and language-independent.
- **APIs:**
  - JSON → dominant in modern REST APIs.
  - XML → used in older systems, banking, telecom.
- **Data storage:** Config files, logging, structured data.

### JSON Example

```
{
  "name": "Alice",
  "age": 30,
  "skills": ["Python", "Data Science"],
  "active": true
}
```

**Supported types:** string, number, boolean, null, object (dict), array (list)

### Working with JSON in Python

```
import json

# Convert dict to JSON string
data = {"name": "Bob", "age": 25}
json_str = json.dumps(data)

# Convert JSON string to dict
parsed = json.loads(json_str)
```

### Reading & Writing JSON Files

```
# Write to file
with open("data.json", "w") as f:
    json.dump(data, f)

# Read from file
with open("data.json") as f:
    content = json.load(f)
```

### Pretty-Printing JSON

```
json_str = json.dumps(data, indent=4, sort_keys=True)
print(json_str)
```

Use `indent` and `sort_keys` for readability.

### XML Example

```
<employee>
  <name>Alice</name>
  <age>30</age>
  <skills>
    <skill>Python</skill>
    <skill>ML</skill>
  </skills>
</employee>
```

### Parsing XML using `ElementTree`

```
import xml.etree.ElementTree as ET

tree = ET.parse('employee.xml')
root = tree.getroot()

print(root.tag)        # 'employee'
print(root[0].tag)     # 'name'
print(root[0].text)    # 'Alice'
```

### Traversing XML Elements

```
for child in root:
    print(child.tag, child.text)
```

- You can iterate over children, check attributes, etc.

### XPath Basics

- XPath is used to query XML nodes.
- Simple support via `ElementTree.find()` and `findall()`.

```
# Get all <skill> elements
skills = root.find("skills").findall("skill")

for s in skills:
    print(s.text)
```

### Summary: JSON & XML

- **JSON**: Simpler, more modern, API-friendly.
- **XML**: Verbose but powerful, used in older systems.
- Python modules:
  - `json` — load, dump, pretty-print
  - `xml.etree.ElementTree` — parsing and XPath
- Use them to store, transfer, and process structured data.

### Data Exchange Flow
