// (function () {
// 	'use strict';

// 	// Update copyright year
// 	document.getElementById('year').textContent = new Date().getFullYear();

// 	// Shrink header on scroll
// 	var header = document.querySelector('.site-header');
// 	var lastKnownScrollY = 0;
// 	var ticking = false;

// 	function onScroll() {
// 		lastKnownScrollY = window.scrollY || window.pageYOffset;
// 		requestTick();
// 	}

// 	function requestTick() {
// 		if (!ticking) {
// 			window.requestAnimationFrame(update);
// 		}
// 		ticking = true;
// 	}

// 	function update() {
// 		var shouldShrink = lastKnownScrollY > 12;
// 		header.classList.toggle('header-shrink', shouldShrink);
// 		ticking = false;
// 	}

// 	window.addEventListener('scroll', onScroll, { passive: true });

// 	// Enable Bootstrap tooltips if any
// 	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// 	tooltipTriggerList.forEach(function (tooltipTriggerEl) {
// 		new bootstrap.Tooltip(tooltipTriggerEl);
// 	});

// 	// Smooth scroll fix for offset when using sticky header
// 	document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
// 		anchor.addEventListener('click', function (e) {
// 			var targetId = this.getAttribute('href');
// 			if (targetId.length > 1) {
// 				e.preventDefault();
// 				var el = document.querySelector(targetId);
// 				if (!el) return;
// 				var y = el.getBoundingClientRect().top + window.pageYOffset - 64; // approx header height
// 				window.scrollTo({ top: y, behavior: 'smooth' });
// 			}
// 		});
// 	});
// })(); 