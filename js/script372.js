const conteo = localStorage.getItem('conteo')

window.addEventListener('resize', () => {
	if (parseInt(conteo) > 8) {
		const container = document.querySelector('.container')

		document.querySelector('#texto-felicidades').innerText = total

		document.querySelector('#texto-felicidades').style.fontSize = `${
			container.clientHeight / 5
		}px`

		// document.querySelector('.intentos')
		// .style.fontSize = `${container.clientHeight / 18.7}px`
	} else {
		const container = document.querySelector('.container')

		document.querySelector('.texto').style.fontSize = `${
			container.clientHeight / 5
		}px`

		// document.querySelector('.intentos')
		// .style.fontSize = `${container.clientHeight / 18.7}px`
	}
})

$(document).ready(function () {
	if (parseInt(conteo) > 8) {
		$('#felicidades').show()
		document.getElementById('texto-felicidades').textContent = conteo
		const container = document.querySelector('.container')

		document.querySelector('#texto-felicidades').style.fontSize = `${
			container.clientHeight / 5
		}px`

		// document.querySelector('.intentos')
		// .style.fontSize = `${container.clientHeight / 18.7}px`
		$('#intentalo').hide()
	} else {
		$('#felicidades').hide()
		document.getElementById('texto').textContent = conteo
		$('#intentalo').show()
		let vidas = localStorage.getItem('vidas')
		if (parseInt(vidas) - 1 === 0) {
			localStorage.setItem('block', new Date())
		} else {
			localStorage.setItem('vidas', parseInt(vidas) - 1)
		}
		const container = document.querySelector('.container')

		document.querySelector('.texto').style.fontSize = `${
			container.clientHeight / 5
		}px`

		// document.querySelector('.intentos')
		// .style.fontSize = `${container.clientHeight / 18.7}px`
	}
})
