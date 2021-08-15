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

**Browsers APIs** are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. 