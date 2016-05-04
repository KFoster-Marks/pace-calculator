"use strict";


function calculatePace(hours, minutes, seconds, distance) {
	var distance = document.getElementById("distance").value;
	var hours = Number(document.getElementById("hours").value);
	var minutes = Number(document.getElementById("minutes").value);
	var seconds = Number(document.getElementById("seconds").value);

	var hourMin = (hours * 60);//convert hour to minutes
  console.log("This should be 60 " + hourMin);
	console.log("This should be 40 " + minutes);
  //add hourMinutes to minutes && convert hourPlusMinutes to seconds
  var minutesPlusHoursSeconds = (hourMin + minutes)*60;
  console.log(minutesPlusHoursSeconds);
  //TOTAL TIME NOW IN SECONDS
  var secondsTotal = minutesPlusHoursSeconds + seconds;
  console.log(secondsTotal);
  //divide by 60
  //TOTAL TIME NOW IN MINUTES
  //divide by distance
  //TOTAL IS NOW MINUTES PER miles
  var totalTime = (secondsTotal/60)/distance;
  //console.log(totalTime);
  //isolate float--TOTAL minus TOTAL.ROUND
  var float = totalTime - Math.floor(totalTime);
  var totalMinutes = Math.floor(totalTime);
  //console.log("The total minutes are " + totalMinutes);
  //console.log("The float is " + float);
  //multiply FLOAT by 60--round this to nearest integer, and this is seconds
  seconds = Math.floor(float*60);
  //console.log("The seconds are " + seconds);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  //console.log("Your pace was " + totalMinutes + ":" + seconds);
  document.getElementById("paceDisplay").innerHTML = "Your pace was " + totalMinutes + ":" + seconds;
}
