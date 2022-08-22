window.addEventListener('DOMContentLoaded', function () {
	function initMenu() {
		const $html = document.querySelector('html')
		const $headerMenu = document.querySelector('.header__inner')
		const $navLinks = $headerMenu.querySelectorAll('.navigation__list>li>a')
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
					item.addEventListener('click', function (e) {
						if (item.nextElementSibling) {
							e.preventDefault()
							item.closest('li').classList.toggle('active')
							// item.nextElementSibling.classList.toggle('active')
						}
					})
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

		window.addEventListener('resize', function () {
			$root.style.setProperty('--header-size', $header.offsetHeight + 'px')
		})
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
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						slidesOffsetAfter: 0,
					},
					// when window width is >= 768
					768: {
						slidesPerView: 2,
						slidesOffsetAfter: 0,
					},
					// when window width is >= 1024
					1024: {
						slidesOffsetAfter: 150,
						slidesPerView: 'auto',
					},
				},
			})
		}
	}

	function initProjectsSlider() {
		const $projectsSlider = document.querySelector('.projects-slider__content')

		if ($projectsSlider) {
			const swiper = new Swiper($projectsSlider, {
				spaceBetween: 30,
				autoHeight: true,
				navigation: {
					nextEl: '.projects-slider__next',
					prevEl: '.projects-slider__prev',
				},
			})
		}
	}

	function initHeroSlider() {
		const $heroSlider = document.querySelector('.hero__slider')

		if ($heroSlider) {
			const swiper = new Swiper($heroSlider, {
				spaceBetween: 50,
				autoHeight: true,
				navigation: {
					nextEl: '.hero__prev',
					prevEl: '.hero__next',
				},
			})
		}
	}

	function initArticleSlider() {
		const $articleSlider = document.querySelector('.article__slider')

		if ($articleSlider) {
			const swiper = new Swiper($articleSlider, {
				spaceBetween: 30,
				slidesPerView: 1,
				navigation: {
					nextEl: '.article__next',
					prevEl: '.article__prev',
				},
			})
		}
	}
	function initArticlesSlider() {
		const $articlesSlider = document.querySelector('.articles-slider__inner')

		if ($articlesSlider) {
			const swiper = new Swiper($articlesSlider, {
				spaceBetween: 30,
				slidesPerView: 3,
				navigation: {
					nextEl: '.articles-slider__next',
					prevEl: '.articles-slider__prev',
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
					},
					// when window width is >= 650
					650: {
						slidesPerView: 2,
					},
					// when window width is >= 1200
					1200: {
						slidesPerView: 3,
					},
				},
			})
		}
	}

	function initModals() {
		const $modals = document.querySelectorAll('.modal')
		const $modalLicense = document.querySelector('#modal-license');
		const $licenses = document.querySelectorAll('.licenses__item-inner')
		
		if ($modals.length > 0) {
			MicroModal.init({
				disableScroll: true,
				awaitOpenAnimation: true,
				awaitCloseAnimation: true,
			})
		}
		
		if ($modalLicense) {
			const $modalText = $modalLicense.querySelector('.modal__text') 
			const $modalName = $modalLicense.querySelector('.modal__name') 
			const $modalImg = $modalLicense.querySelector('.modal__img') 

			$licenses.forEach($item => {
				const $text = $item.querySelector('.licenses__text')
				const $name = $item.querySelector('.licenses__name')
				const $img = $item.querySelector('.licenses__img')

				$item.addEventListener('click', function (e) {
					e.preventDefault()
					$modalImg.innerHTML = $img.innerHTML;
					$modalText.textContent = $text.textContent;
					$modalName.textContent = $name.textContent
				})
			})
		}
	}

	function initFilter() {
		const $filter = document.querySelector('.filter')
		const $filterContent = document.querySelector('.filter__content')
		const $filterBtn = document.querySelector('.filter__btn')
		const $filterClose = document.querySelector('.filter__close')
		const $filterOverlay = document.querySelector('.filter__overlay')
		const $html = document.querySelector('html')

		const TRANSITION_DELAY = 300
		let isInit = false

		const checkScreenWidth = () => {
			const MOBILE_FILTER_BREAKPOINT = 1200
			// Активируем фильтр только на экранах <= 1200
			if ($filter && window.innerWidth <= MOBILE_FILTER_BREAKPOINT && !isInit) {
				isInit = true
				$filterBtn.addEventListener('click', openFilter)
				$filterClose.addEventListener('click', closeFilter)
				$filterOverlay.addEventListener('click', closeFilter)
			} else {
				window.addEventListener('resize', checkScreenWidth)
			}
		}

		checkScreenWidth()

		function openFilter() {
			$filterOverlay.style.display = 'block'
			$filterContent.style.display = 'block'
			$html.classList.add('overflow-hidden')

			setTimeout(function () {
				$filterOverlay.classList.add('active')
				$filterContent.classList.add('active')
			}, 50)
		}

		function closeFilter() {
			$filterOverlay.classList.remove('active')
			$filterContent.classList.remove('active')
			$html.classList.remove('overflow-hidden')

			setTimeout(function () {
				$filterOverlay.style.display = ''
				$filterContent.style.display = ''
			}, TRANSITION_DELAY)
		}
	}

	initMenu()
	initModals()
	initNewsSlider()
	initProjectsSlider()
	initGetHeaderSize()
	initHeroSlider()
	initFilter()
	initArticlesSlider()
	initArticleSlider()
})
