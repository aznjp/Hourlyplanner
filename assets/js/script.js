var hour = moment().hours();


// This is a function used to call up the current date using moment.js 
function dateTimer() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
};

/*Color coding schedule dependant upon whether the id numbers (which match time divs) are
equivalent to the actual current hour via the variable at top and css stylings*/
function timeMatch() {
    $(".description").each(function() {

        var rowHour = $(this).attr("id");
        var rowNumber = parseInt(rowHour);

        if (rowNumber == hour) {
            $(this).addClass("present");
        } else if (rowNumber < hour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        };
    });
};

/*This will pull out the scores from the id key (individual storages) and then display them a*/
function displayTasks() {
    $(".description").each(function() {
        var inputId = $(this).attr("id");

        $(this).val(localStorage.getItem(inputId));
    });
};

/*Click event to save user input in local storage via the key for individual id's and puts in the written text into the values*/
$(".saveBtn").click(function() {
    var timeSlots = $(this).siblings(".description").attr("id");
    var toDoTasks = $(this).siblings(".description").val();

    localStorage.setItem(timeSlots, toDoTasks);
});

dateTimer();
timeMatch();
displayTasks();