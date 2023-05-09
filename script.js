let id1 = document.getElementById("id1")
// const id1 = document.querySelector('#id1');
console.log(id1)
console.log(id1.matches(".class")) // false
/* 
if the id1 element has the class "class", the console.log() statement will return true. Otherwise, it will return false */
console.log(id1.matches(".box")) // true
console.log(document.getElementById("id1").matches(".box")) // true
console.log("----------end----------")
/*  
if the id1 element has the class "box", the console.log() statement will return true. Otherwise, it will return false. */

/* <div id="id1" class="box class"></div>
  element has id of "id1" and two classes, "box" and "class" */
let sp1 = document.getElementById("sp1")
// const sp1 = document.querySelector('#sp1');
console.log(sp1.closest("#sp1"))
console.log(document.getElementById("sp1").closest("#sp1"))
/* 
The console.log(sp1.closest("#sp1")) statement searches for the closest ancestor of the sp1 element that matches the CSS selector #sp1, and logs the resulting element to the console. 
The #sp1 selector in this case represents an HTML element with an ID of "sp1".
Here, the sp1 element is a span element with an ID of "sp1", and it has an ancestor div element with an ID of "id1". Since the #sp1 selector matches the sp1 element's ID, the console.log() statement will return the sp1 element itself.*/
console.log("----------end----------")

console.log(id1.contains(sp1)) // true
/* 
The console.log(id1.contains(sp1)) statement checks if the id1 element contains the sp1 element, and logs the resulting boolean value to the console.
If sp1 is a descendant of id1, the method returns true, otherwise, it returns false. */
  
console.log(sp1.contains(sp1)) // true
console.log(sp1.contains(id1)) // false

/* 
querySelector() is a method in JavaScript that allows you to select an HTML element from the DOM (Document Object Model) using a CSS selector. It is a part of the Document interface and can be used to retrieve the first element that matches the specified CSS selector.

Selecting elements by tag name:
// Select all <p> elements
const paragraphs = document.querySelectorAll('p');

// Select the first <h1> element
const header = document.querySelector('h1');

Selecting elements by class:
// Select all elements with class "box"
const boxes = document.querySelectorAll('.box');

// Select the first element with class "header"
const header = document.querySelector('.header');

Selecting elements by ID:
// Select the element with id "my-element"
const element = document.querySelector('#my-element');

Selecting elements with a specific attribute:
// Select all <a> elements with href="https://www.example.com"
const links = document.querySelectorAll('a[href="https://www.example.com"]');

// Select the first <img> element with alt="Logo"
const logo = document.querySelector('img[alt="Logo"]');

Selecting elements by attribute presence:
// Select all <input> elements with a "required" attribute
const requiredInputs = document.querySelectorAll('input[required]');

// Select all <a> elements with a "target" attribute
const targetLinks = document.querySelectorAll('a[target]');

const links = document.querySelectorAll('a[href^="https://"][target="_blank"]'); */