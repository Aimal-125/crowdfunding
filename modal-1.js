let projectBtn = document.querySelector(".project-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let pledgeContainer = document.querySelector(".pledge-container");
let pledgeCloseBtn = document.querySelector(".pledge-close-btn");
let pledges = document.querySelectorAll(".pledges");
let radio1 = document.querySelector("#radio-1");
let radioBtn1 = document.querySelector(".radio-btn-1");
let radio2 = document.querySelector("#radio-2");
let radioBtn2 = document.querySelector(".radio-btn-2");
let radio3 = document.querySelector("#radio-3");
let radioBtn3 = document.querySelector(".radio-btn-3");
projectBtn.addEventListener("click", () => {
	modalOverlay.classList.add("pledge-container-show");
	pledgeContainer.classList.add("pledge-container-visible");
	if(modalOverlay.classList.contains("pledge-container-show")) {
		pledgeCloseBtn.setAttribute("tabindex", "0");
	}
});
pledgeCloseBtn.addEventListener("click", () => {
	modalOverlay.classList.remove("pledge-container-show");
	pledgeContainer.classList.remove("pledge-container-visible");
	pledgeCloseBtn.removeAttribute("tabindex", "0");
	radioBtn1.classList.remove("radio-border1");
	radioBtn2.classList.remove("radio-border2");
	radioBtn3.classList.remove("radio-border3");
	radio1.checked = false;
	radio2.checked = false;
	radio3.checked = false;
	hiddenDiv1.classList.remove("hidden-div-show");
	pledge1.style.outline = "none";
	hiddenDiv2.classList.remove("hidden-div-show");
	pledge2.style.outline = "none";
	hiddenDiv3.classList.remove("hidden-div-show");
	pledge3.style.outline = "none";
});
pledgeCloseBtn.addEventListener("keydown", () => {
	let closeKey = event.key;
	if(closeKey === "Enter") {
		modalOverlay.classList.remove("pledge-container-show");
		pledgeContainer.classList.remove("pledge-container-visible");
		pledgeCloseBtn.removeAttribute("tabindex", "0");
		radioBtn1.classList.remove("radio-border1");
		radioBtn2.classList.remove("radio-border2");
		radioBtn3.classList.remove("radio-border3");
		radio1.checked = false;
		radio2.checked = false;
		radio3.checked = false;
		hiddenDiv1.classList.remove("hidden-div-show");
		pledge1.style.outline = "none";
		hiddenDiv2.classList.remove("hidden-div-show");
		pledge2.style.outline = "none";
		hiddenDiv3.classList.remove("hidden-div-show");
		pledge3.style.outline = "none";
	}
});
window.addEventListener("keydown", () => {
	let key = event.key;
	if(key === "Escape") {
		modalOverlay.classList.remove("pledge-container-show");
		pledgeContainer.classList.remove("pledge-container-visible");
		pledgeCloseBtn.removeAttribute("tabindex", "0");
		radioBtn1.classList.remove("radio-border1");
		radioBtn2.classList.remove("radio-border2");
		radioBtn3.classList.remove("radio-border3");
		radio1.checked = false;
		radio2.checked = false;
		radio3.checked = false;
		hiddenDiv1.classList.remove("hidden-div-show");
		pledge1.style.outline = "none";
		hiddenDiv2.classList.remove("hidden-div-show");
		pledge2.style.outline = "none";
		hiddenDiv3.classList.remove("hidden-div-show");
		pledge3.style.outline = "none";
	}
});
radio1.addEventListener("focus", () => {
	radioBtn1.classList.add("radio-border1");
});
radio1.addEventListener("focusout", () => {
	radioBtn1.classList.remove("radio-border1");
});
radio1.addEventListener("keydown", () => {
	let key = event.key;
	if(key === "Enter") {
		radio1.click();
		radio2.checked = false;
		radio3.checked = false;
	}
});
radio2.addEventListener("focus", () => {
	radioBtn2.classList.add("radio-border2");
});
radio2.addEventListener("focusout", () => {
	radioBtn2.classList.remove("radio-border2");
});
radio2.addEventListener("keydown", () => {
	let key = event.key;
	if(key === "Enter") {
		radio2.click();
		radio1.checked = false;
		radio3.checked = false;
	}
});
radio3.addEventListener("focus", () => {
	radioBtn3.classList.add("radio-border3");
});
radio3.addEventListener("focusout", () => {
	radioBtn3.classList.remove("radio-border3");
});
radio3.addEventListener("keydown", () => {
	let key = event.key;
	if(key === "Enter") {
		radio3.click();
		radio1.checked = false;
		radio2.checked = false;
	}
});

let hiddenDiv1 = document.querySelector(".hidden-div-1");
let hiddenDiv2 = document.querySelector(".hidden-div-2");
let hiddenDiv3 = document.querySelector(".hidden-div-3");
let pledge1 = document.querySelector(".pledge1");
let pledge2 = document.querySelector(".pledge2");
let pledge3 = document.querySelector(".pledge3");
radio1.addEventListener("click", () => {
	hiddenDiv1.classList.add("hidden-div-show");
	hiddenDiv2.classList.remove("hidden-div-show");
	hiddenDiv3.classList.remove("hidden-div-show");
	pledge1.style.outline = "2px solid hsl(176, 50%, 47%)";
	pledge2.style.outline = "none";
	pledge3.style.outline = "none";
	radio2.checked = false;
	radio3.checked = false;
});
radio2.addEventListener("click", () => {
	hiddenDiv2.classList.add("hidden-div-show");
	hiddenDiv1.classList.remove("hidden-div-show");
	hiddenDiv3.classList.remove("hidden-div-show");
	pledge2.style.outline = "2px solid hsl(176, 50%, 47%)";
	pledge1.style.outline = "none";
	pledge3.style.outline = "none";
	radio1.checked = false;
	radio3.checked = false;
});
radio3.addEventListener("click", () => {
	hiddenDiv3.classList.add("hidden-div-show");
	hiddenDiv1.classList.remove("hidden-div-show");
	hiddenDiv2.classList.remove("hidden-div-show");
	pledge3.style.outline = "2px solid hsl(176, 50%, 47%)";
	pledge1.style.outline = "none";
	pledge2.style.outline = "none";
	radio1.checked = false;
	radio2.checked = false;
});