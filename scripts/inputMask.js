const rootSelector = '[data-js-input-mask]'

class InputMask {
	constructor(rootElement) {
		this.rootElement = rootElement
		this.init()
	}

	init() {
		const isLibReady = typeof window.IMask !== 'undefined'
		window.IMask(this.rootElement, {
			mask: this.rootElement.dataset.jsInputMask,
		})
		if (isLibReady) {
		} else {
			console.error('Библиотека "IMask" не подключена!')
		}
	}
}

class InputMaskCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach(element => {
			new InputMask(element)
		})
	}
}

export default InputMaskCollection
