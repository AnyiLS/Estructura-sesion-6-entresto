$(document).ready(function () {
	let bandera1 = false

	const slides = ['slide353']
	const validar = () => {
		const slides = ['slide353']

		const exist = []

		slides.forEach((item, index) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
				document.querySelector(
					`.puntero${index === 0 ? '' : index}`
				).style.display = 'none'
				if (exist.length === 1) {
					$('.boton-next').show()
					$('.vutom-col').hide()
				}
			}
		})

		if (exist.length === 1) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	}
	function esPantallaTactil() {
		return 'ontouchstart' in window || navigator.maxTouchPoints > 0
	}

	if (esPantallaTactil()) {
		$('.openModal').on('click', () => {
			if (bandera1) {
				$('#image-1').css('display', 'none')
				bandera1 = !bandera1
			} else {
				$('#image-1').css('display', 'block')
				localStorage.setItem('slide353', 'true')
				validar()
				bandera1 = !bandera1
			}
		})
	} else {
		// modal 1
		$('.openModal').on('mouseover', () => {
			$('#image-1').css('display', 'block')
			localStorage.setItem('slide353', 'true')
			validar()
			bandera1 = true
		})
		// cerra modal

		$('.openModal').on('mouseleave', () => {
			$('#image-1').css('display', 'none')
			bandera1 = false
		})
	}
})
