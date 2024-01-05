// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(document).ready(function() {
    // Document is ready, execute your JavaScript code here
  
    // Get the current date using Day.js
    var currentDate = dayjs().format("dddd, MMMM D");
  
    // Update the text content of the element with id "currentDay" with the current date
    $("#toDay").text(currentDate);
  
    // Function to dynamically set the class for each time block based on the current hour
    function updateHourlyStyles() {
      var currentHour = dayjs().hour();
  
      // Loop through each time block
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // Remove all classes to reset styling
        $(this).removeClass("past present future");
  
        // Add appropriate class based on the current hour
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
    }
  
    // Call the function to set initial styles
    updateHourlyStyles();
  
    // Set up a click event for the save buttons
    $(".saveBtn").on("click", function() {
      // Get the corresponding textarea value
      var description = $(this).siblings(".description").val();
  
      // Get the corresponding hour from the parent time block
      var hour = $(this).parent().attr("id").split("-")[1];
  
      // Save the data to localStorage or perform any other desired action
      // For example: localStorage.setItem("hour-" + hour, description);
    });
  });

});



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.