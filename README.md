# 🎮Mini Games 

### ⚙️Tech Stack
1. HTML
2. CSS
3. JavaScript

## 🎨Game 1: Colour Flipper 
Change of background colour with just a click of a button.

### 🗝️Key Learnings
1. id: unique identifer for a thing
   
2. onclick: an event triggering after clicking the button
   
3. <script></script>: adding source as a JS page in .html page

4. document.getElementsByTagName("body"): returns a list of all <body> elements in the document. There's only one <body> in an HTML document.
   
5. function setColour(name) {
    body.style.backgroundColor = name;
}
This is a function to set a specific colour i.e. green, red or blue.

6. Math.random(): generates a random number between 0 and 1.
Multiplying by 255 gives a number between 0 and 255 (max value for RGB colors).

7. Math.round(): rounds it to a whole number (0–255).

## 🔍Game 2: Palindrome Checker
Check whether a given string is equal when reversed (original string = reversed string). If not, then it's not palindrome.

### 🗝️Key Learnings
1. type="text" : a single-line text box where the user can type.

2. placeholder="Type something" : greyed-out text inside the input box as a hint for the user about what to type.

3. document.getElementById("input")

4. str.split("") : converts the string into array of characters.

5. .reverse() : reverses the string.

6. .join("") : joins back the reversed string.

7. ===  : strictly equal to

8. input.value = "" : clears the input box after checking.

## 💪Game 3: Random Quote Generator
Generate motivational quote with just a click.

## ⌚Game 4: Stop Watch
A stopwatch is a tool that counts & displays elapsed time in seconds & minutes, starting, stopping & resetting as needed.

### 🗝️Key Learnings
1. Variables
   a. secondsElapsed: total seconds passed.
   b. interval: stores the timer's setInterval reference.

2. padStart(value): Converts numbers like 5 into "05" for cleaner display. Ensures every number shown has 2 digits (eg: 09, 07 etc.)

3. setTime(): Converts secondsElpased into minutes and seconds. 
Eg: 180 seconds = 03:00

4. timer(): Called every second via setInterval.

5. startClock(): Starts the clock.

6. stopClock(): Stops the clock.

7. resetClock(): Stops the timer, sets secondsElapsed back to 0 & updates the display to 00:00.

## 📃Game 5: To Do List
Organize and track tasks.

### 🗝️Key Learnings
1. storageKey: the kry used to save the list in the browser's localStorage.

2. itemsDiv.innerHTML = null; Clears the current list. For each item, creates a small "box" with the item text and a "Delete" button.

3. document.addEventListener("DOMContentLoaded", loadItems); This ensures that app loads the saved list as soon as the page finishes loading.
