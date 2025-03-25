---
created: 2025-03-26T00:09:12 (UTC +01:00)
tags: []
source: https://intranet.alxswe.com/projects/1226
author: 
---

# Project: 0x02. ES6 classes | Lagos Intranet

> ## Excerpt
> Score: 75.0% (Checks completed: 75.0%)

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

# 0x02. ES6 classes

OOPJavaScriptES6

-   Weight: 1
-   Project over - took place from Mar 7, 2024 6:00 AM to Mar 8, 2024 6:00 AM
-   An auto review will be launched at the deadline

#### In a nutshell…

-   **Auto QA review:** 25.0/33 mandatory & 3.0/3 optional
-   **Altogether:**  **151.52%**
    -   Mandatory: 75.76%
    -   Optional: 100.0%
    -   Calculation:  75.76% + (75.76% \* 100.0%)  == **151.52%**

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20250325%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250325T230516Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2c79805ee625379252dddeeb3bfdacdc84eae1993968dcf88f6962dba65e8f0c)

## Resources

**Read or watch**:

-   [Classes](https://intranet.alxswe.com/rltoken/ke2dSL31JbpAUBW0qWE9WA "Classes")
-   [Metaprogramming](https://intranet.alxswe.com/rltoken/6OgF5QGbYclp_cwATfq-0g "Metaprogramming")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/HZvBl09eHoGwvN8jqlYO-g "explain to anyone"), **without the help of Google**:

-   How to define a Class
-   How to add methods to a class
-   Why and how to add a static method to a class
-   How to extend a class from another
-   Metaprogramming and symbols

## Requirements

-   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
-   All your files should end with a new line
-   A `README.md` file, at the root of the folder of the project, is mandatory
-   Your code should use the `js` extension
-   Your code will be tested using `Jest` and the command `npm run test`
-   Your code will be verified against lint using ESLint
-   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration files

Add the files below to your project directory

### `package.json`

Click to show/hide file contents

```

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
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
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

### 0\. You used to attend a place like this at some point

mandatory

Score: 50.0% (Checks completed: 50.0%)

Implement a class named `ClassRoom`:

-   Prototype: `export default class ClassRoom`
-   It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

```
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `0-classroom.js`

Check submission Mark submission Get a sandbox View results

### 1\. Let's make some classrooms

mandatory

Score: 100.0% (Checks completed: 100.0%)

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

```
bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `1-make_classrooms.js`

Check submission Get a sandbox View results

### 2\. A Course, Getters, and Setters

mandatory

Score: 80.0% (Checks completed: 80.0%)

Implement a class named `ALXCourse`:

-   Constructor attributes:
    -   `name` (String)
    -   `length` (Number)
    -   `students` (array of Strings)
-   Make sure to verify the type of attributes during object creation
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.

```
bob@dylan:~$ cat 2-main.js
import ALXCourse from "./2-hbtn_course.js";

const c1 = new ALXCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new ALXCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
ALXCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `2-hbtn_course.js`

Check submission Mark submission Get a sandbox View results

### 3\. Methods, static methods, computed methods names..... MONEY

mandatory

Score: 66.67% (Checks completed: 66.67%)

Implement a class named `Currency`:

-   \- Constructor attributes:
    -   `code` (String)
    -   `name` (String)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

```
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `3-currency.js`

Check submission Mark submission Get a sandbox View results

### 4\. Pricing

mandatory

Score: 100.0% (Checks completed: 100.0%)

Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

-   Constructor attributes:
    -   `amount` (Number)
    -   `currency` (Currency)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   Implement a getter and setter for each attribute.
-   Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
-   Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

```
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `4-pricing.js`

Check submission Get a sandbox View results

### 5\. A Building

mandatory

Score: 66.67% (Checks completed: 66.67%)

Implement a class named `Building`:

-   Constructor attributes:
    -   `sqft` (Number)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   Implement a getter for each attribute.
-   Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
    -   If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

```
bob@dylan:~$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `5-building.js`

Check submission Mark submission Get a sandbox View results

### 6\. Inheritance

mandatory

Score: 100.0% (Checks completed: 100.0%)

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

-   Constructor attributes:
    -   `sqft` (Number) (must be assigned to the parent class `Building`)
    -   `floors` (Number)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   Implement a getter for each attribute.
-   Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

```
bob@dylan:~$ cat 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `6-sky_high.js`

Check submission Get a sandbox View results

### 7\. Airport

mandatory

Score: 50.0% (Checks completed: 50.0%)

Implement a class named `Airport`:

-   Constructor attributes:
    -   `name` (String)
    -   `code` (String)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   The default string description of the class should return the airport `code` (example below).

```
bob@dylan:~$ cat 7-main.js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `7-airport.js`

Check submission Mark submission Get a sandbox View results

### 8\. Primitive - ÅLX Class

mandatory

Score: 66.67% (Checks completed: 66.67%)

Implement a class named `ALXClass`:

-   Constructor attributes:
    -   `size` (Number)
    -   `location` (String)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   When the class is cast into a `Number`, it should return the size.
-   When the class is cast into a `String`, it should return the location.

```
bob@dylan:~$ cat 8-main.js
import ALXClass from "./8-hbtn_class.js";

const hc = new ALXClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
12
Mezzanine
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `8-hbtn_class.js`

Check submission Mark submission Get a sandbox View results

### 9\. Hoisting

mandatory

Score: 75.0% (Checks completed: 75.0%)

Fix this code and make it work.

```
const class2019 = new ALXClass(2019, 'San Francisco');
const class2020 = new ALXClass(2020, 'San Francisco');

export class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

export class StudentALX {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() {
    return this.alxClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._alxClass.year} - ${self._alxClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
```

Result:

```
bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student =&gt; student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentALX {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'John',
    _lastName: 'Doe',
    _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentALX {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `9-hoisting.js`

Check submission Mark submission Get a sandbox View results

### 10\. Vroom

mandatory

Score: 66.67% (Checks completed: 66.67%)

Implement a class named `Car`:

-   Constructor attributes:
    -   `brand` (String)
    -   `motor` (String)
    -   `color` (String)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   Add a method named `cloneCar`. This method should return a new object of the class.

Hint: Symbols in ES6

```
bob@dylan:~$ cat 10-main.js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `10-car.js`

Check submission Mark submission Get a sandbox View results

### 11\. EVCar

#advanced

Score: 100.0% (Checks completed: 100.0%)

Import `Car` from `10-car.js`.

Implement a class named `EVCar` that extends the `Car` class:

-   Constructor attributes:
    -   `brand` (String)
    -   `motor` (String)
    -   `color` (String)
    -   `range` (String)
-   Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
-   For privacy reasons, when `cloneCar` is called on a EVCar object, the object returned should be an instance of `Car` instead of `EVCar`.

```
bob@dylan:~$ cat 100-main.js
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
bob@dylan:~$ 
```

**Repo:**

-   GitHub repository: `alx-backend-javascript`
-   Directory: `0x02-ES6_classes`
-   File: `100-evcar.js`

Check submission Get a sandbox View results

Copyright © 2025 ALX, All rights reserved.

window.codySettings = { widget\_id: "9993bc72-2258-452b-a4bf-b2fe1ad5e0d7" }; !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")\[0\];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();

#cody-wrapper .cody-launcher { position: var(--position) !important; left: var(--left) !important; right: var(--right) !important; bottom: var(--launcher-bottom) !important; border-radius: 9999px !important; border: 0 !important; padding: 0 !important; box-sizing: border-box !important; z-index: 999999 !important; overflow: hidden !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: box-shadow, scale 300ms linear !important; animation: cody-launcher-pulse 4s infinite !important; background-color: var(--background-color) !important; color: var(--text-color) !important; cursor: pointer !important; --icon-margin: 12px; --close-icon-margin: 16px; } #cody-wrapper { --position: fixed; --left: unset; --right: 20px; --launcher-bottom: 20px; --frame-bottom: 90px; --background-color: #FBD647; --text-color: #020617; --shadow-color: 251, 214, 71; } @media screen and (max-width: 512px) { #cody-wrapper { --left: unset; --right: 10px; } } #cody-wrapper .cody-launcher:hover { scale: 1.1 !important; } #cody-wrapper .cody-launcher .cody-close-icon { display: none !important; } #cody-wrapper\[data-launcher-open\] .cody-launcher .cody-icon { display: none !important;; } #cody-wrapper\[data-launcher-open\] .cody-launcher .cody-close-icon { display: block !important;; } #cody-wrapper .cody-iframe { z-index: 99999 !important; transition: visibility .5s, opacity .5s linear !important; background-color: #fff !important; position: fixed !important; left: var(--left) !important; right: var(--right) !important; bottom: var(--frame-bottom) !important; height: 75vh !important; width: 448px !important; border-radius: 10px !important; overflow: hidden !important; box-shadow: 0 2px 4px rgba(0, 18, 26, .08), 0 3px 12px rgba(0, 18, 26, .16), 0 2px 14px 0 rgba(0, 18, 26, .2) !important; border: 0 !important; display: none !important; } @media screen and (max-height: 667px) { #cody-wrapper .cody-iframe { height: calc(100vh - 110px) !important; } } @media screen and (max-width: 448px) { #cody-wrapper .cody-iframe { width: calc(100vw - 20px) !important; } } #cody-wrapper\[data-launcher-open\] .cody-iframe { display: block !important; } @keyframes cody-launcher-pulse { 0%, 100% { box-shadow: 0 0 18px 4px rgba(var(--shadow-color), 0.8); } 50% { box-shadow: 0 0 12px 3px rgba(var(--shadow-color), 0.4); } }
