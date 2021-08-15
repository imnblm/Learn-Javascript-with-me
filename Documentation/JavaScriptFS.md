## Starting with JavaScript

<details>
<summary>Table of content</summary>
<br>

1. What is JavaScript ?
2. A first splash into JavaScript
3. What went wrong ? Troubleshooting JavaScript
4. Storing the information you need - Variables
5. Basic math in JavaScript - numbers and operators 
6. Handling text - strings in JavaScript
7. Useful string methods
8. Arrays
</details>

### What is JavaScript ?
#### A high-level definition
JavaScript is a scripting or programming language that allows you to implement complex features on web pages - every time a web page does more than just sit there and display information for you to look at - displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. - You can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies (HTML and CSS). 
#### So what can it really do ? 
The core client-side JavaScript language consists of some common programming features that allow you to do things like: 
* Store useful values inside variables. In the above example for instance, we ask for a new name to be entered then store that name in a variable called `name`. 
* Operations on pieces of text (known as "strings" in programming). In the above example we take the string "Player 1" and join it to the `name` variable to create the complete text label, e.g. "Player 1: Chris".
* Running code in response to certain events occurring on a web page. We used a `click` event in our example above to detect when the button is clicked and then run the code that updates the text label. 
* And much more !
What is more exciting however is the functionality built on top of the client-side JavaScript language. So-called **Application Programming Interfaces (APIs)** provide you with extra superpowers to use in your JavaScript code. 

APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. They do the same thing for programming that ready-made furniture kits do for home building (it's much easier to take ready-cut panels and screw them together to make a bookshelf than it is to work out the design yourself, go and find the correct wood, cut all the panels the right size and shape, find the correct-sized screws, and then put them together to make a bookshelf.)

They generally fall into two categories :
1. Third party APIs 
2. Browsers APIs

**Browsers APIs** are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. For example :
* The *DOM API* allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed for example, that's the DOM in action. 
* The Geolocation API retrieves geographical information. This is how Google Maps is able to find your location and plot on a map.
* The Canvas and WebGL APIs allow you to create animated 2D and 3D graphics. People are doing some amazing things using these web technologies.
* Audio and Video APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab a video from your web camera and display it on someone else's computer). 

**Third party APIs** are not built into the browser by default, and you generally have to grab their code and information from somewhere on the web. For example:
* The twitter API allows you to do things like displaying your latest tweets on your website. 
* The Google Maps API and OpenStreetMap API allow you to embed custom maps into your website, and other such functionality. 
There's a lot more available, too! However, don't get over excited just yet. You won't be able to build the next Facebook, Google Maps or Instagram after studying JavaScript for 24 hours. 

#### What is JavaScript doing on your page ? 
When you load a web page in your browser, you are running your code (the HTML, CSS and JavaScript) inside an execution environment (the browser tab). This is like a factory that takes in raw materials (the code) and outputs a product (the web page). 
A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API. Note that the code in your web documents is generally loaded and executed in the order it appears on the page. Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is intended to modify. You will learn ways around later in the article. 
##### Browser security 
Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms). This means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab (or another website). This is good security measure (if this were not the case, then pirates could start writing code to steal information from other websites). 
##### JavaScript running order 
When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in. 
##### Interpreted versus compiled code
You might hear the terms **interpreted** and **compiled** in the context of programming. In interpreted languages, the code is run from top to bottom and the result  of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it. The code is received in its programmer-friendly text form and processed directly from that. 

Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. For example, C/C++ are compiled into machine code that is run by the computer. The program is executed from a binary format, which is generated from the original program source code. 

JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code in its original text form and runs the script from that. From a technical standpoint, most modern JavaScript interpreters actually use a technique called **just-in-time compiling** to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being interpreted language, since the compilation handle at run time, rather than ahead time. 

There are advantages to both types of language, but we won't discuss them right now. 

##### Server-side versus client-side code
The word **dynamic** is used to describe both client-side JavaScript, and server-side languages (it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required). Server-side code dynamically generates new content on the server, e.g. pulling data from a database, whereas client-side JavaScript dynamically generates new content inside the browser on the client, e.g. creating a new HTML table, filling it with data requested from the server, then displaying the table in a web page shown to the user. The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together. 

A web page with no dynamically updating content is referred to as **static** it just shows the same content all the time. 

##### How do you add JavaScript to your page ? 
JavaScript is applied to your HTML page in a similar manner to CSS. Whereas CSS uses `<link>` elements to apply external stylesheets and `<style>` element to apply internal stylesheets to HTML, JavaScript only need one friend in the world of HTML, the `<script></script>` element. 
