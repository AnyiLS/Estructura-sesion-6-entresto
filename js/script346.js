$(document).ready(function () {
	const slides = ['slide354', 'slide355', 'slide356', 'slide357']
	const validar = () => {
		const slides = ['slide354', 'slide355', 'slide356', 'slide357']

		const exist = []

		slides.forEach((item, index) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
				document.querySelector(
					`.puntero${index === 0 ? '' : index}`
				).style.display = 'none'
				if (exist.length === 4) {
					$('.boton-next').show()
					$('.vutom-col').hide()
				}
			}
		})

		if (exist.length === 4) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	}

	let bandera1 = false
	let bandera2 = false
	let bandera3 = false
	let bandera4 = false

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
				localStorage.setItem('slide354', 'true')
				validar()
				bandera1 = !bandera1
			}
		})
	} else {
		// modal 1
		$('.openModal').on('mouseover', () => {
			$('#image-1').css('display', 'block')
			localStorage.setItem('slide354', 'true')
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
				localStorage.setItem('slide355', 'true')
				validar()
				bandera2 = !bandera2
			}
		})
	} else {
		// modal 1
		$('.openModal1').on('mouseover', () => {
			$('#image-2').css('display', 'block')
			localStorage.setItem('slide355', 'true')
			validar()
			bandera2 = true
		})
		// cerra modal

		$('.openModal1').on('mouseleave', () => {
			$('#image-2').css('display', 'none')
			bandera2 = false
		})
	}

	if (esPantallaTactil()) {
		$('.openModal2').on('click', () => {
			if (bandera3) {
				$('#image-3').css('display', 'none')
				bandera3 = !bandera3
			} else {
				$('#image-3').css('display', 'block')
				localStorage.setItem('slide356', 'true')
				validar()
				bandera3 = !bandera3
			}

			console.log('hol')
		})
	} else {
		// modal 1
		$('.openModal2').on('mouseover', () => {
			$('#image-3').css('display', 'block')
			localStorage.setItem('slide356', 'true')
			validar()
			bandera3 = true
		})
		// cerra modal

		$('.openModal2').on('mouseleave', () => {
			$('#image-3').css('display', 'none')
			bandera3 = false
		})
	}

	if (esPantallaTactil()) {
		$('.openModal3').on('click', () => {
			if (bandera4) {
				$('#image-4').css('display', 'none')
				bandera4 = !bandera4
			} else {
				$('#image-4').css('display', 'block')
				localStorage.setItem('slide357', 'true')
			validar()
				bandera4 = !bandera4
			}
		})
	} else {
		// modal 1
		$('.openModal3').on('mouseover', () => {
			$('#image-4').css('display', 'block')
			localStorage.setItem('slide357', 'true')
			validar()
			bandera4 = true
		})
		// cerra modal

		$('.openModal3').on('mouseleave', () => {
			$('#image-4').css('display', 'none')
			bandera4 = false
		})
	}
})
