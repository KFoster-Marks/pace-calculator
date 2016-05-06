"use strict";

function calculatePace() {
	var distance = document.getElementById("distance").value;
	var hours = Number(document.getElementById("hours").value);
	var minutes = Number(document.getElementById("minutes").value);
	var seconds = Number(document.getElementById("seconds").value);

  var pacePlusFloat = (((((hours * 60) + minutes)*60) + seconds)/60)/distance;
  var float = pacePlusFloat - Math.floor(pacePlusFloat);
  var minutesIsolated = Math.floor(pacePlusFloat);
  seconds = Math.floor(float*60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("paceDisplay").innerHTML = "Your pace was " + minutesIsolated + ":" + seconds;
}
