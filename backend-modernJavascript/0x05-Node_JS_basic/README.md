---
created: 2025-03-26T00:17:03 (UTC +01:00)
tags: []
source: https://intranet.alxswe.com/projects/1243
author: 
---

# Project: 0x05. NodeJS Basics | Lagos Intranet

> ## Excerpt
> Back-endJavaScriptES6NodeJSExpressJS

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

# 0x05. NodeJS Basics

Back-endJavaScriptES6NodeJSExpressJS

-   Weight: 1
-   Project over - took place from Apr 29, 2024 6:00 AM to May 1, 2024 6:00 AM
-   An auto review will be launched at the deadline

#### In a nutshell…

-   **Auto QA review:** 23.0/32 mandatory
-   **Altogether:**  **71.88%**
    -   Mandatory: 71.88%
    -   Optional: no optional tasks

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20250325%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250325T231201Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=510e52a373b0323c8d139f17f3daf39c28fc39d9ddb6f8c9ee63da62563a6ed5)

## Resources

**Read or watch**:

-   [Node JS getting started](https://intranet.alxswe.com/rltoken/hROgW3QO9jqFnFP-Nzwh8A "Node JS getting started")
-   [Process API doc](https://intranet.alxswe.com/rltoken/Wt69QV2xygB4GEqob26AjQ "Process API doc")
-   [Child process](https://intranet.alxswe.com/rltoken/IS4y9rRCblX71W_oeXpymw "Child process")
-   [Express getting started](https://intranet.alxswe.com/rltoken/XsfrhG9NRLuuaTpVZlZv_g "Express getting started")
-   [Mocha documentation](https://intranet.alxswe.com/rltoken/EBGDj1FwLrK_y4kgxp8hfg "Mocha documentation")
-   [Nodemon documentation](https://intranet.alxswe.com/rltoken/vnDSbLsicMDdxcf5YUSXIg "Nodemon documentation")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/vXmxtc5JH_CeIWReMTNhDA "explain to anyone"), **without the help of Google**:

-   run javascript using NodeJS
-   use NodeJS modules
-   use specific Node JS module to read files
-   use `process` to access command line arguments and the environment
-   create a small HTTP server using Node JS
-   create a small HTTP server using Express JS
-   create advanced routes with Express JS
-   use ES6 with Node JS with Babel-node
-   use Nodemon to develop faster

## Requirements

-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
-   All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

## Provided files

### `database.csv`

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

### `package.json`

Click to show/hide file contents

```

{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

### `babel.config.js`

Click to show/hide file contents

```

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `.eslintrc.js`

Click to show/hide file contents

```

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### and…

Don’t forget to run `$ npm install` when you have the `package.json`

## Tasks

### 0\. Executing basic javascript with Node JS

mandatory

Score: 0.0% (Checks completed: 0.0%)

In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.

```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `0-console.js`

Check submission

×

#### 0\. Executing basic javascript with Node JS

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

#### 0\. Executing basic javascript with Node JS

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 1\. Using Process stdin

mandatory

Score: 100.0% (Checks completed: 100.0%)

Create a program named `1-stdin.js` that will be executed through command line:

-   It should display the message `Welcome to ALX, what is your name?` (followed by a new line)
-   The user should be able to input their name on a new line
-   The program should display `Your name is: INPUT`
-   When the user ends the program, it should display `This important software is now closing` (followed by a new line)

**Requirements:**

-   Your code will be tested through a child process, make sure you have everything you need for that

```
bob@dylan:~$ node 1-stdin.js 
Welcome to ALX, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to ALX, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `1-stdin.js`

Check submission

×

#### 1\. Using Process stdin

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

#### 1\. Using Process stdin

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 2\. Reading a file synchronously with Node JS

mandatory

Score: 100.0% (Checks completed: 100.0%)

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`

-   Create a function named `countStudents`. It should accept a path in argument
-   The script should attempt to read the database file synchronously
-   If the database is not available, it should throw an error with the text `Cannot load the database`
-   If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `2-read_file.js`

Check submission

×

#### 2\. Reading a file synchronously with Node JS

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

#### 2\. Reading a file synchronously with Node JS

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 3\. Reading a file asynchronously with Node JS

mandatory

Score: 100.0% (Checks completed: 100.0%)

Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`

-   Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
-   The script should attempt to read the database file asynchronously
-   The function should return a Promise
-   If the database is not available, it should throw an error with the text `Cannot load the database`
-   If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
-   It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

```
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() =&gt; {
        console.log("Done!");
    })
        .catch((error) =&gt; {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() =&gt; {
        console.log("Done!");
    })
        .catch((error) =&gt; {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$ 
```

**Tips:**

-   Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `3-read_file_async.js`

Check submission

×

#### 3\. Reading a file asynchronously with Node JS

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

#### 3\. Reading a file asynchronously with Node JS

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 4\. Create a small HTTP server using Node's HTTP module

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `4-http.js`, create a small HTTP server using the `http` module:

-   It should be assigned to the variable `app` and this one must be exported
-   HTTP server should listen on port 1245
-   Displays `Hello ALX!` in the page body for any endpoint as plain text

In terminal 1:

```
bob@dylan:~$ node 4-http.js
...
```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello ALX!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo ""
Hello ALX!
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `4-http.js`

Check submission

×

#### 4\. Create a small HTTP server using Node's HTTP module

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

#### 4\. Create a small HTTP server using Node's HTTP module

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 5\. Create a more complex HTTP server using Node's HTTP module

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `5-http.js`, create a small HTTP server using the `http` module:

-   It should be assigned to the variable app and this one must be exported
-   HTTP server should listen on port 1245
-   It should return plain text
-   When the URL path is `/`, it should display `Hello ALX!` in the page body
-   When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:

```
bob@dylan:~$ node 5-http.js database.csv
...
```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello ALX!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `5-http.js`

Check submission

×

#### 5\. Create a more complex HTTP server using Node's HTTP module

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

#### 5\. Create a more complex HTTP server using Node's HTTP module

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 6\. Create a small HTTP server using Express

mandatory

Score: 100.0% (Checks completed: 100.0%)

Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express module:

-   It should be assigned to the variable `app` and this one must be exported
-   HTTP server should listen on port 1245
-   Displays `Hello ALX!` in the page body for the endpoint `/`

In terminal 1:

```
bob@dylan:~$ node 6-http_express.js
...
```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello ALX!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint &amp;&amp; echo ""
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Error&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pre&gt;Cannot GET /lskdlskd&lt;/pre&gt;
&lt;/body&gt;
&lt;/html&gt; 
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `6-http_express.js`

Check submission

×

#### 6\. Create a small HTTP server using Express

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

#### 6\. Create a small HTTP server using Express

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 7\. Create a more complex HTTP server using Express

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `7-http_express.js`, recreate the small HTTP server using `Express`:

-   It should be assigned to the variable app and this one must be exported
-   HTTP server should listen on port 1245
-   It should return plain text
-   When the URL path is `/`, it should display `Hello ALX!` in the page body
-   When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
-   CSV file can contain empty lines (at the end) - and they are not a valid student!

Terminal 1:

```
bob@dylan:~$ node 7-http_express.js database.csv
...
```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello ALX!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `7-http_express.js`

Check submission

×

#### 7\. Create a more complex HTTP server using Express

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

#### 7\. Create a more complex HTTP server using Express

##### Commit used:

-   **User:** \---
-   **URL:** Click here
-   **ID:** `---`
-   **Author:** \---
-   **Subject:** _\---_
-   **Date:** \---

### 8\. Organize a complex HTTP server using Express

mandatory

Score: 0.0% (Checks completed: 0.0%)

Obviously writing every part of a server within a single file is not sustainable. Let’s create a full server in a directory named `full_server`.

Since you have used ES6 and Babel in the past projects, let’s use `babel-node` to allow to use ES6 functions like `import` or `export`.

#### 8.1 Organize the structure of the server

-   Create 2 directories within:
    -   `controllers`
    -   `routes`
-   Create a file `full_server/utils.js`, in the file create a function named `readDatabase` that accepts a file path as argument:
    -   It should read the database asynchronously
    -   It should return a promise
    -   When the file is not accessible, it should reject the promise with the error
    -   When the file can be read, it should return an object of arrays of the firstname of students per fields

#### 8.2 Write the App controller

Inside the file `full_server/controllers/AppController.js`:

-   Create a class named `AppController`. Add a static method named `getHomepage`
-   The method accepts `request` and `response` as argument. It returns a 200 status and the message `Hello ALX!`

#### 8.3 Write the Students controller

Inside the file `full_server/controllers/StudentsController.js`, create a class named `StudentsController`. Add two static methods:

The first one is `getAllStudents`:

-   The method accepts `request` and `response` as argument
-   It should return a status 200
-   It calls the function `readDatabase` from the `utils` file, and display in the page:
    -   First line: `This is the list of our students`
    -   And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
-   If the database is not available, it should return a status 500 and the error message `Cannot load the database`

The second one is `getAllStudentsByMajor`:

-   The method accepts `request` and `response` as argument
-   It should return a status 200
-   It uses a parameter that the user can pass to the browser `major`. The `major` can only be `CS` or `SWE`. If the user is passing another parameter, the server should return a 500 and the error `Major parameter must be CS or SWE`
-   It calls the function `readDatabase` from the `utils` file, and display in the page the list of first names for the students (ordered by appearance in the database file) in the specified field `List: LIST_OF_FIRSTNAMES_IN_THE_FIELD`
-   If the database is not available, it should return a status 500 and the error message `Cannot load the database`

#### 8.4 Write the routes

Inside the file `full_server/routes/index.js`:

-   Link the route `/` to the `AppController`
-   Link the route `/students` and `/students/:major`to the `StudentsController`

#### 8.5 Write the server reusing everything you created

Inside the file named `full_server/server.js`, create a small Express server:

-   It should use the routes defined in `full_server/routes/index.js`
-   It should use the port `1245`

#### 8.6 Update `package.json` (if you are running it from outside the folder `full_server`)

If you are starting node from outside of the folder `full_server`, you will have to update the command `dev` by: `nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv`

**Warning:**

-   Don’t forget to export your express app at the end of `server.js` (`export default app;`)
-   The database filename is passed as argument of the `server.js` BUT, for testing purpose, you should retrieve this filename at the execution (when `getAllStudents` or `getAllStudentsByMajor` are called for example)

In terminal 1:

```
bob@dylan:~$ npm run dev
...
```

In terminal 2:

```
bob@dylan:~$ curl localhost:1245 &amp;&amp; echo ""
Hello ALX!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students &amp;&amp; echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/SWE &amp;&amp; echo ""
List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students/French -vvv &amp;&amp; echo ""
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 1245 (#0)
&gt; GET /students/SWES HTTP/1.1
&gt; Host: localhost:1245
&gt; User-Agent: curl/7.58.0
&gt; Accept: */*
&gt;
&lt; HTTP/1.1 500 Internal Server Error
&lt; X-Powered-By: Express
&lt; Date: Mon, 06 Jul 2020 03:29:00 GMT
&lt; Connection: keep-alive
&lt; Content-Length: 33
&lt;
* Connection #0 to host localhost left intact
Major parameter must be CS or SWE
bob@dylan:~$ 
```

If you want to add test to validate your integration, you will need to add this file: `.babelrc`

Click to show/hide file contents

```

{
    "presets": [["env", {"exclude": ["transform-regenerator"]}]]
}
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x05-Node_JS_basic`
-   File: `full_server/utils.js, full_server/controllers/AppController.js, full_server/controllers/StudentsController.js, full_server/routes/index.js, full_server/server.js`

Check submission

×

#### 8\. Organize a complex HTTP server using Express

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

#### 8\. Organize a complex HTTP server using Express

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

### Ubuntu 18.04 - Node 12

Ubuntu 18.04 with Node 12

Run

Copyright © 2025 ALX, All rights reserved.
