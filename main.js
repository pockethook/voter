"use strict"

document.addEventListener(
	"DOMContentLoaded",
	function() {
		var votes = document.getElementById('votes');
		var yes_button = document.getElementById('yes-button');
		var no_button = document.getElementById('no-button');
		var results_button = document.getElementById('results-button');
		var yes_results = document.getElementById('yes-results');
		var no_results = document.getElementById('no-results');

		yes_button.addEventListener(
			'click',
			function(event) { 
				votes.innerHTML++;
				yes_results.innerHTML++;
			});

		no_button.addEventListener(
			'click',
			function(event) { 
				no_results.innerHTML++;
				votes.innerHTML++;
			});

		results_button.addEventListener(
			'click',
			function(event) { 
				var elements = document.querySelectorAll('.results');
				for (var element of elements) {
					element.style.display = 'block';
				}
			});
	});
