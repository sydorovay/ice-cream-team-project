$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,	
		slidesToShow:1,		
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
	
// ================ modal ================ 
	
	const refs1 = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs1.openModalBtn.addEventListener("click", toggleModal);
	refs1.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		document.body.classList.toggle("modal-open");
		refs1.modal.classList.toggle("is-hidden"); 
	}

	// 
		const refs2 = {
			openModalBtn: document.querySelector("[data-modal-product-open]"),
			closeModalBtn: document.querySelector("[data-modal-product-close]"),
			modal: document.querySelector("[data-modal-product]"),
		};

		refs2.openModalBtn.addEventListener("click", toggleModal);
		refs2.closeModalBtn.addEventListener("click", toggleModal);

		function toggleModal() {
			document.body.classList.toggle("modal-open");
			refs2.modal.classList.toggle("is-hidden");
		}

	
})();
