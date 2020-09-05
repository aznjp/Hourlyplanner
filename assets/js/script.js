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