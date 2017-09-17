(function() {
	var day = document.getElementById('day');
	var hour = document.getElementById('hour');
	var minute = document.getElementById('minute');
	var second = document.getElementById('second');

	function countDown() {
		
		var time = new Date();

		var eventDate = new Date(2017, 10, 06);
		
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
	}
    
    countDown();
	setInterval(countDown, 1000);
})();


    
   
    

