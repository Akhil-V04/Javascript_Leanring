//Import and Require
//Both import and require are used to include code from other files (modules) into your current file.
//They work differently and are used in different environments.

//========== REQUIRE (CommonJS - Node.js) ==========
//Used mainly in Node.js
//Syntax: const variableName = require('./path/to/file');
//It is synchronous (waits for the module to load before continuing)
//You can require a module multiple times

//Example 1: Require a built-in module
const fs = require('fs'); //fs is a built-in Node.js module for file system operations
console.log(typeof fs); //object

//Example 2: Create a simple module file (saved as math.js)
// ---- math.js ----
// function add(a, b) {
//   return a + b;
// }
// module.exports = add;

//Then require it in another file:
// const add = require('./math.js');
// console.log(add(5, 3)); //8

//========== IMPORT (ES6 Modules) ==========
//Used in modern JavaScript (browsers and newer Node.js versions)
//Syntax: import variableName from './path/to/file';
//It is asynchronous (better for performance)
//You can only import a module once (it's cached)

//Example 3: Import a named export
// ---- math.js (ES6 version) ----
// export function add(a, b) {
//   return a + b;
// }
// export function subtract(a, b) {
//   return a - b;
// }

//Then import it in another file:
// import { add, subtract } from './math.js';
// console.log(add(5, 3)); //8
// console.log(subtract(5, 3)); //2

//========== KEY DIFFERENCES ==========
// 1. Syntax:
//    require():  const module = require('./file');
//    import:     import module from './file';

// 2. Type:
//    require():  CommonJS (older Node.js standard)
//    import:     ES6 Modules (modern JavaScript standard)

// 3. Loading:
//    require():  Synchronous (blocks execution)
//    import:     Asynchronous (doesn't block execution)

// 4. Usage:
//    require():  Works in Node.js by default
//    import:     Works in browsers and modern Node.js (with .mjs extension or "type": "module" in package.json)

// 5. Export:
//    require():  Uses module.exports = value;
//    import:     Uses export keyword

//========== WHEN TO USE WHICH ==========
// Use require() if:
// - You're working with older Node.js projects
// - You need backward compatibility
// - You're building a Node.js application

// Use import if:
// - You're building modern JavaScript applications
// - You're working with frontend frameworks (React, Vue, Angular)
// - You want to follow the modern ES6+ standard
