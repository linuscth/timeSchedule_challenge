# timeSchedule_challenge

## description
This is a calender written in jQuery that performs several tasks related to managing a daily planner. Here is a brief summary of what it does:

1. Sets the current date using the Day.js library.
2. Adds a click event listener to all save buttons in the time-blocks. When clicked, the function gets the value of the textarea inside the time-block and stores it in local storage using the id of the time-block as the key.
3. Calls the init() function which in turn calls the getdetail() function. getdetail() retrieves the data stored in local storage and sets the value of the corresponding textarea elements.
4. Uses setInterval() to update the class of each time-block based on whether it's in the past, present, or future relative to the current hour.
5. Adds the current date to the header of the page.


Overall, this script is designed to create an interactive planner where users can enter and save daily tasks, and the planner will keep track of the current date and update the UI dynamically.

## Screenshot
![screenshot](./Assets/Screen%20Shot%202023-05-02%20at%2011.16.47%20PM.png)

## urls 
repo: https://github.com/linuscth/timeSchedule_challenge
url: https://linuscth.github.io/timeSchedule_challenge/
