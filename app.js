const burgerIconBtn = document.getElementById("burger-icon-btn")
const navItems = document.getElementById("nav-items")

const viewMoreBtn = document.getElementById("view-more-btn")
const hiddenPosts = document.querySelectorAll(".hidden-post")

const navLink = document.getElementsByClassName(".nav-link")

const copyEmail = document.getElementById("copy-email")

let isHidden = true

burgerIconBtn.addEventListener("click", function() {
    navItems.classList.toggle("open")
    burgerIconBtn.classList.toggle("white-burger")
    console.log("open")
})

viewMoreBtn.addEventListener("click", function() {
   for (const hiddenPost of hiddenPosts) {
        if (isHidden) {
            hiddenPost.classList.toggle("hidden")
            viewMoreBtn.innerHTML = "View less..."
            console.log("blabla")
        }   
   }
})

copyEmail.addEventListener("click", function() {
    let myEmail = document.getElementById("myemail").innerHTML
    navigator.clipboard.writeText(myEmail)
})








    

