//13 miles   1 hour 46 minutes 40 seconds result should be "8:12"


function calculatePace(hours, minutes, seconds, distance) {
  var hourMin = hours * 60;//convert hour to minutes
  console.log(hourMin);
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
  console.log(totalTime);
  //isolate float--TOTAL minus TOTAL.ROUND
  var float = totalTime - Math.round(totalTime);
  var totalMinutes = Math.round(totalTime);
  console.log(totalMinutes);
  console.log(float);
  //multiply FLOAT by 60--round this to nearest integer, and this is seconds
  var seconds = Math.round(float*60);
  console.log(seconds);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  console.log(seconds);
  //document.getElementById("paceDisplay").innerHTML = "Your pace was " + minutes + ":" + seconds;
}
calculatePace(1, 45, 2, 13);
