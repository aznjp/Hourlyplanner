// This is a function used to call up the current date using moment.js 
function dateTimer() {
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
};