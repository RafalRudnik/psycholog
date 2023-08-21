const burgerBtn = document.querySelector('.nav__burger-inside');
const logo = document.querySelector('.nav__logo');
const offerBtn = document.querySelector('.offer-btn');
const footerYear = document.querySelector('.currYear');

const handleOpenMenu = () => {
	burgerBtn.classList.toggle('active');
};

const hideLogo = () => {
	if (window.scrollY >= 100) {
		logo.classList.add('hideLogo');
		logo.classList.remove('showLogo');
	} else {
		logo.classList.remove('hideLogo');
		logo.classList.add('showLogo');
	}
};

const handleYear = () => {
	let date = new Date().getFullYear();
	footerYear.textContent = date;
};

handleYear();
burgerBtn.addEventListener('click', handleOpenMenu);
window.addEventListener('scroll', hideLogo);
