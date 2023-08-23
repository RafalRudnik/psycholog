const burgerBtn = document.querySelector('.nav__burger-inside');
const logo = document.querySelector('.nav__logo');
const offerBtn = document.querySelector('.offer-btn');
const footerYear = document.querySelector('.currYear');
const menu = document.querySelector('.menu');
const allLinks = document.querySelectorAll('.menu__item a');

const handleOpenMenu = () => {
	burgerBtn.classList.toggle('active');
	menu.classList.toggle('activeMenu');
	menu.classList.remove('hideMenu');
};

const handleClose = () => {
	burgerBtn.classList.toggle('active');
	menu.classList.toggle('activeMenu');
	menu.classList.add('hideMenu');
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
allLinks.forEach((link) => link.addEventListener('click', handleClose));

// ================= FORM =====================

const sendBtn = document.querySelector('.sendBtn');
const msgStatus = document.querySelector('.msg-status');
const input = document.querySelector('#name');
const mailInput = document.querySelector('#email');
const resultInput = document.querySelector('#result');

const checkName = (e) => {
	const contactBox = input.closest('.contact-box');
	if (input.value === '') {
		contactBox.classList.add('error');
		e.preventDefault();
	} else {
		contactBox.classList.remove('error');
	}
};

const checkMail = (mailInput, e) => {
	const contactBox = mailInput.closest('.contact-box');
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/i;
	if (re.test(mailInput.value)) {
		contactBox.classList.remove('error');
	} else {
		contactBox.classList.add('error');
		e.preventDefault();
	}
};

const checkResult = (e) => {
	const contactBox = resultInput.closest('.contact-box');
	if (resultInput.value != 14) {
		contactBox.classList.add('error');
		e.preventDefault();
	} else {
		contactBox.classList.remove('error');
	}
};

const checkErrors = (e) => {
	const allContactBox = document.querySelectorAll('.contact-box');
	let errorCount = 0;
	allContactBox.forEach((box) => {
		if (box.classList.contains('error')) {
			errorCount++;
			e.preventDefault();
		}
	});
	if (errorCount == 0) {
		handleMailSend();
	}
};

const handleMailSend = () => {
	if (document.location.search === '?mail_status=sent') {
		msgStatus.classList.add('success');
		msgStatus.textContent = 'Wiadomość wysłana!';

		setTimeout(() => {
			msgStatus.classList.remove('success');
		}, 3000);
	}

	if (document.location.search === '?mail_status=error') {
		msgStatus.classList.add('error');
		msgStatus.textContent = 'Wystąpił błąd.';

		setTimeout(() => {
			msgStatus.classList.remove('error');
		}, 3000);
	}
};

sendBtn.addEventListener('click', (e) => {
	// e.preventDefault();
	checkName(e);
	checkMail(mailInput, e);
	checkResult(e);
	checkErrors(e);
});
