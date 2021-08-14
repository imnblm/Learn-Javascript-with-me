# To-do List 
## Introduction
## General knowledge 
#### 1. The HTML DOM Document Object : 
> The HTML DOM document object is the owner of all other objects in your web page.
<details>
<summary>Learn more about the DOM</summary>
<br>

The **Document Object Model** *(DOM)* is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. 

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the DOM representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript. 
<details>
<summary>DOM and JavaScript</summary>
<br>
The DOM is not part of Js, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. 
</details>
<details>
<summary>Finding HTML Elements</summary>
<br>

| Method  | Description |
| ------------- | ------------- |
| document.getElementById(*id*) | Find an element by element id |
| document.getElementsByTagName(*name*) | Find elements by tag name |
| document.getElementsByClassName(*name*)	| Find elements by class name | 

</details>
<details>
<summary>Changing HTML Elements</summary>
<br>

| Property  | Description |
| ------------- | ------------- |
| *element*.innerHTML =  *new html content* | Change the inner HTML of an element |
| *element*.attribute = *new value* | Change the attribute value of an HTML element |
| *element*.style.*property* = *new style*	| Change the style of an HTML element |
| Method  | Description |
| ------------- | ------------- |
| *element*.setAttribute(*attribute,value*) | Change the attribute value of an HTML element |

</details>
<details>
<summary>Adding and Deleting Elements</summary>
<br>
 
| Method  | Description |
| ------------- | ------------- |
| document.createElement(*element*) | Create an HTML element |
| document.removeChild(*element*) | Remove an HTML element |
| document.appendChild(*element*)	| Add an HTML element |
| document.replaceChild(*new, old*) | Replace an HTML element |
| document.write(*text*) | Write into the HTML output stream |

</details>

</details>

## Resources 
## Special thanks 