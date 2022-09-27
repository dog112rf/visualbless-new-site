var main_page = document.getElementById("pagesystem--main_page")
var credits_page = document.getElementById("pagesystem--credits_page")
var portfolio_covers_page = document.getElementById("pagesystem--portfolio_covers_page")

var main_page_button = document.getElementById("pagesystem--main_page_button")
var credits_page_button = document.getElementById("pagesystem--credits_button")
var portfolio_covers_button = document.getElementById("pagesystem--portfolio_covers_button")

credits_page.classList.add("pagesystem--hidden_display_page")
credits_page.classList.add("pagesystem--hidden_page")

portfolio_covers_page.classList.add("pagesystem--hidden_display_page")
portfolio_covers_page.classList.add("pagesystem--hidden_page")

main_page_button.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    credits_page.classList.add("pagesystem--hidden_page")
    portfolio_covers_page.classList.add("pagesystem--hidden_page")
    
    setTimeout(() => {main_page.classList.remove("pagesystem--hidden_display_page")}, 500)

    setTimeout(() => {
        /* Hide other pages (display) */
    
        credits_page.classList.add("pagesystem--hidden_display_page")
        portfolio_covers_page.classList.add("pagesystem--hidden_display_page")
    
        /* Show page we go to */
        main_page.classList.remove("pagesystem--hidden_page")
        main_page.classList.add("pagesystem--active_page")
        main_page.classList.remove("pagesystem--hidden_display_page")
        main_page.classList.add("pagesystem--active_display_page")}, 1000);
})

credits_page_button.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    main_page.classList.add("pagesystem--hidden_page")    
    portfolio_covers_page.classList.add("pagesystem--hidden_page")
    
    setTimeout(() => {credits_page.classList.remove("pagesystem--hidden_display_page")}, 500)

    setTimeout(() => {
        /* Hide other pages (display) */
    
        main_page.classList.add("pagesystem--hidden_display_page")
        portfolio_covers_page.classList.add("pagesystem--hidden_display_page")
    
        /* Show page we go to */
        credits_page.classList.remove("pagesystem--hidden_page")
        credits_page.classList.add("pagesystem--active_page")
        credits_page.classList.remove("pagesystem--hidden_display_page")
        credits_page.classList.add("pagesystem--active_display_page")}, 1000);
})

portfolio_covers_button.addEventListener("click", function(){
    /* Hide other pages (opacity) */
    main_page.classList.add("pagesystem--hidden_page")    
    credits_page.classList.add("pagesystem--hidden_page")
    
    setTimeout(() => {portfolio_covers_page.classList.remove("pagesystem--hidden_display_page")}, 500)

    setTimeout(() => {
        /* Hide other pages (display) */
    
        main_page.classList.add("pagesystem--hidden_display_page")
        credits_page.classList.add("pagesystem--hidden_display_page")
    
        /* Show page we go to */
        portfolio_covers_page.classList.remove("pagesystem--hidden_page")
        portfolio_covers_page.classList.add("pagesystem--active_page")
        portfolio_covers_page.classList.remove("pagesystem--hidden_display_page")
        portfolio_covers_page.classList.add("pagesystem--active_display_page")}, 1000);
})