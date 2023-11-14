let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let mobileNav = document.querySelector(".mobile-nav");
let mobileBody = document.querySelector(".overlay");
let bookmarkBtn = document.querySelector(".bookmark-btn");
let bookmarkText = document.querySelector(".bookmark-text");
let bookmarkOverlay = document.querySelector(".bookmark-icon-overlay");
let bookmarkIcon = document.querySelector(".bookmark-icon");
let mobileBookmarkBtn = document.querySelector(".mobile-bookmark-icon-overlay");
let mobileBookmarkText = document.querySelector(".mobile-bookmark-text");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let span4 = document.querySelector(".span4");
let span5 = document.querySelector(".span5");
let span6 = document.querySelector(".span6");
let span7 = document.querySelector(".span7");
let span8 = document.querySelector(".span8");
let span9 = document.querySelector(".span9");
let span10 = document.querySelector(".span10");
bookmarkText.innerText = "Bookmark";
bookmarkOverlay.style.opacity = "0";
mobileMenuBtn.addEventListener("click", () => {
	mobileMenuBtn.classList.toggle("mobile-menu-close-btn");
	mobileNav.classList.toggle("mobile-nav-show");
	mobileBody.classList.toggle("mobile-body");
});
bookmarkBtn.addEventListener("click", () => {
	bookmarkBtn.classList.toggle("bookmark-btn-clicked");
	if(bookmarkText.innerText === "Bookmark") {
		bookmarkText.innerText = "Bookmarked";
	} else {
		bookmarkText.innerText = "Bookmark";
	}
	if(bookmarkOverlay.style.opacity === "0") {
		bookmarkOverlay.style.opacity = "1";
	} else {
		bookmarkOverlay.style.opacity = "0";
	}
});
mobileBookmarkBtn.addEventListener("click", () => {
	mobileBookmarkBtn.classList.toggle("mobile-bookmark-btn-clicked");
});
function animate() {
	setTimeout(() => {
		mobileBookmarkText.style.width = "0";
		mobileBookmarkText.style.height = "0";
		mobileBookmarkText.style.boxShadow = "none";
		span1.innerText = "";
		span2.innerText = "";
		span3.innerText = "";
		span4.innerText = "";
		span5.innerText = "";
		span6.innerText = "";
		span7.innerText = "";
		span8.innerText = "";
		span9.innerText = "";
		span10.innerText = "";
	}, 1500);
	if(mobileBookmarkBtn.classList.contains("mobile-bookmark-btn-clicked")) {
		mobileBookmarkText.style.width = "56px";
		mobileBookmarkText.style.height = "230px";
		mobileBookmarkText.style.boxShadow = "0 0 3px black";
		span1.innerText = "B";
		span2.innerText = "O";
		span3.innerText = "O";
		span4.innerText = "K";
		span5.innerText = "M";
		span6.innerText = "A";
		span7.innerText = "R";
		span8.innerText = "K";
		span9.innerText = "E";
		span10.innerText = "D";
	} else {
		mobileBookmarkText.style.width = "0";
		mobileBookmarkText.style.height = "0";
		mobileBookmarkText.style.boxShadow = "none";
		span1.innerText = "";
		span2.innerText = "";
		span3.innerText = "";
		span4.innerText = "";
		span5.innerText = "";
		span6.innerText = "";
		span7.innerText = "";
		span8.innerText = "";
		span9.innerText = "";
		span10.innerText = "";
	}
}
mobileBookmarkBtn.addEventListener("click", animate);