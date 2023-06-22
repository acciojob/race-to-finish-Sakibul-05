window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let randomOne = Math.floor(Math.random() * ((5-1)+1) + 1);
let randomTwo = Math.floor(Math.random() * ((5-1)+1) + 1);
let randomThree = Math.floor(Math.random() * ((5-1)+1) + 1);
let randomFour = Math.floor(Math.random() * ((5-1)+1) + 1);
let randomFive = Math.floor(Math.random() * ((5-1)+1) + 1);
console.log(randomOne*1000)
console.log(randomTwo*1000)
console.log(randomThree*1000)
console.log(randomFour*1000)
console.log(randomFive*1000)

//create five promise objects
let prom1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("first promise resolved");
	},randomOne*1000)
})
let prom2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("second promise resolved");
	},randomTwo*1000)
})
let prom3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("third promise resolved");
	},randomThree*1000)
})
let prom4 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fourth promise resolved");
	},randomFour*1000)
})
let prom5 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fifth promise resolved");
	},randomFive*1000)
})

//push each promise object to promises array
promises.push(prom1);
promises.push(prom2);
promises.push(prom3);
promises.push(prom4);
promises.push(prom5);

//Promise.any([prom1,prom2,...])--> return a new Promise. 
//This returned Promise get fulfilled if any of array of 
//promises get fulfilled, with the first fulfilment value
Promise.any(promises).then((data)=>{
	let output = document.getElementById("output");
	output.innerText = data;
	 
});




































































