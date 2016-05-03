"use strict";

function calculatePace () {
	var distance = document.getElementById("distance").value;
	var time = document.getElementById("time").value;

	//following cuts float to hundredth decimal
	var pace = (time/distance).toFixed(2);
	//console.log(pace);
	//following removes all decimals for next calc
	var minutes = Math.floor(time/distance);
	//console.log(minutes);
	//following grabs only decimals for 60-ceiling conversion
	var float = pace - Math.floor(time/distance);
	//console.log(float);
	//following converts float to time and rounds to integer
	var seconds = Math.round(float*60);
	//console.log(seconds);
	//following adds 0 to front if one digit
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	console.log(minutes + ":" + seconds);
	document.getElementById("paceDisplay").innerHTML = "Your pace was " + minutes + ":" + seconds;
}

// re-write function to accept three inputs for time
// hours, minutes & seconds
// perhaps whole function should consist of three nested functions
