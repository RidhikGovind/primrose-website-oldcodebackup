const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile__nav');
const headerNav = document.querySelector('.header__nav');
const headerBrandTitle = document.querySelector('.header__brandTitle a');
const menuBtnBurger = document.querySelector('.menu-btn__burger');
const header = document.querySelector('.header');
const productNavLink = document.getElementById('nav__link--products');
const subMenu = document.querySelector('.sub-menu-wrap');
const servicesNavLink = document.getElementById('nav__link--services');

const accordian = document.querySelector('.accordian__list');
const accordianListItem = document.querySelectorAll('.accordian__list__item');
const accordianContent = document.querySelectorAll('.accordian__content');

const productsNavContainer = document.querySelector('.products__navContainer');
const servicesNavContainer = document.querySelector('.services__navContainer');

//mobile nav accordion toggle
accordianContent.forEach((content) =>
	content.addEventListener('click', toggleMobileNavAccordian)
);

function toggleMobileNavAccordian() {
	thisAccordian = this.parentNode;
	console.log(thisAccordian);
	accordianListItem.forEach((item) => {
		if (thisAccordian == item) {
			thisAccordian.classList.toggle('open');
			return;
		}
		item.classList.remove('open');
	});
}

//hero typewriter effect config
document.addEventListener('DOMContentLoaded', (e) => {
	// displaying the year timestamp
	const yearElement = document.getElementById('footer__year');
	const currentYear = new Date().getFullYear() - 1;
	const nextYear = currentYear + 1;
	yearElement.innerHTML = `${currentYear}-${nextYear}`;

	//navbar scroll effect
	window.onscroll = () => {
		if (window.pageYOffset > 0) {
			headerNav.classList.add('scrolled');
		} else {
			headerNav.classList.remove('scrolled');
		}
	};

	const animText = ['here ...', 'now ...'];

	function typingEffect(text, i, fnCallback) {
		if (i < text.length) {
			document.querySelector('.hero__typewriter').innerHTML =
				text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

			//after 2 seconds call this function again incrementing the 'i'
			setTimeout(() => {
				typingEffect(text, i + 1, fnCallback);
			}, 300);
		} else if (typeof fnCallback == 'function') {
			//call the callback again after timeout
			setTimeout(fnCallback, 1200);
		}
	}

	function startTypingTextAnimation(i) {
		if (typeof animText[i] == 'function') {
			setTimeout(() => {
				startTypingTextAnimation(0);
			}, 1000);
		}

		//check if animText exits
		if (i < animText[i].length) {
			typingEffect(animText[i], 0, () => {
				startTypingTextAnimation(i + 1);
			});
		}
	}

	startTypingTextAnimation(0);
});

//showing and hiding the sub-menu after the frame loads
//for product link
productNavLink.addEventListener(
	'mouseenter',
	() => {
		showSubMenuProducts();
	},
	false
);

productsNavContainer.addEventListener(
	'mouseleave',
	() => {
		hideSubMenuProducts();
	},
	false
);

function showSubMenuProducts() {
	gsap.to('.sub-menu-wrap--products', {
		y: 10,
		duration: 0.2,
		opacity: 1,
		visibility: 'visible',
	});
}

function hideSubMenuProducts() {
	gsap.to('.sub-menu-wrap--products', {
		y: -10,
		duration: 0.2,
		opacity: 0,
		visibility: 'hidden',
	});
}

//for services link
servicesNavLink.addEventListener(
	'mouseenter',
	() => {
		showSubMenuServices();
	},
	false
);

servicesNavContainer.addEventListener(
	'mouseleave',
	() => {
		hideSubMenuServices();
	},
	false
);

function showSubMenuServices() {
	gsap.to('.sub-menu-wrap--services', {
		y: 10,
		duration: 0.2,
		opacity: 1,
		visibility: 'visible',
	});
}

function hideSubMenuServices() {
	gsap.to('.sub-menu-wrap--services', {
		y: -10,
		duration: 0.2,
		opacity: 0,
		visibility: 'hidden',
	});
}

const boxShadow = `rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
rgba(0, 0, 0, 0.3) 0px 8px 16px -8px`;

//hamburger menu config
let isMenuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!isMenuOpen) {
		menuBtn.classList.add('open');
		mobileNav.classList.add('open');
		headerNav.style.background = '#fff';
		headerNav.style.borderBottom = '0.5px solid #e4e4e4';
		headerNav.style.boxShadow = `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`;
		headerBrandTitle.style.color = '#088b8c';
		menuBtnBurger.classList.add('bg-white-open');
	} else {
		menuBtn.classList.remove('open');
		mobileNav.classList.remove('open');
		// headerNav.style.background = '#fff';
		headerNav.style.borderBottom = '0.5px solid transparent';
		headerNav.style.boxShadow = 'none';
		headerBrandTitle.style.color = '#2f3034';
		menuBtnBurger.classList.remove('bg-white-open');
	}

	isMenuOpen = !isMenuOpen;
});

//splite-carousel config

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.splide').forEach((carousel) =>
		new Splide(carousel, {
			rewind: true,
			speed: 700,
			easing: 'ease',
			autoplay: true,
			interval: 10000,
			pauseOnHover: false,
		}).mount()
	);
});

// ********************** UNUSED CODE ********************************************

// fetch('./components/footer.html')
// 	.then((response) => {
// 		return response.text();
// 	})
// 	.then((data) => {
// 		document.querySelector('.footer').innerHTML = data;
// 		//displaying the year timestamp.
// 		const yearElement = document.getElementById('footer__year');
// 		const currentYear = new Date().getFullYear() -1;
// 		const nextYear = currentYear + 1;
// 		const yearStamp = `${currentYear}-${nextYear}`;
// 		yearElement.innerHTML = `${currentYear}-${nextYear}`;
// 		console.log(yearStamp);
// 	});

// document.addEventListener('DOMContentLoaded', function () {
// 	new Splide('.splide', {
// 		rewind: true,
// 		speed: 700,
// 		easing: 'ease',
// 		autoplay: true,
// 		interval: 5000,
// 		pauseOnHover: false,
// 	}).mount();
// 	new Splide('.splide2', {
// 		rewind: true,
// 		speed: 700,
// 		easing: 'ease',
// 		autoplay: true,
// 		interval: 5000,
// 		pauseOnHover: false,
// 	}).mount();
// });

// ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.mockup--trigger-iphone', {
// 	scrollTrigger: {
// 		trigger: '.mockup--trigger',
// 		toggleActions: 'restart none none none',
// 	},
// 	duration: 1,
// 	x: 0,
// 	start: '1024px 100%',
// 	display: 'block',
// });
// gsap.to('.mockup--trigger-imac', {
// 	scrollTrigger: {
// 		trigger: '.scontent--trigger-three',
// 		toggleActions: 'restart none none none',
// 	},
// 	duration: 1,
// 	x: 0,
// 	start: '1024px 100%',
// 	display: 'block',
// });

// gsap.to('.scontent--trigger-one', {
// 	scrollTrigger: {
// 		trigger: '.scontent--trigger-one',
// 		toggleActions: 'restart none none none',
// 	},
// 	duration: 1,
// 	x: 0,
// 	display: 'grid',
// });

// gsap.to('.scontent--trigger-two', {
// 	scrollTrigger: {
// 		trigger: '.scontent--trigger-three',
// 		toggleActions: 'restart none none none',
// 	},
// 	duration: 1,
// 	x: 0,
// 	display: 'grid',
// });
