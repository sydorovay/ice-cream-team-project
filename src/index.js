$(document).ready(function () {
	$('.gallery-slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});

$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
	});
});

!(function (e) {
	'function' != typeof e.matches &&
		(e.matches =
			e.msMatchesSelector ||
			e.mozMatchesSelector ||
			e.webkitMatchesSelector ||
			function (e) {
				for (
					var t = this,
						o = (t.document || t.ownerDocument).querySelectorAll(e),
						n = 0;
					o[n] && o[n] !== t;

				)
					++n;
				return Boolean(o[n]);
			}),
		'function' != typeof e.closest &&
			(e.closest = function (e) {
				for (var t = this; t && 1 === t.nodeType; ) {
					if (t.matches(e)) return t;
					t = t.parentNode;
				}
				return null;
			});
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
	var modalButtons = document.querySelectorAll('.js-open-modal'),
		overlay = document.querySelector('.js-overlay-modal'),
		closeButtons = document.querySelectorAll('.js-modal-close');

	modalButtons.forEach(function (item) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			var modalId = this.getAttribute('data-modal'),
				modalElem = document.querySelector(
					'.modal[data-modal="' + modalId + '"]',
				);

						modalElem.classList.add('active');
			overlay.classList.add('active');
		}); 
	}); 

	closeButtons.forEach(function (item) {
		item.addEventListener('click', function (e) {
			var parentModal = this.closest('.modal');

			parentModal.classList.remove('active');
			overlay.classList.remove('active');
		});
	}); 

	document.body.addEventListener(
		'keyup',
		function (e) {
			var key = e.keyCode;

			if (key == 27) {
				document.querySelector('.modal.active').classList.remove('active');
				document.querySelector('.overlay').classList.remove('active');
			}
		},
		false,
	);

	overlay.addEventListener('click', function () {
		document.querySelector('.modal.active').classList.remove('active');
		this.classList.remove('active');
	});
}); 

(() => {
	const refs = {
		openMenuBtn: document.querySelector('[data-menu-open]'),
		closeMenuBtn: document.querySelector('[data-menu-close]'),
		menu: document.querySelector('[data-menu]'),
	};

	refs.openMenuBtn.addEventListener('click', toggleMenu);
	refs.closeMenuBtn.addEventListener('click', toggleMenu);

	function toggleMenu() {
		document.body.classList.toggle('menu-open');
		refs.menu.classList.toggle('is-open');
	}
})();
