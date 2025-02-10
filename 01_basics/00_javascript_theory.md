## JavaScript Basics Theory

- JavaScript is a clint side scripting language.

- JavaScript is a object-oriented programming language for web applications.

- It is used to make web page alive.

- It is a dynamic typing language.

- It can execute not only in the browser but also on the server.

- JavaScript was inverted by 'Brendan Eich' in 1995.

- It has evolved significantly as a language and is now used to perform a wide variety of tasks.

- JavaScript handle both **synchronous and asynchronous<** operations.

- V8 engine is a JavaScript engine.

- NodeJs makes in c++ language by 'Ryan Dahl'.

### How to execute JavaScript?

Method-1. 

    JavaScript can be executed directly inside the browser console

Method-2. 

    Another way to execute JavaScript is by using a runtime like Nodejs, which can be installed and used to run JavaScript code.

Method-3.

    Another way to run JavaScript is by embedding it within the <script> tag in an HTML document or by writing it in a separate .js file and linking it to the HTML file. (internal or external linking)

Method-4. 

    Using github codespaces

### Flow of Execution of JavaScript

- JavaScript seperate file or inline script

- Accepted by the browser

    When a web page loads, the browser detects JavaScript code and processes it.

- Interpretation & Execution

    The browser’s JavaScript engine (V8 in chrome, SpiderMonkey in firefox) parses and executes the code line by line (interpreted execution).

- Execution Context & Call Stack

    The code runs inside an execution context, managed by the JavaScript call stack. 
    <br>
    If functions are present, they are added to the call stack and executed in order.

- Asynchronous Operations

    If there are asynchronous operations (example- API calls, setTimeout, event listeners), they are handled by the Event Loop and Web APIs before execution continues.

- ✔ Final Output

The JavaScript code manipulates the DOM, handles user interactions, or performs calculations as intended.

    📁 JS File ----> Accepted by Browser ----> Executed by Browser

### What makes JavaScript unique?

- HTML/CSS support

- Simple things (simple API [Application Programming Interface])

- **Major modern browser support**

### What is ECMAScript ?

- ECMAScript is a standared on which JavaScript is passed. 

- It was created to ensure that different documents on JavaScript are actually talking about the same language.

- JavaScript and ECMAScript can almost always be used interchangeably.

- ECMA-262 is the official name of the standard and ECMAScript is the official name of the language.

### JavaScript versions
- ES1 - 1997 [ECMAScript 1st version]
- ES2 - 1998 [ECMAScript 2nd version]
- ES3 - 1999 [ECMAScript 3rd version]
- ES5 - 2009 
- ES6 - 2015 [ECMAScript](https://tc39.es/ecma262/)
- Yearly version - 2016, 2017, 2018, 2019, 2020

### What is Syntax?
Some set of rules follow during writing a JavaScript program called syntax.  

### What is Comments?
Sometimes we want our program to contains a text which is not executed by the Js engine, such a text is called comment. 
<br> 
Sometimes comments are used to prevent the execution of some lines of code.

    // This is single line comment

    /* This is multiple line comment */

### What is Synchronous programming?

Operations are performed one after the other, in sequence. So, basically each line of code waits for the previous one to finish before proceeding to the next. 
<br>
Example:- 

```javascript
    console.log("Hi");
    console.log("Geek");
    console.log("How are you?");
```
    

### What is Asynchronous programming?
Allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. This non-blocking nature helps improve performance and responsiveness, especially in web applications.
<br>
Example:- 

```javascript
    console.log("Hi");

    setTimeout(() => {
        console.log("Geek");
    }, 2000);

    console.log("End");
```