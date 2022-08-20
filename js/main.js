window.addEventListener('DOMContentLoaded', function () {
	function initMenu() {
		const $html = document.querySelector('html')
		const $headerMenu = document.querySelector('.header__menu')
		const $navLinks = $headerMenu.querySelectorAll(
			'.header__navigation ul li a'
		)
		const $headerBtn = document.querySelector('.header__burger')
		const $headerCloseBtn = document.querySelector('.header__close')
		const $headerOverlay = document.querySelector('.header__overlay')
		const TRANSITION_DELAY = 300

		let isInit = false

		const checkScreenWidth = () => {
			const MOBILE_MENU_BREAKPOINT = 1024
			// Активируем меню только на экранах <= 1024
			if (window.innerWidth <= MOBILE_MENU_BREAKPOINT && !isInit) {
				isInit = true
				$headerBtn.addEventListener('click', openMenu)
				$headerCloseBtn.addEventListener('click', closeMenu)
				$headerOverlay.addEventListener('click', closeMenu)
				$navLinks.forEach(item => {
					item.addEventListener('click', closeMenu)
				})
			} else {
				window.addEventListener('resize', checkScreenWidth)
			}
		}

		checkScreenWidth()

		function openMenu() {
			$headerOverlay.style.display = 'block'
			$headerMenu.style.display = 'flex'
			$html.classList.add('overflow-hidden')

			setTimeout(function () {
				$headerOverlay.classList.add('active')
				$headerMenu.classList.add('active')
			}, 50)
		}

		function closeMenu() {
			$headerOverlay.classList.remove('active')
			$headerMenu.classList.remove('active')
			$html.classList.remove('overflow-hidden')

			setTimeout(function () {
				$headerOverlay.style.display = ''
				$headerMenu.style.display = ''
			}, TRANSITION_DELAY)
		}
	}

	function initGetHeaderSize() {
		const $root = document.documentElement
		const $header = document.querySelector('.header')

		$root.style.setProperty('--header-size', $header.offsetHeight + 'px')
	}

	function initNewsSlider() {
		const $newsSlider = document.querySelector('.news-slider')

		if ($newsSlider) {
			const swiper = new Swiper('.news-slider', {
				spaceBetween: 25,
				slidesPerView: 'auto',
				slidesOffsetAfter: 150,
				autoHeight: true,
				navigation: {
					nextEl: '.news__next',
					prevEl: '.news__prev',
				},
				// breakpoints: {
				// 	// when window width is >= 320px
				// 	320: {
				// 		slidesPerView: 'auto',
				// 		centeredSlides: true,
				// 	},
				// 	// when window width is >= 768
				// 	768: {
				// 		slidesPerView: 1,
				// 		spaceBetween: 16,
				// 		centeredSlides: false,
				// 	},
				// },
			})
		}
	}

	function initProjectsSlider() {
		const $projectsSlider = document.querySelector('.projects-slider__content')

		if ($projectsSlider) {
			const swiper = new Swiper($projectsSlider, {
				spaceBetween: 30,
				navigation: {
					nextEl: '.projects-slider__next',
					prevEl: '.projects-slider__prev',
				},
			})
		}
	}

	function initModals() {
		const $modals = document.querySelectorAll('.modal')
	}

	// initMenu();
	// initModals();
	initNewsSlider()
	initProjectsSlider()
	initGetHeaderSize()
})
