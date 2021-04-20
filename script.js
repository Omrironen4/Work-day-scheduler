var fullDate = $("#currentDay"); // p tag in the header for the date
var today = moment(); // calling momentjs and assigning variable 
var timeBlock = $(".timeBlock") // entire section for the timline
var container = $(".container"); // container per single hour timeline 
var hourBlock = $(".input-group"); // input group is same as^^ 
var hourStamp = document.querySelectorAll(".input-group-text"); // this is the span which holds the time stamp on the left side 
var textArea = $(".form-control"); // text area where user can enter daily plans
var presentDate = today.format('MMMM Do YYYY'); // this holds the present date 
var lock = document.querySelectorAll(".btn");
var todo0 =($("#0").val())
var todo1 =($("#1").val())
var todo2 =($("#2").val())
var todo3 =($("#3").val())
var todo4 =($("#4").val())
var todo5 =($("#5").val())
var todo6 =($("#6").val())
var todo7 =($("#7").val())
var todo8 =($("#8").val())
var todo9 =($("#9").val())
var todo10 =($("#10").val())
var todo11 =($("#11").val())
var todo12 =($("#12").val())
var todo13 =($("#13").val())
var todo14 =($("#14").val())
var todo15 =($("#15").val())
var todo16 =($("#16").val())
var todo17 =($("#17").val())
var todo18 =($("#18").val())
var todo19 =($("#19").val())
var todo20 =($("#20").val())
var todo21 =($("#21").val())
var todo22 =($("#22").val())
var todo23 =($("#23").val())

var input = localStorage.getItem("todo0", todo0);
$("#0").text(input);
var input = localStorage.getItem("todo1", todo1);
$("#1").text(input);
var input = localStorage.getItem("todo2", todo2);
$("#2").text(input);
var input = localStorage.getItem("todo3", todo3);
$("#3").text(input);
var input = localStorage.getItem("todo4", todo4);
$("#4").text(input);
var input = localStorage.getItem("todo5", todo5);
$("#5").text(input);
var input = localStorage.getItem("todo6", todo6);
$("#6").text(input);
var input = localStorage.getItem("todo7", todo7);
$("#7").text(input);
var input = localStorage.getItem("todo8", todo8);
$("#8").text(input);
var input = localStorage.getItem("todo9", todo9);
$("#9").text(input);
var input = localStorage.getItem("todo10", todo10);
$("#10").text(input);
var input = localStorage.getItem("todo11", todo11);
$("#11").text(input);
var input = localStorage.getItem("todo12", todo12);
$("#12").text(input);
var input = localStorage.getItem("todo13", todo13);
$("#13").text(input);
var input = localStorage.getItem("todo14", todo14);
$("#14").text(input);
var input = localStorage.getItem("todo15", todo15);
$("#15").text(input);
var input = localStorage.getItem("todo16", todo16);
$("#16").text(input);
var input = localStorage.getItem("todo17", todo17);
$("#17").text(input);
var input = localStorage.getItem("todo18", todo18);
$("#18").text(input);
var input = localStorage.getItem("todo19", todo19);
$("#19").text(input);
var input = localStorage.getItem("todo20", todo20);
$("#20").text(input);
var input = localStorage.getItem("todo21", todo21);
$("#21").text(input);
var input = localStorage.getItem("todo22", todo22);
$("#22").text(input);
var input = localStorage.getItem("todo23", todo23);
$("#23").text(input);

timeOfDayArray12 = ['12 AM','1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM',]



var userLog = localStorage.getItem("todo")

for(i=0;i<timeOfDayArray12.length;i++) {    
   hourStamp[i].textContent = timeOfDayArray12[i];
}


// var userInput = $('')

$("button").on("click", function(){
   var todo0 =($("#0").val());
    console.log(todo0)
    localStorage.setItem("todo0",todo0)
})
$("button").on("click", function(){
    var todo1 =($("#1").val());
     console.log(todo1)
     localStorage.setItem("todo1",todo1)
 })
 $("button").on("click", function(){
    var todo2 =($("#2").val());
     console.log(todo2)
     localStorage.setItem("todo2",todo2)
 })
 $("button").on("click", function(){
    var todo3 =($("#3").val());
     console.log(todo3)
     localStorage.setItem("todo3",todo3)
 })
 $("button").on("click", function(){
    var todo4 =($("#4").val());
     console.log(todo4)
     localStorage.setItem("todo4",todo4)
 })
 $("button").on("click", function(){
    var todo5 =($("#5").val());
     console.log(todo5)
     localStorage.setItem("todo5",todo5)
 })
 $("button").on("click", function(){
    var todo6 =($("#6").val());
     console.log(todo6)
     localStorage.setItem("todo6",todo6)
 })
 $("button").on("click", function(){
    var todo7 =($("#7").val());
     console.log(todo7)
     localStorage.setItem("todo7",todo7)
 })
 $("button").on("click", function(){
    var todo8 =($("#8").val());
     console.log(todo8)
     localStorage.setItem("todo8",todo8)
 })
 $("button").on("click", function(){
    var todo9 =($("#9").val());
     console.log(todo9)
     localStorage.setItem("todo9",todo9)
 })
 $("button").on("click", function(){
    var todo10 =($("#10").val());
     console.log(todo10)
     localStorage.setItem("todo10",todo10)
 })
 $("button").on("click", function(){
    var todo11 =($("#11").val());
     console.log(todo11)
     localStorage.setItem("todo11",todo11)
 })
 $("button").on("click", function(){
    var todo12 =($("#12").val());
     console.log(todo12)
     localStorage.setItem("todo12",todo12)
 })
 $("button").on("click", function(){
    var todo13 =($("#13").val());
     console.log(todo13)
     localStorage.setItem("todo13",todo13)
 })
 $("button").on("click", function(){
    var todo14 =($("#14").val());
     console.log(todo14)
     localStorage.setItem("todo14",todo14)
 })
 $("button").on("click", function(){
    var todo15 =($("#15").val());
     console.log(todo15)
     localStorage.setItem("todo15",todo15)
 })
 $("button").on("click", function(){
    var todo16 =($("#16").val());
     console.log(todo16)
     localStorage.setItem("todo16",todo16)
 })
 $("button").on("click", function(){
    var todo17 =($("#17").val());
     console.log(todo17)
     localStorage.setItem("todo17",todo17)
 })
 $("button").on("click", function(){
    var todo18 =($("#18").val());
     console.log(todo18)
     localStorage.setItem("todo18",todo18)
 })
 $("button").on("click", function(){
    var todo19 =($("#19").val());
     console.log(todo19)
     localStorage.setItem("todo19",todo19)
 })
 $("button").on("click", function(){
    var todo20 =($("#20").val());
     console.log(todo20)
     localStorage.setItem("todo20",todo20)
 })
 $("button").on("click", function(){
    var todo21 =($("#21").val());
     console.log(todo21)
     localStorage.setItem("todo21",todo21)
 })
 $("button").on("click", function(){
    var todo22 =($("#22").val());
     console.log(todo22)
     localStorage.setItem("todo22",todo22)
 })
 $("button").on("click", function(){
    var todo23 =($("#23").val());
     console.log(todo23)
     localStorage.setItem("todo23",todo23)
 })


 
function timeMatch(){
    var currentTime = moment().hour();
    // console.log(currentTime);
    textArea.each(function(){
        var timeId = parseInt($(this).attr("id"));
        // console.log(timeId);

        if(timeId<currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (timeId === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}




                                                          



setInterval(timeMatch, 1000)
timeMatch()


fullDate.text(presentDate) //

// hoursLog.append(hours)



