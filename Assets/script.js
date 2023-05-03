// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));


  $('.saveBtn').on('click', function () {
    var mytextArea = $(this).parent().find("textarea").val();
    var assignedTime = $(this).parent().attr('id');
    if (mytextArea.trim() !== '') {
      localStorage.setItem(assignedTime, mytextArea)
    }
  })

  init();

  function init() {
    getdetail()
  }

  function getdetail() {
    $('.time-block').each(function () {
      var hourId = $(this).attr('id');
      var storedItems = localStorage.getItem(hourId);
      $(this).children('textArea').text(storedItems)
    })
  }


  setInterval(
    function () {
      // var dataTime9 = $('#hour-9').data('time');
      // var dataTime10 = $('#hour-10').data('time');
      // var dataTime11 = $('#hour-11').data('time');
      // var dataTime12 = $('#hour-12').data('time');
      // var dataTime13 = $('#hour-13').data('time');
      // var dataTime14 = $('#hour-14').data('time');
      // var dataTime15 = $('#hour-15').data('time');
      // var dataTime16 = $('#hour-16').data('time');
      // var dataTime17 = $('#hour-17').data('time');
      var currentHour = today.format('H');

      $('.time-block').each(function () {
        var dataTime = $(this).data('time');
        if (currentHour === dataTime) {
          $(this).addClass('present');
        } else if (currentHour > dataTime) {
          $(this).addClass('past');
        } else {
          $(this).addClass('future')
        }
      })

    }, 1000)


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
  // done TODO: Add code to display the current date in the header of the page.

});
