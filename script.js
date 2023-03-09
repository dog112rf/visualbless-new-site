// возвращает куки с указанным name,
// или undefined, если ничего не найдено

  function setCookie(name, value, options = {}) {

	options = {
	  path: '/',
	  // при необходимости добавьте другие значения по умолчанию
	  ...options
	};
  
	if (options.expires instanceof Date) {
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) {
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
	  if (optionValue !== true) {
		updatedCookie += "=" + optionValue;
	  }
	}
  
	document.cookie = updatedCookie;
  }

  function deleteCookie(name) {
	setCookie(name, "", {
	  'max-age': -1
	})
  }

  function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
  }

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
var main_slide_3 = document.getElementById("main_slide_3_href")

main_slide_1.href="/index.html#latestnews"; 
main_slide_2.href="/index.html#latestnews"; 
main_slide_3.href="/index.html#latestnews"; 

var date = new Date()

var hours = date.getHours()

var themechanger = document.getElementById("themechanger")

var bodyid = document.getElementById("bodyid")

console.log(hours)

var theme = getCookie("theme")
var themechangedmanually = getCookie("themechangedmanually")


if (themechangedmanually == undefined) {
	themechangedmanually = false
}

if (getCookie("theme") == "dark") {
	document.body.classList.remove("light")
	totaltheme = "dark"
} else {
	document.body.classList.add("light")
	totaltheme = "light"
}

if (theme == undefined) {
	if (hours>21 && themechangedmanually == false) {
		var totaltheme = "dark"
		bodyid.classList.remove("light")
	
	} if (hours>21 && themechangedmanually == true) {
	
	} if (hours<21 && themechangedmanually == false) {
		var totaltheme = "light"
		bodyid.classList.add("light")

	} if (hours<21 && themechangedmanually == true) {
	
	}
}


themechanger.addEventListener("click",function(){
	if (totaltheme == "dark") {
		deleteCookie("theme")
		bodyid.classList.add("light")
		totaltheme = "light"
		setCookie("theme","light")
		setCookie("themechangedmanually", true)
	} else {
		bodyid.classList.remove("light")
		setCookie("theme","dark")
		totaltheme = "dark"
		setCookie("themechangedmanually", true)
	}
})