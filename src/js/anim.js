gsap.registerPlugin(ScrollTrigger);

const slider = document.querySelector('.header__slider p');
const headerDesc = document.querySelectorAll('.header__desc p');
const sectionHeading = document.querySelectorAll('.section-heading p');
const textAnim = document.querySelectorAll('.text-anim');
const galleryOne = document.querySelector('.gallery-one');
const galleryTwo = document.querySelector('.gallery-two');
const galleryThree = document.querySelector('.gallery-three');
const offerBtn = document.querySelector('.offer-btn');


if (window.innerWidth > 992) {
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
}

let resolution = gsap.matchMedia();

resolution.add('(min-width: 768px)', () => {
	gsap.fromTo(
		galleryOne,
		{
			y: '-=400',
		},
		{
			y: '+=400',
			duration: 2.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: galleryOne,
				start: 'top: 0%',
				end: 'bottom: -60%',
				scrub: true,
			},
		}
	);
	gsap.fromTo(
		galleryTwo,
		{
			y: '+=200',
		},
		{
			y: '-=300',
			duration: 5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: galleryTwo,
				start: 'top: 50%',
				end: 'bottom: -60%',
				scrub: true,
			},
		}
	);
	gsap.fromTo(
		galleryThree,
		{
			y: '-=200',
		},
		{
			y: '+=400',
			duration: 2.5,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: galleryThree,
				start: 'top: 40%',
				end: 'bottom: -120%',
				scrub: true,
			},
		}
	);
});

resolution.add('(min-width: 1000px)', () => {
	// gsap.fromTo(
	// 	mobbImg,
	// 	{
	// 		scale: 1,
	// 		y: 0,
	// 		x: 0,
	// 	},
	// 	{
	// 		y: '+=1600px',
	// 		x: '-=740px',
	// 		scale: 1.4,
	// 		duration: 2.5,
	// 		ease: 'easeInOut',
	// 		scrollTrigger: {
	// 			trigger: mobbImg,
	// 			start: 'top: 40%',
	// 			end: 'bottom: -50%',
	// 			scrub: true,
	// 		},
	// 	}
	// );
});

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: slider,
		start: 'top: 78%',
		end: 'top: 0%',
		scrub: 20,
	},
});

tl.to(slider, { x: 360, duration: 40 });

// gsap.fromTo(
// 	slider,
// 	{
// 		x: '-=40',
// 	},
// 	{
// 		x: '+=400',
// 		duration: 5,
// 		ease: 'easeInOut',
// 		scrollTrigger: {
// 			trigger: slider,
// 			start: 'top: 100%',
// 			end: 'top: 0%',
// 			scrub: true,
// 		},
// 	}
// );
headerDesc.forEach((char, i) => {
	const text = new SplitType(char, { types: 'chars' });
	gsap.from(text.chars, {
		scrollTrigger: {
			trigger: char,
			start: 'top 100%',
			// end: 'top 20%',
		},
		scaleY: 0,
		y: -50,
		transformOrigin: 'top',
		stagger: 0.06,
	});
});

sectionHeading.forEach((char, i) => {
	const text = new SplitType(char, { types: 'chars' });
	gsap.from(text.chars, {
		scrollTrigger: {
			trigger: char,
			start: 'top 50%',
			end: 'top 20%',
		},
		scaleX: 0,
		x: -50,
		transformOrigin: 'top',
		stagger: 0.06,
	});
});

textAnim.forEach((char, i) => {
	const text = new SplitType(char, { types: 'words' });
	gsap.from(text.words, {
		scrollTrigger: {
			trigger: char,
			start: 'top 80%',
			end: 'top 20%',
			scrub: true,
			markers: false,
		},
		opacity: 0.2,
		stagger: 0.1,
	});
});

const xTo = gsap.quickTo(offerBtn, 'x', {
	duration: 1,
	ease: 'elastic.out(1, 0.3)',
});
9;

const yTo = gsap.quickTo(offerBtn, 'y', {
	duration: 1,
	ease: 'elastic.out(1, 0.3)',
});

const mouseMove = (e) => {
	const { clientX, clientY } = e;
	const { height, width, left, top } = offerBtn.getBoundingClientRect();
	const x = clientX - (left + width / 2);
	const y = clientY - (top + height / 2);
	xTo(x);
	yTo(y);
};

const mouseLeave = (e) => {
	gsap.to(offerBtn, { x: 0, duration: 1.5 });
	gsap.to(offerBtn, { y: 0, duration: 1.5 });
	xTo(0);
	yTo(0);
};

offerBtn.addEventListener('mousemove', mouseMove);
offerBtn.addEventListener('mouseleave', mouseLeave);
