function debounce(func) {
	

	return function executedFunction(...args) {
		const later = () => {
			// clearTimeout(timeout)
			func(...args)
		}
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
	}
}