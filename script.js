//Eelements to manipulate
const greetingElement = document.getElementById('greeting');
const styleButton = document.getElementById('styleButton');
const elementContainer = document.getElementById('elementContainer');
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');

//1: Change text content dynamically
function changeGreetingText(newText) {
    greetingElement.textContent = newText;
}

//Call the function to change the greeting after a short delay
setTimeout(() => {
    changeGreetingText('Welcome, User!');
}, 1500);

//2: Modify CSS styles via JavaScript
function toggleStyle() {
    greetingElement.classList.toggle('styled');
}

//Event listener to style button
styleButton.addEventListener('click', toggleStyle);

//3: Add / remove element when button is clicked
function addDynamicElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'A newly added dynamic element.';
    newElement.classList.add('dynamic-element');
    elementContainer.appendChild(newElement);
}

function removeLastElement() {
    const lastElement = elementContainer.lastElementChild;
    if (lastElement) {
        elementContainer.removeChild(lastElement);
    } else {
        alert('No more elements to remove!');
    }
}

// Add event listeners to the add and remove buttons
addElementButton.addEventListener('click', addDynamicElement);
removeElementButton.addEventListener('click', removeLastElement);

