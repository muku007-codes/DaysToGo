const weddingDate = "23 Jun 2023";//target date
var target_date = new Date(weddingDate);
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (current_date - target_date) / 1000;
  console.log(current_date/1000);

  days = pad( parseInt(seconds_left / 86400) );
  seconds_left = seconds_left % 86400;
     
  hours = pad( parseInt(seconds_left / 3600) );
  seconds_left = seconds_left % 3600;
      
  minutes = pad( parseInt(seconds_left / 60) );
  seconds = pad( parseInt( seconds_left % 60 ) );

  // format countdown string + set tag value
  // countdown.innerHTML = "<span>" + days + "</span> <span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
  countdown.innerHTML =   "<h3>" + days +"</h3>"  + "<h3>" + hours +"</h3>"  + "<h3>" + minutes +"</h3>"  +"<h3>" + seconds +"</h3>"  ; 
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}