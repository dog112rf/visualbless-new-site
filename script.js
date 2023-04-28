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

var isnight = undefined

var themechanger = document.getElementById("themechanger")

var bodyid = document.getElementById("bodyid")

console.log(hours)

var theme = getCookie("theme")
var themechangedmanually = getCookie("themechangedmanually")

if (hours==21 || hours==22 || hours==23 || hours==0 || hours==1 || hours==2 || hours==3 || hours==4|| hours==5) {
	isnight = true
} else {
	isnight = false
}

console.log("isnight" + isnight)

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
	if (isnight==true) {
		if (themechangedmanually == false) {
			var totaltheme = "dark"
			bodyid.classList.remove("light")
			console.log("AUTO-CHANGED TO DARK THEME SUCESSFULLY")
		}
	} 
	if (isnight==true) {
		if (themechangedmanually == true) {

		}
	}{
	
	} if (isnight==false) {
		if (themechangedmanually == false) {
			var totaltheme = "light"
			bodyid.classList.add("light")
			console.log("AUTO-CHANGED TO LIGHT THEME SUCESSFULLY")
		}
	}
	if (isnight==false) {
		if (themechangedmanually == true) {
			
		}
	}
}


themechanger.addEventListener("click",function(){
	if (totaltheme == "dark") {
		deleteCookie("theme")
		bodyid.classList.add("light")
		totaltheme = "light"
		setCookie("theme","light")
		setCookie("themechangedmanually", true)
		console.log("CHANGED THEME TO LIGHT SUCESSFULLY")
	} else {
		bodyid.classList.remove("light")
		setCookie("theme","dark")
		totaltheme = "dark"
		setCookie("themechangedmanually", true)
		console.log("CHANGED THEME TO DARK SUCESSFULLY")
	}
})

var delcook = document.getElementById("deletecookie")

delcook.addEventListener("click", function(){
	deleteCookie("theme")
	deleteCookie("themechangedmanually")
	deleteCookie("expcontent")
	themechangedmanually = undefined
	console.log("DELETED COOKIES SUCESSFULLY")
})


var expcon = document.getElementById("explicitcontent")
var expconimg = document.getElementById("explicitcontentimg")

var censoreditems = document.getElementsByClassName("censored")


function checkexplicit() {
	if (getCookie("expcontent") == "false") {
		for(var i = 0; i < censoreditems.length; i++)
		{
		if(censoreditems[i].nodeType === 1){
			censoreditems[i].classList.remove("censoredactivated");
		}
		}
		expconimg.src = "/turnoffcontent.jpg"
		console.log("UNCENSORED ALL")
	} if (getCookie("expcontent") == "true")  {
		for(var i = 0; i < censoreditems.length; i++)
		{
		if(censoreditems[i].nodeType === 1){
			censoreditems[i].classList.add("censoredactivated");
		}
		}
		expconimg.src = "/turnoncontent.jpg"
		console.log("CENSORED ALL")
	}
}

if (getCookie("expcontent") == undefined) {
	setCookie("expcontent", "false")
}

checkexplicit()

expcon.addEventListener("click", function(){
	if (getCookie("expcontent") == "false") {
		setCookie("expcontent", "true")
		expconimg.src = "/turnoncontent.jpg"
		checkexplicit()
	} else {
		setCookie("expcontent", "false")
		expconimg.src = "/turnoffcontent.jpg"
		checkexplicit()
	}
})

var cover_toggle = document.getElementById("projects_cover_sort")
var brandbook_toggle = document.getElementById("projects_brandbook_sort")
var print_toggle = document.getElementById("projects_print_sort")
var decoration_toggle = document.getElementById("projects_decoration_sort")
var motion_toggle = document.getElementById("projects_motion_sort")
var motion_solo_toggle = document.getElementById("projects_motion_solo_sort")
var afisha_toggle = document.getElementById("projects_afisha_sort")

var cover_posts = document.querySelectorAll('[data-id="cover" ]')
var brandbook_posts = document.querySelectorAll('[data-id="brandbook" ]')
var print_posts = document.querySelectorAll('[data-id="print" ]')
var decoration_posts = document.querySelectorAll('[data-id="decoration" ]')
var motion_posts = document.querySelectorAll('[data-id="motion" ]')
var afisha_posts = document.querySelectorAll('[data-id="afisha" ]')

var cover_counter = document.getElementById("projects_cover_sort_counter")
var brandbook_counter = document.getElementById("projects_brandbook_sort_counter")
var print_counter = document.getElementById("projects_print_sort_counter")
var decoration_counter = document.getElementById("projects_decoration_sort_counter")
var motion_counter = document.getElementById("projects_motion_sort_counter")
var afisha_counter = document.getElementById("projects_afisha_sort_counter")

cover_counter.innerHTML = " " + "(" + cover_posts.length + ")"
brandbook_counter.innerHTML = " " + "(" + brandbook_posts.length + ")"
print_counter.innerHTML = " " + "(" + print_posts.length + ")"
decoration_counter.innerHTML = " " + "(" + decoration_posts.length + ")"
motion_counter.innerHTML = " " + "(" + motion_posts.length + ")"
afisha_counter.innerHTML = " " + "(" + afisha_posts.length + ")"

var is_cover_hidden = false
var is_brandbook_hidden = false
var is_print_hidden = false
var is_decoration_hidden = false
var is_motion_hidden = false
var is_afisha_hidden = false

cover_toggle.addEventListener("click",function(){
	for(var i = 0; i < cover_posts.length; i++)
	{
    if(cover_posts[i].nodeType === 1){
		cover_posts[i].classList.remove("display_none");
    }
	}

	for(var i = 0; i < brandbook_posts.length; i++)
	{
    if(brandbook_posts[i].nodeType === 1){
		brandbook_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < print_posts.length; i++)
	{
    if(print_posts[i].nodeType === 1){
		print_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < decoration_posts.length; i++)
	{
    if(decoration_posts[i].nodeType === 1){
		decoration_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < motion_posts.length; i++)
	{
    if(motion_posts[i].nodeType === 1){
		motion_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < afisha_posts.length; i++)
	{
    if(afisha_posts[i].nodeType === 1){
		afisha_posts[i].classList.add("display_none");
    }
	}
})

brandbook_toggle.addEventListener("click",function(){
	for(var i = 0; i < brandbook_posts.length; i++)
	{
    if(brandbook_posts[i].nodeType === 1){
		brandbook_posts[i].classList.remove("display_none");
    }
	}

	for(var i = 0; i < cover_posts.length; i++)
	{
    if(cover_posts[i].nodeType === 1){
		cover_posts[i].classList.add("display_none");
    }
	}


	for(var i = 0; i < print_posts.length; i++)
	{
    if(print_posts[i].nodeType === 1){
		print_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < decoration_posts.length; i++)
	{
    if(decoration_posts[i].nodeType === 1){
		decoration_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < motion_posts.length; i++)
	{
    if(motion_posts[i].nodeType === 1){
		motion_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < afisha_posts.length; i++)
	{
    if(afisha_posts[i].nodeType === 1){
		afisha_posts[i].classList.add("display_none");
    }
	}
})

print_toggle.addEventListener("click",function(){
	for(var i = 0; i < print_posts.length; i++)
	{
    if(print_posts[i].nodeType === 1){
		print_posts[i].classList.remove("display_none");
    }
	}

	for(var i = 0; i < brandbook_posts.length; i++)
	{
    if(brandbook_posts[i].nodeType === 1){
		brandbook_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < cover_posts.length; i++)
	{
    if(cover_posts[i].nodeType === 1){
		cover_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < decoration_posts.length; i++)
	{
    if(decoration_posts[i].nodeType === 1){
		decoration_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < motion_posts.length; i++)
	{
    if(motion_posts[i].nodeType === 1){
		motion_posts[i].classList.add("display_none");
    }
	}
	
	for(var i = 0; i < afisha_posts.length; i++)
	{
    if(afisha_posts[i].nodeType === 1){
		afisha_posts[i].classList.add("display_none");
    }
	}
})

decoration_toggle.addEventListener("click",function(){
	for(var i = 0; i < decoration_posts.length; i++)
	{
    if(decoration_posts[i].nodeType === 1){
		decoration_posts[i].classList.remove("display_none");
    }
	}

	for(var i = 0; i < print_posts.length; i++)
	{
    if(print_posts[i].nodeType === 1){
		print_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < brandbook_posts.length; i++)
	{
    if(brandbook_posts[i].nodeType === 1){
		brandbook_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < cover_posts.length; i++)
	{
    if(cover_posts[i].nodeType === 1){
		cover_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < motion_posts.length; i++)
	{
    if(motion_posts[i].nodeType === 1){
		motion_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < afisha_posts.length; i++)
	{
    if(afisha_posts[i].nodeType === 1){
		afisha_posts[i].classList.add("display_none");
    }
	}
})

motion_toggle.addEventListener("click",function(){
	for(var i = 0; i < motion_posts.length; i++)
	{
    if(motion_posts[i].nodeType === 1){
		motion_posts[i].classList.remove("display_none");
    }
	}

	for(var i = 0; i < brandbook_posts.length; i++)
	{
    if(brandbook_posts[i].nodeType === 1){
		brandbook_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < print_posts.length; i++)
	{
    if(print_posts[i].nodeType === 1){
		print_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < decoration_posts.length; i++)
	{
    if(decoration_posts[i].nodeType === 1){
		decoration_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < cover_posts.length; i++)
	{
    if(cover_posts[i].nodeType === 1){
		cover_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < afisha_posts.length; i++)
	{
    if(afisha_posts[i].nodeType === 1){
		afisha_posts[i].classList.add("display_none");
    }
	}
})

afisha_toggle.addEventListener("click",function(){
	for(var i = 0; i < afisha_posts.length; i++)
	{
    if(afisha_posts[i].nodeType === 1){
		afisha_posts[i].classList.remove("display_none");
    }
	}

	for(var i = 0; i < brandbook_posts.length; i++)
	{
    if(brandbook_posts[i].nodeType === 1){
		brandbook_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < print_posts.length; i++)
	{
    if(print_posts[i].nodeType === 1){
		print_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < decoration_posts.length; i++)
	{
    if(decoration_posts[i].nodeType === 1){
		decoration_posts[i].classList.add("display_none");
    }
	}

	for(var i = 0; i < cover_posts.length; i++)
	{
    if(cover_posts[i].nodeType === 1){
		cover_posts[i].classList.add("display_none");
    }
	}
	for(var i = 0; i < motion_posts.length; i++)
	{
    if(motion_posts[i].nodeType === 1){
		motion_posts[i].classList.add("display_none");
    }
	}

})