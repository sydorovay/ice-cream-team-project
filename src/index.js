$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,	
		slidesToShow:1,		
	});

	$('.gallery-slider').slick({
		arrows:false,
		slidesToShow:1,	
		autoplay: falce,	
		autoplaySpeed: 500,
	});
});

(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-menu-open]"),
		closeMenuBtn: document.querySelector("[data-menu-close]"),
		menu: document.querySelector("[data-menu]"),
	};


	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		document.body.classList.toggle("menu-open");
		refs.menu.classList.toggle("is-open");
	}






			})();
