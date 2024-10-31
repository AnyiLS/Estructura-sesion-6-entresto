$(document).ready(function () {
	const validar = () => {
		const slides = ['slide360', 'slide361']

		const exist = []

		slides.forEach((item, index) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
				document.querySelector(
					`.puntero${index === 0 ? '' : index}`
				).style.display = 'none'
				if (exist.length === 2) {
					$('.boton-next').show()
					$('.vutom-col').hide()
				}
			}
		})

		if (exist.length === 2) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	}

	let bandera1 = false
	let bandera2 = false

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
				localStorage.setItem('slide360', 'true')
				validar()
				bandera1 = !bandera1
			}
		})
	} else {
		// modal 1
		$('.openModal').on('mouseover', () => {
			$('#image-1').css('display', 'block')
			localStorage.setItem('slide360', 'true')
			validar()
			bandera1 = true
		})
		// cerra modal

		$('.openModal').on('mouseleave', () => {
			$('#image-1').css('display', 'none')
			bandera1 = false
		})
	}

	if (esPantallaTactil()) {
		$('.openModal1').on('click', () => {
			if (bandera2) {
				$('#image-2').css('display', 'none')
				bandera2 = !bandera2
			} else {
				$('#image-2').css('display', 'block')
				localStorage.setItem('slide361', 'true')
				validar()
				bandera2 = !bandera2
			}
		})
	} else {
		// modal 1
		$('.openModal1').on('mouseover', () => {
			$('#image-2').css('display', 'block')
			localStorage.setItem('slide361', 'true')
			validar()
			bandera2 = true
		})
		// cerra modal

		$('.openModal1').on('mouseleave', () => {
			$('#image-2').css('display', 'none')
			bandera2 = false
		})
	}

})
