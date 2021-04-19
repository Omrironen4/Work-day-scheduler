var fullDate = $("#currentDay"); // p tag in the header for the date
var today = moment(); // calling momentjs and assigning variable 
var timeBlock = $(".timeBlock") // entire section for the timline
var container = $(".container"); // container per single hour timeline 
var hourBlock = $(".input-group"); // input group is same as^^ 
var hourStamp = document.querySelectorAll(".input-group-text"); // this is the span which holds the time stamp on the left side 
var textArea = $(".form-control"); // text area where user can enter daily plans
var presentDate = today.format('MMMM Do YYYY'); // this holds the present date 

timeOfDayArray24 = ['00:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00',]
timeOfDayArray12 = ['12:00 AM','1:00 AM','2:00 AM','3:00 AM','4:00 AM','5:00 AM','6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM',]


 function changeTimeStandard () {                   //attempted 
    $(".timeChange").on("click", function(){
        if (timeOfDayArray12) {
            timeOfDayArray24;
        } else if (timeOfDayArray24) {
            timeOfDayArray12
        }else {
            timeOfDayArray12
        }
        
    })
}



for(i=0;i<timeOfDayArray12.length;i++) {    //only shows a single hour of the array
   hourStamp[i].textContent = timeOfDayArray12[i]
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



