let thanksContainer = document.querySelector(".thanks-container");
let continueBtn = document.querySelectorAll(".pledge-continue-btn");
let thanksBtn = document.querySelector(".thanks-btn");
let media = window.matchMedia("(max-width: 800px)");
continueBtn.forEach(btn => {
	btn.addEventListener("click", () => {
		pledgeContainer.classList.remove("pledge-container-visible");
		thanksContainer.classList.add("thanks-container-show");
		thanksContainer.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
		function myfunc(media) {
			if(media.matches) {
				thanksContainer.scrollIntoView({
					behavior: "smooth"
				});	
			}
		}
		myfunc(media);
		media.addListener(myfunc);
	});
});
thanksBtn.addEventListener("click", () => {
	modalOverlay.classList.remove("pledge-container-show");
	thanksContainer.classList.remove("thanks-container-show");
});