#Job Tracker

## Answers:

##1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
getElementById: It finds elements by their id. Can contain only one id.
getElementsByClassName: It finds all the similar class name, and can contain multiple class name.
querySelector : Finds element using CSS selectors. Can contain ( #id), (.class) and many more. Return 1 element which matches first. 
 querySelectorAll: Finds element using CSS  slectors but return all, NodeList static types.

##2. How do you create and insert a new element into the DOM?

Answer: For creating new element: Create Element using .createElement>>add property
For insert a new element:to add first, use appendChild()  ; and to add last use prepend()

##3. What is Event Bubbling? And how does it work?
Answer: It is a way of starting an event from the target element and then moves up to its parent elements.
Work like: child>>parent>>ancestors

##4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is attaching one event listener to a parent element to handle events for its children using event bubbling.
Useful because it improve performance 

##5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
 preventDefault : stops the default browser action
stopPropagation : stops the event from bubbling to parent elements
