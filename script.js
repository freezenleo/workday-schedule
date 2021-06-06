// textarea lists
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");

hourCurrent = moment();

var textInput;
var calenderTime;

$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd, MMM Do YYYY'))
});



function loadingLocal() {
    var load9Am = JSON.parse(localStorage.getItem("9 AM"));
    nineAm.val(load9Am);
    console.log(nineAm);

    var load10Am = JSON.parse(localStorage.getItem("10 AM"));
    tenAm.val(load10Am);

    var load11Am = JSON.parse(localStorage.getItem("11 AM"));
    elevenAm.val(load11Am);

    var load12Pm = JSON.parse(localStorage.getItem("12 PM"));
    twelvePm.val(load12Pm);

    var load1Pm = JSON.parse(localStorage.getItem("1 PM"));
    onePm.val(load1Pm);

    var load2Pm = JSON.parse(localStorage.getItem("2 PM"));
    twoPm.val(load2Pm);

    var load3Pm = JSON.parse(localStorage.getItem("3 PM"));
    threePm.val(load3Pm);

    var load4Pm = JSON.parse(localStorage.getItem("4 PM"));
    fourPm.val(load4Pm);

    var load5Pm = JSON.parse(localStorage.getItem("5 PM"));
    fivePm.val(load5Pm);
}

// color change
$(".description").each(function () {
    // var timeSlot = parseInt($(this).attr("id"));
    // hourCurrent = parseInt(hourCurrent)

    var timeSlot = $(this).attr("id");
    console.log("timesloe1", timeSlot);

    timeSlot = moment(timeSlot, "hh:mm a").add(1, "h");

    console.log("timeslot", timeSlot);
    console.log("hourCurrent", hourCurrent);

    if (hourCurrent.isAfter(timeSlot)) {
        // if (hourCurrent > timeSlot) {
        $(this).addClass("past");
    }

    else if (Math.abs(hourCurrent.diff(timeSlot, "h")) < 1) {
        // else if (hourCurrent < timeSlot) {
        $(this).addClass("present");
    }

    else if (Math.abs(hourCurrent.diff(timeSlot, "h")) >= 1) {
        // else {
        $(this).addClass("future");
    }
});



$(".saveBtn").on("click", function () {
    textInput = $(this).siblings(".description").val().trim();
    calenderTime = $(this).siblings(".hour").text().trim();
    localStorage.setItem(calenderTime, JSON.stringify(textInput));

})

loadingLocal();