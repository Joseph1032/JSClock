$(document).ready(function(){
	setInterval(timeclock, 1000)
	function timeclock () {
		var time = new Date ()
		var hrs = time.getHours()
		var mins = time.getMinutes()
		var secs = time.getSeconds()

		if (hrs > 12) {
			hrs = hrs - 12
		}

		if (hrs === 0) {
			hrs = 12
		}
		if (hrs < 10) {
			hrs = '0' + hrs
		}
		if (mins < 10) {
			mins = '0' + mins
		}
		if (secs < 10) {
			secs = '0' + secs
		}

		document.getElementById('clock').innerHTML = hrs + ":" + mins + ":" + secs
	}
}) 
	
