// callback hell example

function getData(dataId, getNextData) {
	setTimeout(() => {
		console.log("data", dataId);
		if (getNextData) {
			getNextData();
		}
	}, 2000);
}

getData(1, () => {
	getData(2, () => {
		getData(3);
	});
});

// setTimeout()

/* const hello = () => {
	console.log("hello");
};

setTimeout(hello, 4000); */

// Callback Example
/* function sum(a, b) {
	console.log(a + b);
}

function calculator(a, b, sumCallback) {
	sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
	console.log(a + b);
}); */
