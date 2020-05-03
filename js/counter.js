	var number = document.querySelector('.number'),
	numberTop = number.getBoundingClientRect().top,
	start = +number.innerHTML, end = +number.dataset.max;

	var number2 = document.querySelector('.number2'),
	numberTop2 = number2.getBoundingClientRect().top,
	start2 = +number2.innerHTML, end2 = +number2.dataset.max;

	var number3 = document.querySelector('.number3'),
	numberTop3 = number3.getBoundingClientRect().top,
	start3 = +number3.innerHTML, end3 = +number3.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval = setInterval(function() {
				number.innerHTML = ++start;
				number.innerHTML = ++start;
				number.innerHTML = ++start;
				if(start == end) {
					clearInterval(interval);
				}
			}, 5);
			
			var interval2 = setInterval(function() {
				number2.innerHTML = ++start2;
				if(start2 == end2) {
					clearInterval(interval2);
				}
			}, 5);

			var interval3 = setInterval(function() {
				number3.innerHTML = ++start3;
				number3.innerHTML = ++start3;
				if(start3 == end3) {
					clearInterval(interval3);
				}
			}, 5);

		}
	});