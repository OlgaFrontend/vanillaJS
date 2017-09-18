function timerFunc (day, hour, minute, second) {
	function countDown() {

		var time = new Date();

		var eventDate = new Date(2017, 12, 31);

		var currentTime = time.getTime();

		var eventTime = eventDate.getTime();

		var restTime = eventTime - currentTime;

		var s = Math.floor(restTime / 1000);
		var m = Math.floor(s / 60);
		var h = Math.floor(m / 60);
		var d = (Math.floor(h / 24)) - 30;

		h%=24;
		m%=60;
		s%=60;

		d = d < 10 ? '0' + d : d;
		h = h < 10 ? '0' + h : h;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;

		day.textContent = d;
		hour.textContent = h;
		minute.textContent = m;
		second.textContent = s;
	};

    countDown();
	setInterval(countDown, 1000);
};

var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

timerFunc (day, hour, minute, second);

var day2 = document.getElementById('day2');
var hour2 = document.getElementById('hour2');
var minute2 = document.getElementById('minute2');
var second2 = document.getElementById('second2');

timerFunc (day2, hour2, minute2, second2);
