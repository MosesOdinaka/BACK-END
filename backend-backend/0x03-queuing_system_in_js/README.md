---
created: 2025-03-26T00:44:35 (UTC +01:00)
tags: []
source: https://intranet.alxswe.com/projects/1245
author: 
---

# Project: 0x03. Queuing System in JS | Lagos Intranet

> ## Excerpt
> Score: 100.0% (Checks completed: 100.0%)

---
[

](https://intranet.alxswe.com/)

-   [
    
    ](https://intranet.alxswe.com/)
-   [
    
    ](https://intranet.alxswe.com/planning/me)
-   [
    
    ](https://intranet.alxswe.com/projects/current)
-   [
    
    ](https://intranet.alxswe.com/corrections/to_review)
-   [
    
    ](https://intranet.alxswe.com/dashboards/my_current_evaluation_quizzes)

___

-   [
    
    ](https://intranet.alxswe.com/dashboards/my_curriculums)
-   [
    
    ](https://intranet.alxswe.com/concepts)
-   [
    
    ](https://intranet.alxswe.com/dashboards/video_rooms)
-   [
    
    ](https://intranet.alxswe.com/servers)
-   [
    
    ](https://intranet.alxswe.com/user_containers/current)
-   [
    
    ](https://intranet.alxswe.com/dashboards/my_tools)
-   [
    
    ](https://intranet.alxswe.com/dashboards/videos)

___

-   [
    
    ](https://intranet.alxswe.com/users/peers)
-   [
    
    ](https://discord.com/app)
-   [
    
    ](https://intranet.alxswe.com/users/my_profile)

Short Specializations Average: 93.94%

# 0x03. Queuing System in JS

Back-endJavaScriptES6RedisNodeJSExpressJSKue

-   Weight: 1
-   Project over - took place from May 6, 2024 6:00 AM to May 9, 2024 6:00 AM
-   Manual QA review was done on May 8, 2024 9:21 PM

#### In a nutshell…

-   **Manual QA review:** 46.0/46 mandatory & 8.0/8 optional
-   **Altogether:**  **200.0%**
    -   Mandatory: 100.0%
    -   Optional: 100.0%
    -   Calculation:  100.0% + (100.0% \* 100.0%)  == **200.0%**

**Overall comment:**

Good job lad

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/1486e02a78cdf7b4557c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20250325%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250325T233917Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a7f1101e04eca302b74ce8b2c6c4eabcef69a5fbda257e6d4711d22c205cccf7)

## Resources

**Read or watch**:

-   [Redis quick start](https://intranet.alxswe.com/rltoken/bD8ATSAVbine9-zEXenwyw "Redis quick start")
-   [Redis client interface](https://intranet.alxswe.com/rltoken/vFJSkoXkIvLqHzQgx8DVcw "Redis client interface")
-   [Redis client for Node JS](https://intranet.alxswe.com/rltoken/mRftfl67BrNvl-RM5JQfUA "Redis client for Node JS")
-   [Kue](https://intranet.alxswe.com/rltoken/yTC3Ci2IV2US24xJsBfMgQ "Kue") _deprecated but still use in the industry_

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/7yh7c3Zyy1RyUsdwlfsyDg "explain to anyone"), **without the help of Google**:

-   How to run a Redis server on your machine
-   How to run simple operations with the Redis client
-   How to use a Redis client with Node JS for basic operations
-   How to store hash values in Redis
-   How to deal with async operations with Redis
-   How to use Kue as a queue system
-   How to build a basic Express app interacting with a Redis server
-   How to the build a basic Express app interacting with a Redis server and queue

## Requirements

-   All of your code will be compiled/interpreted on Ubuntu 18.04, Node 12.x, and Redis 5.0.7
-   All of your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension

## Required Files for the Project

### `package.json`

Click to show/hide file contents

```

{
    "name": "queuing_system_in_js",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "lint": "./node_modules/.bin/eslint",
      "check-lint": "lint [0-9]*.js",
      "test": "./node_modules/.bin/mocha --require @babel/register --exit",
      "dev": "nodemon --exec babel-node --presets @babel/preset-env"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "chai-http": "^4.3.0",
      "express": "^4.17.1",
      "kue": "^0.11.6",
      "redis": "^2.8.0"
    },
    "devDependencies": {
      "@babel/cli": "^7.8.0",
      "@babel/core": "^7.8.0",
      "@babel/node": "^7.8.0",
      "@babel/preset-env": "^7.8.2",
      "@babel/register": "^7.8.0",
      "eslint": "^6.4.0",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-plugin-import": "^2.18.2",
      "eslint-plugin-jest": "^22.17.0",
      "nodemon": "^2.0.2",
      "chai": "^4.2.0",
      "mocha": "^6.2.2",
      "request": "^2.88.0",
      "sinon": "^7.5.0"
    }
  }
```

### `.babelrc`

Click to show/hide file contents

```
 
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

### and…

Don’t forget to run `$ npm install` when you have the `package.json`

## Tasks

### 0\. Install a redis instance

mandatory

Score: 100.0% (Checks completed: 100.0%)

Download, extract, and compile the latest stable Redis version (higher than 5.0.7 - [https://redis.io/downloads/](https://intranet.alxswe.com/rltoken/QDZIAT68ZH03R3pJY0ICOQ "https://redis.io/downloads/")):

```
$ wget http://download.redis.io/releases/redis-6.0.10.tar.gz
$ tar xzf redis-6.0.10.tar.gz
$ cd redis-6.0.10
$ make
```

-   Start Redis in the background with `src/redis-server`

```
$ src/redis-server &amp;
```

-   Make sure that the server is working with a ping `src/redis-cli ping`

```
PONG
```

-   Using the Redis client again, set the value `School` for the key `ALX`

```
127.0.0.1:[Port]&gt; set ALX School
OK
127.0.0.1:[Port]&gt; get ALX
"School"
```

-   Kill the server with the process id of the redis-server (hint: use `ps` and `grep`)

```
$ kill [PID_OF_Redis_Server]
```

Copy the `dump.rdb` from the `redis-5.0.7` directory into the root of the Queuing project.

Requirements:

-   Running `get ALX` in the client, should return `School`

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `README.md, dump.rdb`

Get a sandbox View results

### 1\. Node Redis Client

mandatory

Score: 100.0% (Checks completed: 100.0%)

Install [node\_redis](https://intranet.alxswe.com/rltoken/mRftfl67BrNvl-RM5JQfUA "node_redis") using npm

Using Babel and ES6, write a script named `0-redis_client.js`. It should connect to the Redis server running on your machine:

-   It should log to the console the message `Redis client connected to the server` when the connection to Redis works correctly
-   It should log to the console the message `Redis client not connected to the server: ERROR_MESSAGE` when the connection to Redis does not work

**Requirements:**

-   To import the library, you need to use the keyword `import`

```
bob@dylan:~$ ps ax | grep redis-server
 2070 pts/1    S+     0:00 grep --color=auto redis-server
bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-redis_client.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "0-redis_client.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 0-redis_client.js`
Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
Redis client not connected to the server: Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
^C
bob@dylan:~$ 
bob@dylan:~$ ./src/redis-server &gt; /dev/null 2&gt;&amp;1 &amp;
[1] 2073
bob@dylan:~$ ps ax | grep redis-server
 2073 pts/0    Sl     0:00 ./src/redis-server *:6379
 2078 pts/1    S+     0:00 grep --color=auto redis-server
bob@dylan:~$
bob@dylan:~$ npm run dev 0-redis_client.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "0-redis_client.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 0-redis_client.js`
Redis client connected to the server
^C
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `0-redis_client.js`

Get a sandbox View results

### 2\. Node Redis client and basic operations

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file `1-redis_op.js`, copy the code you previously wrote (`0-redis_client.js`).

Add two functions:

-   `setNewSchool`:
    -   It accepts two arguments `schoolName`, and `value`.
    -   It should set in Redis the value for the key `schoolName`
    -   It should display a confirmation message using `redis.print`
-   `displaySchoolValue`:
    -   It accepts one argument `schoolName`.
    -   It should log to the console the value for the key passed as argument

At the end of the file, call:

-   `displaySchoolValue('ALX');`
-   `setNewSchool('ALXSanFrancisco', '100');`
-   `displaySchoolValue('ALXSanFrancisco');`

**Requirements:**

-   Use callbacks for any of the operation, we will look at async operations later

```
bob@dylan:~$ npm run dev 1-redis_op.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "1-redis_op.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 1-redis_op.js`
Redis client connected to the server
School
Reply: OK
100
^C

bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `1-redis_op.js`

Get a sandbox View results

### 3\. Node Redis client and async operations

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file `2-redis_op_async.js`, let’s copy the code from the previous exercise (`1-redis_op.js`)

Using `promisify`, modify the function `displaySchoolValue` to use ES6 `async / await`

Same result as `1-redis_op.js`

```
bob@dylan:~$ npm run dev 2-redis_op_async.js

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "2-redis_op_async.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 2-redis_op_async.js`
Redis client connected to the server
School
Reply: OK
100
^C

bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `2-redis_op_async.js`

Get a sandbox View results

### 4\. Node Redis client and advanced operations

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `4-redis_advanced_op.js`, let’s use the client to store a hash value

#### Create Hash:

Using `hset`, let’s store the following:

-   The key of the hash should be `ALX`
-   It should have a value for:
    -   `Portland=50`
    -   `Seattle=80`
    -   `New York=20`
    -   `Bogota=20`
    -   `Cali=40`
    -   `Paris=2`
-   Make sure you use `redis.print` for each `hset`

#### Display Hash:

Using `hgetall`, display the object stored in Redis. It should return the following:

**Requirements:**

-   Use callbacks for any of the operation, we will look at async operations later

```
bob@dylan:~$ npm run dev 4-redis_advanced_op.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "4-redis_advanced_op.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 4-redis_advanced_op.js`
Redis client connected to the server
Reply: 1
Reply: 1
Reply: 1
Reply: 1
Reply: 1
Reply: 1
{
  Portland: '50',
  Seattle: '80',
  'New York': '20',
  Bogota: '20',
  Cali: '40',
  Paris: '2'
}
^C
bob@dylan:~$
```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `4-redis_advanced_op.js`

Get a sandbox View results

### 5\. Node Redis client publisher and subscriber

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `5-subscriber.js`, create a redis client:

-   On connect, it should log the message `Redis client connected to the server`
-   On error, it should log the message `Redis client not connected to the server: ERROR MESSAGE`
-   It should subscribe to the channel `ALXchannel`
-   When it receives message on the channel `ALX channel`, it should log the message to the console
-   When the message is `KILL_SERVER`, it should unsubscribe and quit

In a file named `5-publisher.js`, create a redis client:

-   On connect, it should log the message `Redis client connected to the server`
-   On error, it should log the message `Redis client not connected to the server: ERROR MESSAGE`
-   Write a function named `publishMessage`:
    -   It will take two arguments: `message` (string), and `time` (integer - in ms)
    -   After `time` millisecond:
        -   The function should log to the console `About to send MESSAGE`
        -   The function should publish to the channel `ALX channel`, the message passed in argument after the time passed in arguments
-   At the end of the file, call:

```
publishMessage("ALX Student #1 starts course", 100);
publishMessage("ALX Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("ALX Student #3 starts course", 400);
```

**Requirements:**

-   You only need one Redis server to execute the program
-   You will need to have two node processes to run each script at the same time

**Terminal 1:**

```
bob@dylan:~$ npm run dev 5-subscriber.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "5-subscriber.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 5-subscriber.js`
Redis client connected to the server
```

**Terminal 2:**

```
bob@dylan:~$ npm run dev 5-publisher.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "5-publisher.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 5-publisher.js`
Redis client connected to the server
About to send ALX Student #1 starts course
About to send ALX Student #2 starts course
About to send KILL_SERVER
About to send ALX Student #3 starts course
^C
bob@dylan:~$ 
```

**And in the same time in Terminal 1:**

```
Redis client connected to the server
ALX Student #1 starts course
ALX Student #2 starts course
KILL_SERVER
[nodemon] clean exit - waiting for changes before restart
^C
bob@dylan:~$ 
```

Now you have a basic Redis-based queuing system where you have a process to generate job and a second one to process it. These 2 processes can be in 2 different servers, which we also call “background workers”.

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `5-subscriber.js, 5-publisher.js`

Get a sandbox View results

### 6\. Create the Job creator

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `6-job_creator.js`:

-   Create a queue with `Kue`
-   Create an object containing the Job data with the following format:

```
{
  phoneNumber: string,
  message: string,
}
```

-   Create a queue named `push_notification_code`, and create a job with the object created before
-   When the job is created without error, log to the console `Notification job created: JOB ID`
-   When the job is completed, log to the console `Notification job completed`
-   When the job is failing, log to the console `Notification job failed`

```
bob@dylan:~$ npm run dev 6-job_creator.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "6-job_creator.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 6-job_creator.js`
Notification job created: 1

```

Nothing else will happen - to process the job, go to the next task!

If you execute multiple time this file, you will see the `JOB ID` increasing - it means you are storing new job to process…

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `6-job_creator.js`

Get a sandbox View results

### 7\. Create the Job processor

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `6-job_processor.js`:

-   Create a queue with `Kue`
-   Create a function named `sendNotification`:
    -   It will take two arguments `phoneNumber` and `message`
    -   It will log to the console `Sending notification to PHONE_NUMBER, with message: MESSAGE`
-   Write the queue process that will listen to new jobs on `push_notification_code`:
    -   Every new job should call the `sendNotification` function with the phone number and the message contained within the job data

**Requirements:**

-   You only need one Redis server to execute the program
-   You will need to have two node processes to run each script at the same time
-   You muse use `Kue` to set up the queue

**Terminal 2:**

```
bob@dylan:~$ npm run dev 6-job_processor.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "6-job_processor.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 6-job_processor.js`
Sending notification to 4153518780, with message: This is the code to verify your account

```

**Terminal 1:** let’s queue a new job!

```
bob@dylan:~$ npm run dev 6-job_creator.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "6-job_creator.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 6-job_creator.js`
Notification job created: 2

```

**And in the same time in Terminal 2:**

```
Sending notification to 4153518780, with message: This is the code to verify your account
```

BOOM! same as `5-subscriber.js` and `5-publisher.js` but with a module to manage jobs.

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `6-job_processor.js`

Get a sandbox View results

### 8\. Track progress and errors with Kue: Create the Job creator

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `7-job_creator.js`:

Create an array `jobs` with the following data inside:

```
const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];
```

After this array created:

-   Create a queue with `Kue`
-   Write a loop that will go through the array `jobs` and for each object:
    -   Create a new job to the queue `push_notification_code_2` with the current object
    -   If there is no error, log to the console `Notification job created: JOB_ID`
    -   On the job completion, log to the console `Notification job JOB_ID completed`
    -   On the job failure, log to the console `Notification job JOB_ID failed: ERROR`
    -   On the job progress, log to the console `Notification job JOB_ID PERCENTAGE% complete`

**Terminal 1**:

```
bob@dylan:~$ npm run dev 7-job_creator.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "7-job_creator.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 7-job_creator.js`
Notification job created: 39
Notification job created: 40
Notification job created: 41
Notification job created: 42
Notification job created: 43
Notification job created: 44
Notification job created: 45
Notification job created: 46
Notification job created: 47
Notification job created: 48
Notification job created: 49

```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `7-job_creator.js`

Get a sandbox View results

### 9\. Track progress and errors with Kue: Create the Job processor

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `7-job_processor.js`:

Create an array that will contain the blacklisted phone numbers. Add in it `4153518780` and `4153518781` - these 2 numbers will be blacklisted by our jobs processor.

Create a function `sendNotification` that takes 4 arguments: `phoneNumber`, `message`, `job`, and `done`:

-   When the function is called, track the progress of the `job` of `0` out of `100`
-   If `phoneNumber` is included in the “blacklisted array”, fail the job with an `Error` object and the message: `Phone number PHONE_NUMBER is blacklisted`
-   Otherwise:
    -   Track the progress to 50%
    -   Log to the console `Sending notification to PHONE_NUMBER, with message: MESSAGE`

Create a queue with `Kue` that will proceed job of the queue `push_notification_code_2` with two jobs at a time.

**Requirements:**

-   You only need one Redis server to execute the program
-   You will need to have two node processes to run each script at the same time
-   You muse use `Kue` to set up the queue
-   Executing the jobs list should log to the console the following:

**Terminal 2:**

```
bob@dylan:~$ npm run dev 7-job_processor.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "7-job_processor.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 7-job_processor.js`
Sending notification to 4153518743, with message: This is the code 4321 to verify your account
Sending notification to 4153538781, with message: This is the code 4562 to verify your account
Sending notification to 4153118782, with message: This is the code 4321 to verify your account
Sending notification to 4153718781, with message: This is the code 4562 to verify your account
Sending notification to 4159518782, with message: This is the code 4321 to verify your account
Sending notification to 4158718781, with message: This is the code 4562 to verify your account
Sending notification to 4153818782, with message: This is the code 4321 to verify your account
Sending notification to 4154318781, with message: This is the code 4562 to verify your account
Sending notification to 4151218782, with message: This is the code 4321 to verify your account

```

**And in the same time in terminal 1:**

```
...
Notification job #39 0% complete
Notification job #40 0% complete
Notification job #39 failed: Phone number 4153518780 is blacklisted
Notification job #40 failed: Phone number 4153518781 is blacklisted
Notification job #41 0% complete
Notification job #41 50% complete
Notification job #42 0% complete
Notification job #42 50% complete
Notification job #41 completed
Notification job #42 completed
Notification job #43 0% complete
Notification job #43 50% complete
Notification job #44 0% complete
Notification job #44 50% complete
Notification job #43 completed
Notification job #44 completed
Notification job #45 0% complete
Notification job #45 50% complete
Notification job #46 0% complete
Notification job #46 50% complete
Notification job #45 completed
Notification job #46 completed
Notification job #47 0% complete
Notification job #47 50% complete
Notification job #48 0% complete
Notification job #48 50% complete
Notification job #47 completed
Notification job #48 completed
Notification job #49 0% complete
Notification job #49 50% complete
Notification job #49 completed
```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `7-job_processor.js`

Get a sandbox View results

### 10\. Writing the job creation function

mandatory

Score: 100.0% (Checks completed: 100.0%)

In a file named `8-job.js`, create a function named `createPushNotificationsJobs`:

-   It takes into argument `jobs` (array of objects), and `queue` (`Kue` queue)
-   If `jobs` is not an array, it should throw an `Error` with message: `Jobs is not an array`
-   For each job in `jobs`, create a job in the queue `push_notification_code_3`
-   When a job is created, it should log to the console `Notification job created: JOB_ID`
-   When a job is complete, it should log to the console `Notification job JOB_ID completed`
-   When a job is failed, it should log to the console `Notification job JOB_ID failed: ERROR`
-   When a job is making progress, it should log to the console `Notification job JOB_ID PERCENT% complete`

```
bob@dylan:~$ cat 8-job-main.js 
import kue from 'kue';

import createPushNotificationsJobs from './8-job.js';

const queue = kue.createQueue();

const list = [
    {
        phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
    }
];
createPushNotificationsJobs(list, queue);

bob@dylan:~$
bob@dylan:~$ npm run dev 8-job-main.js 

&gt; queuing_system_in_js@1.0.0 dev /root
&gt; nodemon --exec babel-node --presets @babel/preset-env "8-job-main.js"

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node --presets @babel/preset-env 8-job-main.js`
Notification job created: 51

```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `8-job.js`

Get a sandbox View results

### 11\. Writing the test for job creation

mandatory

Score: 100.0% (Checks completed: 100.0%)

Now that you created a job creator, let’s add tests:

-   Import the function `createPushNotificationsJobs`
-   Create a queue with `Kue`
-   Write a test suite for the `createPushNotificationsJobs` function:
    -   Use `queue.testMode` to validate which jobs are inside the queue
    -   etc.

**Requirements:**

-   Make sure to enter the test mode without processing the jobs before executing the tests
-   Make sure to clear the queue and exit the test mode after executing the tests

```
bob@dylan:~$ npm test 8-job.test.js 

&gt; queuing_system_in_js@1.0.0 test /root
&gt; mocha --require @babel/register --exit "8-job.test.js"



  createPushNotificationsJobs
    ✓ display a error message if jobs is not an array
Notification job created: 1
Notification job created: 2
    ✓ create two new jobs to the queue
...

  123 passing (417ms)

```

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `8-job.test.js`

View results

### 12\. In stock?

mandatory

Score: 100.0% (Checks completed: 100.0%)

#### Data

Create an array `listProducts` containing the list of the following products:

-   Id: 1, name: `Suitcase 250`, price: 50, stock: 4
-   Id: 2, name: `Suitcase 450`, price: 100, stock: 10
-   Id: 3, name: `Suitcase 650`, price: 350, stock: 2
-   Id: 4, name: `Suitcase 1050`, price: 550, stock: 5

#### Data access

Create a function named `getItemById`:

-   It will take `id` as argument
-   It will return the item from `listProducts` with the same id

#### Server

Create an `express` server listening on the port 1245. (You will start it via: `npm run dev 9-stock.js`)

#### Products

Create the route `GET /list_products` that will return the list of every available product with the following JSON format:

```
bob@dylan:~$ curl localhost:1245/list_products ; echo ""
[{"itemId":1,"itemName":"Suitcase 250","price":50,"initialAvailableQuantity":4},{"itemId":2,"itemName":"Suitcase 450","price":100,"initialAvailableQuantity":10},{"itemId":3,"itemName":"Suitcase 650","price":350,"initialAvailableQuantity":2},{"itemId":4,"itemName":"Suitcase 1050","price":550,"initialAvailableQuantity":5}]
bob@dylan:~$ 
```

#### In stock in Redis

Create a client to connect to the Redis server:

-   Write a function `reserveStockById` that will take `itemId` and `stock` as arguments:
    -   It will set in Redis the stock for the key `item.ITEM_ID`
-   Write an async function `getCurrentReservedStockById`, that will take `itemId` as an argument:
    -   It will return the reserved stock for a specific item

#### Product detail

Create the route `GET /list_products/:itemId`, that will return the current product and the current available stock (by using `getCurrentReservedStockById`) with the following JSON format:

```
bob@dylan:~$ curl localhost:1245/list_products/1 ; echo ""
{"itemId":1,"itemName":"Suitcase 250","price":50,"initialAvailableQuantity":4,"currentQuantity":4}
bob@dylan:~$ 
```

If the item does not exist, it should return:

```
bob@dylan:~$ curl localhost:1245/list_products/12 ; echo ""
{"status":"Product not found"}
bob@dylan:~$ 
```

#### Reserve a product

Create the route `GET /reserve_product/:itemId`:

-   If the item does not exist, it should return:

```
bob@dylan:~$ curl localhost:1245/reserve_product/12 ; echo ""
{"status":"Product not found"}
bob@dylan:~$ 
```

-   If the item exists, it should check that there is at least one stock available. If not it should return:

```
bob@dylan:~$ curl localhost:1245/reserve_product/1 ; echo ""
{"status":"Not enough stock available","itemId":1}
bob@dylan:~$ 
```

-   If there is enough stock available, it should reserve one item (by using `reserveStockById`), and return:

```
bob@dylan:~$ curl localhost:1245/reserve_product/1 ; echo ""
{"status":"Reservation confirmed","itemId":1}
bob@dylan:~$ 
```

**Requirements:**

-   Make sure to use `promisify` with Redis
-   Make sure to use the `await`/`async` keyword to get the value from Redis
-   Make sure the format returned by the web application is always JSON and not text

**Repo:**

-   GitHub repository: `alx-backend`
-   Directory: `0x03-queuing_system_in_js`
-   File: `9-stock.js`

View results

Ready for a new review

Copyright © 2025 ALX, All rights reserved.
