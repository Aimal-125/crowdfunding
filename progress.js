let amount = document.querySelector(".backed-amount");
let number = 78000;
let backers = document.querySelector(".backers-numbers");
let backersNumber = 5007;
let pledgeAmount25 = document.querySelector("#pledge-amount-25");
let pledgeAmount75 = document.querySelector("#pledge-amount-75");
let pledgeBtn2 = document.querySelector(".pledge-continue-btn-2");
let pledgeBtn3 = document.querySelector(".pledge-continue-btn-3");
let progressBar = document.querySelector("progress");
let max = 100000;
let conversion = max.toLocaleString("en-Us", {
	style: "currency",
	"currency": "USD",
	maximumFractionDigits: 0
});

amount.innerText = number.toLocaleString("en-Us", {
	style: "currency",
	"currency": "USD",
	maximumFractionDigits: 0
});
backers.innerText = backersNumber.toLocaleString("en-Us");

pledgeBtn2.addEventListener("click", () => {
	if(parseInt(Math.abs(pledgeAmount25.value)) < 25) {
		pledgeAmount25.value = 25;
	}
	let sum = parseInt(Math.abs(pledgeAmount25.value)) + number;
	amount.innerText = sum.toLocaleString("en-Us", {
		style: "currency",
		"currency": "USD",
		maximumFractionDigits: 0
	});
	if(isNaN(sum)) {
		amount.innerText = number.toLocaleString("en-Us", {
			style: "currency",
			"currency": "USD",
			maximumFractionDigits: 0
		});
	}
	if(sum > 100000) {
		amount.innerText = 100000;
	}
	let sum2 = backersNumber + 1;
	backers.innerText = sum2.toLocaleString("en-Us");
	pledgeBtn3.classList.remove("b-3");
	pledgeBtn2.classList.add("b-2");
});
pledgeBtn3.addEventListener("click", () => {
	if(parseInt(Math.abs(pledgeAmount75.value)) < 75) {
		pledgeAmount75.value = 75;
	}
	let sum = parseInt(Math.abs(pledgeAmount75.value)) + number;
	amount.innerText = sum.toLocaleString("en-Us", {
		style: "currency",
		"currency": "USD",
		maximumFractionDigits: 0
	});
	if(isNaN(sum)) {
		amount.innerText = number.toLocaleString("en-Us", {
			style: "currency",
			"currency": "USD",
			maximumFractionDigits: 0
		});
	}
	if(sum > 100000) {
		amount.innerText = 100000;
	}
	let sum2 = backersNumber + 1;
	backers.innerText = sum2.toLocaleString("en-Us");
	pledgeBtn2.classList.remove("b-2");
	pledgeBtn3.classList.add("b-3");
});

thanksBtn.addEventListener("click", () => {
	if(pledgeBtn2.classList.contains("b-2")) {
		progressBar.value += parseInt(Math.abs(pledgeAmount25.value));	
	}
	if(pledgeBtn3.classList.contains("b-3")) {
		progressBar.value += parseInt(Math.abs(pledgeAmount75.value));
	}
	if(progressBar.value === 100000) {
		amount.innerText = conversion;
	}
});