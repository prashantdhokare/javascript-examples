function debounce(mainFunction, wait = 500) {
	let timeout;
	return function returnFunction(arg) {
	  let afterTimeout = () => {
		clearTimeout(timeout);
		mainFunction(arg);
	  };
	  clearTimeout(timeout);
	  timeout = setTimeout(afterTimeout, wait);
	};
};
