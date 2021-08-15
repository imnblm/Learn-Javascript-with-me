# JAVASCRIPT DOCUMENTATION 
> This folder contains all the documentation needed to understand and learn the basics of JavaScript as long as more advanced concepts. I'll document this section along my learning journey. 

## Introduction 

> **JavaScript** is a lightweight, interpreted (Just-in-time) compiled programming language with first-class-function. It's a scripting language for Web Pages but also used by many non-browser environment (Node.js, Apache CouchDB and Adobe Acrobat). JS is a prototype-based, multi-paradigm, single-threader, dynamic language, supporting object-oriented, imperative, and declarative styles. 
### What is JavaScript ?
JavaScript runs on the client side of the web, which can be used to design/program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behavior. 

Contrary to popular misconception, **JavaScript is not "Interpreted Java"**. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as `if`statements, `for` and `while` loops, and `switch` and `try ... catch` blocks function the same as in these languages (or nearly so). 

JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty object **at run time**, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. 

JavaScript's dynamic capabilities include runtime object construction, variable parameters lists, function variables, dynamic script creation (via eval), object introspection (via `for ... in`), and source code recovery (JavaScript programs can decompile function bodies back into their source text). 

### What JavaScript implementations are available ? 
The Mozilla project provides two JavaScript implementations. The first **ever** JavaScript was created by Brendan Eich at Netscape, and has since been updated to conform to ECMA-262 Edition 5 and later versions. This engine, code named SpiderMonkey, is implemented in C/C++. The Rhino engine, created primarily by Norris Boyd (also at Netscape) is a JavaScript implementation written in Java. Like SpiderMonkey, Rhino is ECMA-262 Edition 5 compliant. 

Several major runtime optimizations such as TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) and lonMonkey were added to the SpiderMonkey JavaScript engine over time. Work is always ongoing to improve JavaScript execution performance. 

Besides the above implementations, there are other popular JavaScript engines such as :
* Google V8, which is used in the Google Chrome browser and recent versions of Opera browser. This is also the engine used by Node.js.
* The JavaScriptCore (SquirrelFish/Nitro) used in some WebKit browser such as Apple Safari. 
* Carakan in old versions of Opera.
* The Chakra engine used in Internet Explorer (although the language it implements is formally called "JScript" in order to avoid trademark issues). 

Each of Mozilla's JavaScript engines expose a public APU which application developers can use to integrate JavaScript into their software. By far, the most common host environment for JavaScript is web browsers. Web browsers typically use the public API to create **host objects** responsible for reflecting the DOM into JavaScript. 

Another common application for JavaScript is as a (Web) server side scripting language. A JavaScript web server would expose host object representing a HTTP request and response objects, which could then be manipulate by JavaScript program to dynamically generate web pages. Node.js is a popular example of this. 

## Table of contents 
1. [JavaScript first steps]()
2. [JavaScript buidlding blocks]()
3. [Introducing JavaScript Objects]()
4. [Asynchronous JavaScript]()
5. [Client-side web APIs]()

## Resources
* [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [w3schools | JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
* [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)


