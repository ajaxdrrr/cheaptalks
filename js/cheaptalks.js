function button_action() {

	var link = 'index.html#contact';

	window.location.href = link;

	console.log('redirecting to '+link);

}

var modal = document.getElementById("video-modal");

var btn = document.getElementById("open-modal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "flex";
	document.body.style.overflow = 'hidden';
}

span.onclick = function() {
	modal.style.display = "none";
	window.location.href ="index.html";
}

const observer = new IntersectionObserver((entries) => {

	entries.forEach((entry) => {

		if (entry.isIntersecting) {

			entry.target.classList.add('show')

		}

	});

});

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el) => observer.observe(el));

// landing buttons
const observer2 = new IntersectionObserver((entries) => {

	entries.forEach((entry) => {

		if (entry.isIntersecting) {

			entry.target.classList.add('bth')

		}

	});

});

const hiddenElements2 = document.querySelectorAll('.bts')

hiddenElements2.forEach((el) => observer2.observe(el));

// clients

const observer3 = new IntersectionObserver((entries) => {

	entries.forEach((entry) => {

		if (entry.isIntersecting) {

			entry.target.classList.add('btm-animateh')

		}

	});

});

const hiddenElements3 = document.querySelectorAll('.btm-animates')

hiddenElements3.forEach((el) => observer3.observe(el));


// readmore

function myFunction() {
	var x = document.getElementById("read");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function get_in_touch() {

	window.location.href ="get-in-touch.html";

}