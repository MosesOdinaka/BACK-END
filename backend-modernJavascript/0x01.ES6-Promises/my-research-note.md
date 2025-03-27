MosesOdinaka: # Prompt for Technical Concept Explanations and Implementation Guides

Please provide a beginner-friendly explanation of [Project: 0x01. ES6 Promises | Lagos Intranet
Excerpt
[

](https://intranet.alxswe.com/)

[

](https://intranet.alxswe.com/)

[

](https://intranet.alxswe.com/planning/me)

[

](https://intranet.alxswe.com/projects/current)

[

](https://intranet.alxswe.com/corrections/to_review)

[

](https://intranet.alxswe.com/dashboards/my_current_evaluation_quizzes)

[

](https://intranet.alxswe.com/dashboards/my_curriculums)

[

](https://intranet.alxswe.com/concepts)

[

](https://intranet.alxswe.com/dashboards/video_rooms)

[

](https://intranet.alxswe.com/servers)

[

](https://intranet.alxswe.com/user_containers/current)

[

](https://intranet.alxswe.com/dashboards/my_tools)

[

](https://intranet.alxswe.com/dashboards/videos)

[

](https://intranet.alxswe.com/users/peers)

[

](https://discord.com/app)

[

](https://intranet.alxswe.com/users/my_profile)

Short Specializations Average: 93.94%

0x01. ES6 Promises
JavaScriptES6

Weight: 1
Project over - took place from Mar 5, 2024 6:00 AM to Mar 7, 2024 6:00 AM
An auto review will be launched at the deadline
In a nutshell…
Auto QA review: 0.0/26 mandatory & 0.0/4 optional
Altogether:  0.0%
Mandatory: 0.0%
Optional: 0.0%
Calculation:  0.0% + (0.0% * 0.0%)  == 0.0%


Resources
Read or watch:

Promise
JavaScript Promise: An introduction
Await
Async
Throw / Try
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

Promises (how, why, and what)
How to use the then, resolve, catch methods
How to use every method of the Promise object
Throw / Try
The await operator
How to use an async function
Requirements
All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Your code will be tested using Jest and the command npm run test
Your code will be verified against lint using ESLint
All of your functions must be exported
Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.

Configuration Files
Add the files below to your project directory

package.json
Click to show/hide file contents


{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js &amp;&amp; jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
babel.config.js
Click to show/hide file contents


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
utils.js
Use when you get to tasks requiring uploadPhoto and createUser.

Click to show/hide file contents


export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}<p></p>

.eslintrc.js
Click to show/hide file contents


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
and…
Don’t forget to run $ npm install when you have the package.json

Response Data Format
uploadPhoto returns a response with the format

{
  status: 200,
  body: 'photo-profile-1',
}
createUser returns a response with the format

{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
Tasks
0. Keep every promise you make and only make promises you can keep
mandatory

Score: 0.0% (Checks completed: 0.0%)

Return a Promise using this prototype function getResponseFromAPI()

bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 0-promise.js
Check submission Mark submission Get a sandbox View results

1. Don't make a promise...if you know you can't keep it
mandatory

Score: 0.0% (Checks completed: 0.0%)

Using the prototype below, return a promise. The parameter is a boolean.

getFullResponseFromAPI(success)
When the argument is:

true
resolve the promise by passing an object with 2 attributes:
status: 200
body: 'Success'
false
reject the promise with an error object with the message The fake API is not working currently
Try testing it out for yourself

bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  &lt;rejected&gt; Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 1-promise.js
Check submission Mark submission Get a sandbox View results

2. Catch me if you can!
mandatory

Score: 0.0% (Checks completed: 0.0%)

Using the function prototype below

function handleResponseFromAPI(promise)
Append three handlers to the function:

When the Promise resolves, return an object with the following attributes
status: 200
body: success
When the Promise rejects, return an empty Error object
For every resolution, log Got a response from the API to the console
bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 2-then.js
Check submission Mark submission Get a sandbox View results

3. Handle multiple successful promises
mandatory

Score: 0.0% (Checks completed: 0.0%)

In this file, import uploadPhoto and createUser from utils.js

Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.

function handleProfileSignup()
In the event of an error, log Signup system offline to the console

bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 3-all.js
Check submission Mark submission Get a sandbox View results

4. Simple promise
mandatory

Score: 0.0% (Checks completed: 0.0%)

Using the following prototype

function signUpUser(firstName, lastName) {
}
That returns a resolved promise with this object:

{
  firstName: value,
  lastName: value,
}
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 4-user-promise.js
Check submission Mark submission Get a sandbox View results

5. Reject the promises
mandatory

Score: 0.0% (Checks completed: 0.0%)

Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

export default function uploadPhoto(filename) {

}
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  &lt;rejected&gt; Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 5-photo-reject.js
Check submission Mark submission Get a sandbox View results

6. Handle multiple promises
mandatory

Score: 0.0% (Checks completed: 0.0%)

Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
bob@dylan:~$ cat 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Promise { &lt;pending&gt; }
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 6-final-user.js
Check submission Mark submission Get a sandbox View results

7. Load balancer
mandatory

Score: 0.0% (Checks completed: 0.0%)

Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise).

The function should return the value returned by the promise that resolved the first.

export default function loadBalancer(chinaDownload, USDownload) {

}
bob@dylan:~$ cat 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () =&gt; {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Downloading from UK is faster
Downloading from FR is faster
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 7-load_balancer.js
Check submission Mark submission Get a sandbox View results

8. Throw error / try catch
mandatory

Score: 0.0% (Checks completed: 0.0%)

Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).

When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it should return the numerator divided by the denominator.

export default function divideFunction(numerator, denominator) {

}
bob@dylan:~$ cat 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....

bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 8-try.js
Check submission Mark submission Get a sandbox View results

9. Throw an error
mandatory

Score: 0.0% (Checks completed: 0.0%)

Write a function named guardrail that will accept one argument mathFunction (Function).

This function should create and return an array named queue.

When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue.

Example:

[
  1000,
  'Guardrail was processed',
]
bob@dylan:~$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() =&gt; { return divideFunction(10, 2)}));
console.log(guardrail(() =&gt; { return divideFunction(10, 0)}));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 9-try.js
Check submission Mark submission Get a sandbox View results

10. Await / Async
#advanced

Score: 0.0% (Checks completed: 0.0%)

Import uploadPhoto and createUser from utils.js

Write an async function named asyncUploadUser that will call these two functions and return an object with the following format:

{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
If one of the async function fails, return an empty object. Example:

{
  photo: null,
  user: null,
}
bob@dylan:~$ cat 100-main.js
import asyncUploadUser from "./100-await";

const test = async () =&gt; {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
{
  photo: { status: 200, body: 'photo-profile-1' },
  user: { firstName: 'Guillaume', lastName: 'Salva' }
}
bob@dylan:~$ 
Repo:

GitHub repository: alx-backend-javascript
Directory: 0x01-ES6_promise
File: 100-await.js
Check submission Mark submission Get a sandbox View results

Copyright © 2025 ALX, All rights reserved.] with implementation guidelines:

## For each concept/task:

1. **Simple explanation:** Define the concept in 1-2 sentences using everyday language without technical jargon.

2. **Real-world analogy:** Compare it to a familiar real-life situation (e.g., "Promises are like restaurant order tickets...").

3. **Visual description:** Help me visualize how this works ("Imagine a message being passed between...").

4. **Why it matters:** Briefly explain when and why programmers use this concept.

5. **Step-by-step implementation:**
   - Break the implementation into numbered micro-steps
   - Explain what each line of code does in plain English
   - Provide fully-functional code with helpful comments
   - Highlight common mistakes to avoid

6. **Example usage:** Show a practical example of this concept solving a real problem.

Please aim for explanations that would make sense to someone with basic programming knowledge but unfamiliar with this specific concept. Use concrete examples rather than abstract descriptions wherever possible.

GitHub Copilot: # ES6 Promises: A Beginner's Guide

## What Are Promises?

### Simple Explanation
A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation, allowing you to handle the results when they become available rather than immediately.

### Real-world Analogy
Think of a Promise like ordering food at a restaurant. When you place your order, you get a receipt (the Promise). This doesn't mean your food is ready yet, but it's a guarantee that eventually you'll either receive your meal (resolved) or be told they're out of ingredients (rejected).

### Visual Description
Imagine a mailbox with three possible states: waiting for mail (pending), received good news (resolved), or received bad news (rejected). A Promise works the same way, starting in the pending state and eventually transitioning to either resolved or rejected.

### Why Promises Matter
Promises help manage asynchronous operations (like API calls or file operations) without blocking code execution, allowing your application to remain responsive while waiting for results.

## Key Promise Concepts and Tasks

### 1. Creating a Basic Promise

**Simple explanation:** Creating a Promise gives you a container that will eventually hold a result.

```javascript
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // This is the simplest form of a Promise
    // It doesn't do anything yet, but it is a valid Promise
  });
}
```

**Why it matters:** This pattern forms the foundation for all asynchronous operations in modern JavaScript.

### 2. Resolving and Rejecting Promises

**Real-world analogy:** Like a package delivery - it can either arrive successfully (resolve) or fail to arrive (reject).

```javascript
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, fulfill the promise with data
      resolve({ status: 200, body: 'Success' });
    } else {
      // If success is false, reject the promise with an error
      reject(new Error('The fake API is not working currently'));
    }
  });
}
```

**Common mistake to avoid:** Forgetting to handle rejected promises with `.catch()` or try/catch with async/await.

### 3. Handling Promise Results with .then()

**Visual description:** Think of `.then()` as a conveyor belt that processes your package once it arrives.

```javascript
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // This runs when the Promise resolves successfully
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // This runs when the Promise is rejected
      console.log('Got a response from the API');
      return new Error();
    });
}
```

### 4. Working with Multiple Promises (Promise.all)

**Simple explanation:** Promise.all takes multiple promises and waits for all of them to complete before proceeding.

```javascript
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
```

**Real-world analogy:** Like waiting for all your friends to arrive at a party before starting the celebration.

### 5. Creating Resolved Promises

```javascript
export default function signUpUser(firstName, lastName) {
  // Create a promise that's immediately resolved with user data
  return Promise.resolve({
    firstName,
    lastName
  });
}
```

### 6. Creating Rejected Promises

```javascript
export default function uploadPhoto(filename) {
  // Create a promise that's immediately rejected with an error
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
```

### 7. Handling Settlement Status of Multiple Promises

**Why it matters:** In real applications, you often need to know the outcome of multiple operations, even if some fail.

```javascript
-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];
  
  // allSettled handles both resolved and rejected promises
  return Promise.allSettled(promises)
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    })));
}
```

### 8. Racing Promises (Promise.race)

**Visual description:** Imagine two runners in a race - only the first one to finish matters.

```javascript
export default function loadBalancer(chinaDownload, USDownload) {
  // Return whichever Promise resolves first
  return Promise.race([chinaDownload, USDownload]);
}
```

**Example usage:** Fetching data from multiple servers and using whichever responds first.

### 9. Error Handling with throw/try/catch

**Real-world analogy:** Like a safety net that catches falling performers at a circus.

```javascript
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  
  return numerator / denominator;
}
```

### 10. Creating a Guard Pattern

```javascript
export default function guardrail(mathFunction) {
  const queue = [];
  
  try {
    // Try to execute the function
    const result = mathFunction();
    // Add the result to our queue
    queue.push(result);
  } catch (error) {
    // If there's an error, add the error message instead
    queue.push(String(error));
  }
  
  // Always add this message to the queue
  queue.push('Guardrail was processed');
  
  return queue;
}
```

### 11. Using async/await

**Simple explanation:** async/await is syntactic sugar that makes Promises easier to read and write, making asynchronous code look synchronous.

```javascript
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // await pauses execution until each promise resolves
    const photo = await uploadPhoto();
    const user = await createUser();
    
    return {
      photo,
      user
    };
  } catch (error) {
    // If any promise rejects, return empty objects
    return {
      photo: null,
      user: null
    };
  }
}
```

**Real-world analogy:** Like a recipe where you need to wait for the cake to bake before you can frost it.

## Common Mistakes to Avoid

1. **Forgetting to return promises** in a chain, causing unexpected behavior
2. **Not handling rejections** using .catch() or try/catch
3. **Creating "Promise hell"** by nesting Promises instead of chaining
4. **Mixing Promise syntax with callbacks** when it's unnecessary
5. **Using await outside of an async function**

By understanding these concepts and practicing with the tasks above, you'll develop a solid foundation in JavaScript Promises that will help you write clean, efficient asynchronous code.

Similar code found with 1 license type