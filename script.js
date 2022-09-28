var portfolio_menu = document.getElementById("portfolio")
var portfolio_button = document.getElementById("portfolio_button")

var isportfolio = false
portfolio_button.addEventListener("click", function(){
if(isportfolio==false) {
    portfolio_menu.classList.add("display_block")
    setTimeout(() => portfolio_menu.classList.add("showup"), 1);
    isportfolio = true} else {        
        portfolio_menu.classList.remove("showup")
        setTimeout(() => portfolio_menu.classList.remove("display_block"), 500);

    isportfolio = false;    
}})


function initDrawers() {
	// Get the containing elements
	containers = document.querySelectorAll(".container");
	setHeights();
	wireUpTriggers();
	window.addEventListener("resize", setHeights);
}

window.addEventListener("load", initDrawers);

function setHeights() {
	containers.forEach(container => {
		// Get content
		let content = container.querySelector(".content");
		// Needed if this is being fired after a resize
		content.removeAttribute("aria-hidden");
		// Height of content to show/hide
		let heightOfContent = content.getBoundingClientRect().height;
		// Set a CSS custom property with the height of content
		container.style.setProperty("--containerHeight", `${heightOfContent}px`);
		// Once height is read and set
		setTimeout(e => {
			container.classList.add("height-is-set");
			content.setAttribute("aria-hidden", "true");
		}, 0);
	});
}

function wireUpTriggers() {
	containers.forEach(container => {
		// Get each trigger element
		let btn = container.querySelector(".trigger");
		// Get content
		let content = container.querySelector(".content");
		btn.addEventListener("click", () => {
			container.setAttribute(
				"data-drawer-showing",
				container.getAttribute("data-drawer-showing") === "true" ? "false" : "true"
			);
			content.setAttribute(
				"aria-hidden",
				content.getAttribute("aria-hidden") === "true" ? "false" : "true"
			);
		});
	});
}

var main_slide_1 = document.getElementById("main_slide_1_href")
var main_slide_2 = document.getElementById("main_slide_2_href")

main_slide_1.href="/index.html#pont13092022"; 
main_slide_2.href="/index.html#pont13092022"; 