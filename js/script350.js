const slides = ['slide358', 'slide359']

$(document).ready(function () {
	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		localStorage.setItem('slide358', 'true')
		$('.puntero').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 2) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 1
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
        localStorage.setItem('slide359', 'true')
		$('.puntero1').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 2) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal1
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

})
