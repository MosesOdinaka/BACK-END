---
created: 2025-03-26T00:27:05 (UTC +01:00)
tags: []
source: https://intranet.alxswe.com/projects/1229
author: 
---

# Project: 0x00. Python - Variable Annotations | Lagos Intranet

> ## Excerpt
> Short Specializations
        
        
          Average: 93.94%

---
[

](https://intranet.alxswe.com/)

-   [
    
    Home
    
    ](https://intranet.alxswe.com/)
-   [
    
    My Planning
    
    ](https://intranet.alxswe.com/planning/me)
-   [
    
    Projects
    
    ](https://intranet.alxswe.com/projects/current)
-   [
    
    QA Reviews I can make
    
    ](https://intranet.alxswe.com/corrections/to_review)
-   [
    
    Evaluation quizzes
    
    ](https://intranet.alxswe.com/dashboards/my_current_evaluation_quizzes)

___

-   [
    
    Curriculums
    
    ](https://intranet.alxswe.com/dashboards/my_curriculums)
-   [
    
    Concepts
    
    ](https://intranet.alxswe.com/concepts)
-   [
    
    Conference rooms
    
    ](https://intranet.alxswe.com/dashboards/video_rooms)
-   [
    
    Servers
    
    ](https://intranet.alxswe.com/servers)
-   [
    
    Sandboxes
    
    ](https://intranet.alxswe.com/user_containers/current)
-   [
    
    Tools
    
    ](https://intranet.alxswe.com/dashboards/my_tools)
-   [
    
    Video on demand
    
    ](https://intranet.alxswe.com/dashboards/videos)

___

-   [
    
    Peers
    
    ](https://intranet.alxswe.com/users/peers)
-   [
    
    Discord
    
    ](https://discord.com/app)
-   [
    
    My Profile
    
    ](https://intranet.alxswe.com/users/my_profile)

Short Specializations Average: 93.94%

-   [
    
    SE Foundations Average: 93.15%
    
    
    
    ](https://intranet.alxswe.com/curriculums/1/observe)
-   [
    
    Short Specializations Average: 93.94%
    
    
    
    ](https://intranet.alxswe.com/curriculums/17/observe)

# 0x00. Python - Variable Annotations

PythonBack-end

-   Weight: 1
-   Project over - took place from Mar 14, 2024 6:00 AM to Mar 15, 2024 6:00 AM
-   An auto review will be launched at the deadline

#### In a nutshell…

-   **Auto QA review:** 29.0/53 mandatory & 0.0/10 optional
-   **Altogether:**  **54.72%**
    -   Mandatory: 54.72%
    -   Optional: 0.0%
    -   Calculation:  54.72% + (54.72% \* 0.0%)  == **54.72%**

### Concepts

_For this project, we expect you to look at this concept:_

-   [Advanced Python](https://intranet.alxswe.com/concepts/554)

![](https://i.redd.it/y9y25tefi5401.png)

## Resources

**Read or watch**:

-   [Python 3 typing documentation](https://intranet.alxswe.com/rltoken/5j0OtdWh36_HVAHKJX2gaA "Python 3 typing documentation")
-   [MyPy cheat sheet](https://intranet.alxswe.com/rltoken/Eud-nrUG7x3iT6JD2Sas-g "MyPy cheat sheet")

## Learning Objectives

### General

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/hGUom4nCewYmroS4ii_ZDQ "explain to anyone"), **without the help of Google**:

-   Type annotations in Python 3
-   How you can use type annotations to specify function signatures and variable types
-   Duck typing
-   How to validate your code with `mypy`

## Requirements

### General

-   Allowed editors: `vi`, `vim`, `emacs`
-   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `python3` (version 3.7)
-   All your files should end with a new line
-   The first line of all your files should be exactly `#!/usr/bin/env python3`
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `pycodestyle` style (version 2.5.)
-   All your files must be executable
-   The length of your files will be tested using `wc`
-   All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
-   All your classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)
-   All your functions (inside and outside a class) should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)
-   A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)

## Tasks

### 0\. Basic annotations - add

mandatory

Score: 100.0% (Checks completed: 100.0%)

Write a type-annotated function `add` that takes a float `a` and a float `b` as arguments and returns their sum as a float.

```
bob@dylan:~$ cat 0-main.py
#!/usr/bin/env python3
add = __import__('0-add').add

print(add(1.11, 2.22) == 1.11 + 2.22)
print(add.__annotations__)

bob@dylan:~$ ./0-main.py
True
{'a':  &lt;class 'float'&gt;, 'b': &lt;class 'float'&gt;, 'return': &lt;class 'float'&gt;}
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `0-add.py`

Check submission

×

#### 0\. Basic annotations - add

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox View results

×

#### 0\. Basic annotations - add

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 1\. Basic annotations - concat

mandatory

Score: 100.0% (Checks completed: 100.0%)

Write a type-annotated function `concat` that takes a string `str1` and a string `str2` as arguments and returns a concatenated string

```
bob@dylan:~$ cat 1-main.py
#!/usr/bin/env python3
concat = __import__('1-concat').concat

str1 = "egg"
str2 = "shell"

print(concat(str1, str2) == "{}{}".format(str1, str2))
print(concat.__annotations__)

bob@dylan:~$ ./1-main.py
True
{'str1': &lt;class 'str'&gt;, 'str2': &lt;class 'str'&gt;, 'return': &lt;class 'str'&gt;}
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `1-concat.py`

Check submission

×

#### 1\. Basic annotations - concat

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox View results

×

#### 1\. Basic annotations - concat

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 2\. Basic annotations - floor

mandatory

Score: 100.0% (Checks completed: 100.0%)

Write a type-annotated function `floor` which takes a float `n` as argument and returns the floor of the float.

```
bob@dylan:~$ cat 2-main.py
#!/usr/bin/env python3

import math

floor = __import__('2-floor').floor

ans = floor(3.14)

print(ans == math.floor(3.14))
print(floor.__annotations__)
print("floor(3.14) returns {}, which is a {}".format(ans, type(ans)))

bob@dylan:~$ ./2-main.py
True
{'n': &lt;class 'float'&gt;, 'return': &lt;class 'int'&gt;}
floor(3.14) returns 3, which is a &lt;class 'int'&gt;
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `2-floor.py`

Check submission

×

#### 2\. Basic annotations - floor

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox View results

×

#### 2\. Basic annotations - floor

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 3\. Basic annotations - to string

mandatory

Score: 100.0% (Checks completed: 100.0%)

Write a type-annotated function `to_str` that takes a float `n` as argument and returns the string representation of the float.

```
bob@dylan:~$ cat 3-main.py
#!/usr/bin/env python3
to_str = __import__('3-to_str').to_str

pi_str = to_str(3.14)
print(pi_str == str(3.14))
print(to_str.__annotations__)
print("to_str(3.14) returns {} which is a {}".format(pi_str, type(pi_str)))

bob@dylan:~$ ./3-main.py
True
{'n': &lt;class 'float'&gt;, 'return': &lt;class 'str'&gt;}
to_str(3.14) returns 3.14, which is a &lt;class 'str'&gt;
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `3-to_str.py`

Check submission

×

#### 3\. Basic annotations - to string

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox View results

×

#### 3\. Basic annotations - to string

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 4\. Define variables

mandatory

Score: 90.0% (Checks completed: 90.0%)

Define and annotate the following variables with the specified values:

-   `a`, an integer with a value of 1
-   `pi`, a float with a value of 3.14
-   `i_understand_annotations`, a boolean with a value of True
-   `school`, a string with a value of “ALX”

```
bob@dylan:~$ cat 4-main.py
#!/usr/bin/env python3

a = __import__('4-define_variables').a
pi = __import__('4-define_variables').pi
i_understand_annotations = __import__('4-define_variables').i_understand_annotations
school = __import__('4-define_variables').school

print("a is a {} with a value of {}".format(type(a), a))
print("pi is a {} with a value of {}".format(type(pi), pi))
print("i_understand_annotations is a {} with a value of {}".format(type(i_understand_annotations), i_understand_annotations))
print("school is a {} with a value of {}".format(type(school), school))

bob@dylan:~$ ./4-main.py
a is a &lt;class 'int'&gt; with a value of 1
pi is a &lt;class 'float'&gt; with a value of 3.14
i_understand_annotations is a &lt;class 'bool'&gt; with a value of True
school is a &lt;class 'str'&gt; with a value of ALX
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `4-define_variables.py`

Check submission

×

#### 4\. Define variables

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 4\. Define variables

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 5\. Complex types - list of floats

mandatory

Score: 0.0% (Checks completed: 0.0%)

Write a type-annotated function `sum_list` which takes a list `input_list` of floats as argument and returns their sum as a float.

```
bob@dylan:~$ cat 5-main.py
#!/usr/bin/env python3

sum_list = __import__('5-sum_list').sum_list

floats = [3.14, 1.11, 2.22]
floats_sum = sum_list(floats)
print(floats_sum == sum(floats))
print(sum_list.__annotations__)
print("sum_list(floats) returns {} which is a {}".format(floats_sum, type(floats_sum)))

bob@dylan:~$ ./5-main.py
True
{'input_list': typing.List[float], 'return': &lt;class 'float'&gt;}
sum_list(floats) returns 6.470000000000001 which is a &lt;class 'float'&gt;
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `5-sum_list.py`

Check submission

×

#### 5\. Complex types - list of floats

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 5\. Complex types - list of floats

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 6\. Complex types - mixed list

mandatory

Score: 0.0% (Checks completed: 0.0%)

Write a type-annotated function `sum_mixed_list` which takes a list `mxd_lst` of integers and floats and returns their sum as a float.

```
bob@dylan:~$ cat 6-main.py
#!/usr/bin/env python3

sum_mixed_list = __import__('6-sum_mixed_list').sum_mixed_list

print(sum_mixed_list.__annotations__)
mixed = [5, 4, 3.14, 666, 0.99]
ans = sum_mixed_list(mixed)
print(ans == sum(mixed))
print("sum_mixed_list(mixed) returns {} which is a {}".format(ans, type(ans)))

bob@dylan:~$ ./6-main.py
{'mxd_lst': typing.List[typing.Union[int, float]], 'return': &lt;class 'float'&gt;}
True
sum_mixed_list(mixed) returns 679.13 which is a &lt;class 'float'&gt;
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `6-sum_mixed_list.py`

Check submission

×

#### 6\. Complex types - mixed list

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 6\. Complex types - mixed list

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 7\. Complex types - string and int/float to tuple

mandatory

Score: 0.0% (Checks completed: 0.0%)

Write a type-annotated function `to_kv` that takes a string `k` and an int OR float `v` as arguments and returns a tuple. The first element of the tuple is the string `k`. The second element is the square of the int/float `v` and should be annotated as a float.

```
bob@dylan:~$ cat 7-main.py
#!/usr/bin/env python3

to_kv = __import__('7-to_kv').to_kv

print(to_kv.__annotations__)
print(to_kv("eggs", 3))
print(to_kv("school", 0.02))

bob@dylan:~$ ./7-main.py
{'k': &lt;class 'str'&gt;, 'v': typing.Union[int, float], 'return': typing.Tuple[str, float]}
('eggs', 9)
('school', 0.0004)
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `7-to_kv.py`

Check submission

×

#### 7\. Complex types - string and int/float to tuple

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 7\. Complex types - string and int/float to tuple

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 8\. Complex types - functions

mandatory

Score: 0.0% (Checks completed: 0.0%)

Write a type-annotated function `make_multiplier` that takes a float `multiplier` as argument and returns a function that multiplies a float by `multiplier`.

```
bob@dylan:~$ cat 8-main.py
#!/usr/bin/env python3

make_multiplier = __import__('8-make_multiplier').make_multiplier
print(make_multiplier.__annotations__)
fun = make_multiplier(2.22)
print("{}".format(fun(2.22)))

bob@dylan:~$ ./8-main.py
{'multiplier': &lt;class 'float'&gt;, 'return': typing.Callable[[float], float]}
4.928400000000001
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `8-make_multiplier.py`

Check submission

×

#### 8\. Complex types - functions

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 8\. Complex types - functions

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 9\. Let's duck type an iterable object

mandatory

Score: 0.0% (Checks completed: 0.0%)

Annotate the below function’s parameters and return values with the appropriate types

```
def element_length(lst):
    return [(i, len(i)) for i in lst]
```

```
bob@dylan:~$ cat 9-main.py 
#!/usr/bin/env python3

element_length =  __import__('9-element_length').element_length

print(element_length.__annotations__)

bob@dylan:~$ ./9-main.py 
{'lst': typing.Iterable[typing.Sequence], 'return': typing.List[typing.Tuple[typing.Sequence, int]]}
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `9-element_length.py`

Check submission

×

#### 9\. Let's duck type an iterable object

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 9\. Let's duck type an iterable object

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 10\. Duck typing - first element of a sequence

#advanced

Score: 0.0% (Checks completed: 0.0%)

Augment the following code with the correct duck-typed annotations:

```
# The types of the elements of the input are not know
def safe_first_element(lst):
    if lst:
        return lst[0]
    else:
        return None
```

```
bob@dylan:~$ cat 100-main.py 
#!/usr/bin/env python3

safe_first_element =  __import__('100-safe_first_element').safe_first_element

print(safe_first_element.__annotations__)

bob@dylan:~$ ./100-main.py 
{'lst': typing.Sequence[typing.Any], 'return': typing.Union[typing.Any, NoneType]}
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `100-safe_first_element.py`

Check submission

×

#### 10\. Duck typing - first element of a sequence

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 10\. Duck typing - first element of a sequence

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 11\. More involved type annotations

#advanced

Score: 0.0% (Checks completed: 0.0%)

Given the parameters and the return values, add type annotations to the function

Hint: look into TypeVar

```
def safely_get_value(dct, key, default = None):
    if key in dct:
        return dct[key]
    else:
        return default
```

```
bob@dylan:~$ cat 101-main.py 
#!/usr/bin/env python3

safely_get_value = __import__('101-safely_get_value').safely_get_value
annotations = safely_get_value.__annotations__

print("Here's what the mappings should look like")
for k, v in annotations.items():
    print( ("{}: {}".format(k, v)))

bob@dylan:~$ ./101-main.py 
Here's what the mappings should look like
dct: typing.Mapping
key: typing.Any
default: typing.Union[~T, NoneType]
return: typing.Union[typing.Any, ~T]
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `101-safely_get_value.py`

Check submission

×

#### 11\. More involved type annotations

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 11\. More involved type annotations

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 12\. Type Checking

#advanced

Score: 0.0% (Checks completed: 0.0%)

Use `mypy` to validate the following piece of code and apply any necessary changes.

```
def zoom_array(lst: Tuple, factor: int = 2) -&gt; Tuple:
    zoomed_in: Tuple = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = [12, 72, 91]

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3.0)
```

```
bob@dylan:~$ mypy 102-type_checking.py
Success: no issues found in 1 source file
bob@dylan:~$ cat 102-main.py 
#!/usr/bin/env python3

zoom_array =  __import__('102-type_checking').zoom_array

print(zoom_array.__annotations__)

bob@dylan:~$ ./102-main.py 
{'lst': typing.Tuple, 'factor': &lt;class 'int'&gt;, 'return': typing.List}
```

**Repo:**

-   GitHub repository: `alx-backend-python`
-   Directory: `0x00-python_variable_annotations`
-   File: `102-type_checking.py`

Check submission

×

#### 12\. Type Checking

Request a new review Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Mark submission : in progress... : an error occurred Get a sandbox View results

×

#### 12\. Type Checking

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

×

#### Recommended Sandbox

Running only

### 1 image<small class="ml-2">(0/2 Sandboxes spawned)</small>

### Ubuntu 18.04 - Python 3.7

Ubuntu 18.04 with Python 3.7

Run

Copyright © 2025 ALX, All rights reserved.
