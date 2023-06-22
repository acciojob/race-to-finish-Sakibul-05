window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let randomBw1000to5000 = Math.floor(Math.random() * ((5000-1000)+1) + 1000);
let prom1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("first promise resolved");
	},randomBw1000to5000)
})
let prom2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("second promise resolved");
	},randomBw1000to5000)
})
let prom3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("third promise resolved");
	},randomBw1000to5000)
})
let prom4 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fourth promise resolved");
	},randomBw1000to5000)
})
let prom5 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("fifth promise resolved");
	},randomBw1000to5000)
})

promises.push(prom1);
promises.push(prom2);
promises.push(prom3);
promises.push(prom4);
promises.push(prom5);

Promise.any(promises).then((data)=>{
	let output = document.getElementById("output");
	output.innerText = data;
});
 










































































