Calculator
---

Created with *create-react-app*. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


Solve for divide by zero bug
---
Problem
When you try to divide a number by zero it will throw an exception and break the page.
Expected outcome 
When you try to divide a number by zero it should pop up an alert telling you you cannot divide by zero. 
The page should not break. 

Update the Calculator to have a “del” button
---
Add a delete button to the UI.
The button should say “Del”. 
Place it in the bottom row second from the end.
Update the code to handle delete
When you click the delete button 
if there is an input it should remove 1 character from the currently displayed number.
if only 1 character exists it should change it to 0

Optional (extra credit) Look over the Calculator Repo and think of your own feature you would add to it
---
Examples - highlight which operator they clicked.
Add a history column for past operations you have performed.  




Install
---

`npm install`



Usage
---

`npm start`

<!-- Look over what the calculator currently does and orient myself with the code- methods, css, etc. -->
<!-- Try things, using breakpoints on the division conditional in operate.js, looking at the data, and trying them out -->

<!-- added delete button, removed class of wide from 0, added classname or "" to delete button in Button.js, added class red to Button.css -->

<!-- delete function works, can change to delete numbers from total, but just alerts right now and doesn't change answer -->

<!-- REVIEW commented out section that was preventing from typing in numbers with 0's in calculate.js -->

