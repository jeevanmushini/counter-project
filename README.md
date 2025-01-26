The HTML defines the structure of the counter application. Here's an explanation:

html
Copy
Edit
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="counter.css">
</head>
<body>
    <label id="countlabel">0</label>
    <div class="btncontainer">
        <button id="increasebtn" class="buttons">INCREASE</button>
        <button id="resetbtn" class="buttons">RESET</button>
        <button id="decreasebtn" class="buttons">DECREASE</button>
    </div>
    <script src="counter.js"></script>
</body>
</html>
Key Components:
HTML Boilerplate (<!DOCTYPE html>):

Defines the document type as HTML5 and sets up the basic structure for the page.
Head Section:

Includes metadata (charset, viewport) for proper rendering and responsiveness.
Links the external CSS file (counter.css) for styling.
Body Section:

Contains:
A <label> with id="countlabel" to display the counter value (initially set to 0).
A <div> with class="btncontainer" that contains:
Three buttons (INCREASE, RESET, DECREASE) with their respective IDs and shared CSS class (buttons).
Script Inclusion:

Links the external JavaScript file (counter.js) to manage the counter's logic.
CSS Code
The CSS (counter.css) defines the visual appearance of the counter application.

css
Copy
Edit
body {
    background-color: papayawhip;
}
#countlabel {
    display: block;
    font-size: 10em;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.btncontainer {
    text-align: center;
}
.buttons {
    font-size: 1.5em;
    padding: 10px 20px;
    background-color: rgb(96, 232, 239);
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid black; /* Fixed the syntax for border-radius */
    transition: background-color 0.25s;
}
.buttons:hover {
    background: rgb(44, 127, 251);
}
Key Components:
body:

Sets the background color to papayawhip.
#countlabel:

Makes the counter display large (font-size: 10em) and bold using the Impact font.
Centers the counter text on the page.
.btncontainer:

Centers the buttons horizontally.
.buttons:

Provides shared styles for the buttons:
Font size: 1.5em.
Padding for a larger clickable area.
Rounded corners (border-radius: 5px).
Background color (rgb(96, 232, 239)) and hover transition for smooth color change.
Adds a thin black border (2px solid black) around the buttons.
Hover Effect:
Changes the button background color on hover (rgb(44, 127, 251)).
JavaScript Code
The JavaScript (counter.js) adds functionality to the counter buttons.

javascript
Copy
Edit
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const decreasebtn = document.getElementById("decreasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function () {
    count++;
    countlabel.textContent = count;
};

resetbtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;
};

decreasebtn.onclick = function () {
    count--;
    countlabel.textContent = count;
};
Key Components:
Selecting Elements:

getElementById() is used to fetch DOM elements by their IDs:
increasebtn, resetbtn, decreasebtn: Buttons for increasing, resetting, and decreasing the counter.
countlabel: The label where the current counter value is displayed.
Counter Variable:

A variable count initialized to 0 keeps track of the current counter value.
Button Click Handlers:

Each button has an onclick function that updates the counter and reflects the change in the countlabel:
Increase Button (increasebtn):
Increments the counter (count++) and updates the label.
Reset Button (resetbtn):
Resets the counter to 0 and updates the label.
Decrease Button (decreasebtn):
Decrements the counter (count--) and updates the label.
How It Works
Initial Display:

The counter (count) is displayed as 0 by default in the #countlabel.
User Interaction:

Clicking the INCREASE button increments the counter and updates the label.
Clicking the RESET button sets the counter back to 0.
Clicking the DECREASE button decrements the counter and updates the label.
Styling and Feedback:

Buttons are visually styled with hover effects for interactivity.
The counter value is prominently displayed in the center.
