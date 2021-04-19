var fullDate = $("#currentDay"); // p tag in the header for the date
var today = moment(); // calling momentjs and assigning variable 
var timeBlock = $(".timeBlock") // entire section for the timline
var container = $(".container"); // container per single hour timeline 
var hourBlock = $(".input-group"); // input group is same as^^ 
var hourStamp = document.querySelectorAll(".input-group-text"); // this is the span which holds the time stamp on the left side 
var textArea = $(".form-control"); // text area where user can enter daily plans
var presentDate = today.format('MMMM Do YYYY'); // this holds the present date 

timeOfDayArray24 = ['00:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00',]
timeOfDayArray12 = ['12 AM','1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM','9 PM','10 PM','11 PM',]





for(i=0;i<timeOfDayArray12.length;i++) {    
   hourStamp[i].textContent = timeOfDayArray12[i];
}





 
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



