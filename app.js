// Concept 3: Async-Await
// async function always return promise
/*
// A. Basic example
async function hello() {
	console.log("hello there!");
}

// B. Real world analogy 
function api() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("weather data");
			resolve("bye");
		}, 2000);
	});
}

async function getWeatherData() {
	await api();
}
*/

// C. More clarified version
function getData(dataId) {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("data", dataId);
			resolve("Response");
		}, 2000);
	});
}

//Async-await
async function getAllData() {
	await getData(1);
	await getData(2);
	await getData(3);
	await getData(4);
}

// Concept 2 : Promises

// A. Promise Understanding
/*
let promise = new Promise((resolve, reject) => {
	console.log("I am a Promise");
	reject("fatal error!");
});
*/

// B. Promise example
/*
const getPromise = () => {
	return new Promise((resolve, reject) => {
		console.log("I am promise");
		resolve("success!");
		// reject("some error");
	});
};

// Object of Promise 
let promise = getPromise();
 promise.then((res) => {
 	console.log("promise fulfilled", res);
 });

promise.catch((err) => {
console.log("rejected", err);
});
*/

// Promise chain (Example - #1)
/*
function asyncFunc1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("data 1");
			resolve("success");
		}, 5000);
	});
}

function asyncFunc2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("data 2");
			resolve("success");
		}, 4000);
	});
}

console.log("fetching data 1....");

asyncFunc1().then((res) => {
	// console.log(res);
	console.log("fetching data 2....");
	asyncFunc2().then((res) => {
		// console.log(res);
	});
});
*/

// 2. Promise chain (Example - #1)
/*
function getData(dataId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("data", dataId);
			// resolve("Fulfilled");
			resolve("success");
		}, 5000);
	});
}

console.log("Fetching data 1...");
getData(1)
	.then((res) => {
		return getData(2);
	})
	.then((res) => {
		return getData(3);
	})
	.then((res) => {
		console.log(res);
	});
*/

// Concept 1: Callbacks hell / Nested Callbacks

/*
function getData(dataId, getNextData) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// console.log("data", dataId);
			// resolve("Fulfilled");
			reject("Error");
			if (getNextData) {
				getNextData();
			}
		}, 5000);
	});
*/

// Callback hell - nested callbacks
/*
getData(1, () => {
	console.log("getting data 2 .... ");
	getData(2, () => {
		console.log("getting data 3 .... ");
		getData(3, () => {
			console.log("getting data 4 .... ");
			getData(4);
		});
	});
});
*/

// setTimeout()

/* const hello = () => {
	console.log("hello");
};

setTimeout(hello, 4000); */

// Callback Example
/*
function sum(a, b) {
	console.log(a + b);
}

function calculator(a, b, sumCallback) {
	sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
	console.log(a + b);
});
̀*/
