//------------------------------------------------------------------------
var minicard1 = document.querySelector(".box1")
minicard1.addEventListener("mouseout",()=>{
    console.log("i went")
    var card = document.querySelector(".grad")
    card.classList.remove("animation")
    card.classList.add("animationremove")  
})

minicard1.addEventListener("mouseover",()=>{
    console.log("i came");
    var card = document.querySelector(".grad")
    card.classList.remove("animationremove")  
    card.classList.add("animation")
})
//------------------------------------------------------------------------


//------------------------------------------------------------------------
var minicard2 = document.querySelector(".box2")
minicard2.addEventListener("mouseout",()=>{
    var card = document.querySelector(".college")
    card.classList.remove("animation")
    card.classList.add("animationremove")  
})

minicard2.addEventListener("mouseover",()=>{
    var card = document.querySelector(".college")
    card.classList.remove("animationremove")  
    card.classList.add("animation")
})
//------------------------------------------------------------------------


//------------------------------------------------------------------------
var minicard3 = document.querySelector(".box3")
minicard3.addEventListener("mouseout",()=>{
    var card = document.querySelector(".school")
    card.classList.remove("animation")
    card.classList.add("animationremove")  
})

minicard3.addEventListener("mouseover",()=>{
    var card = document.querySelector(".school")
    card.classList.remove("animationremove")  
    card.classList.add("animation")
})
//------------------------------------------------------------------------

window.addEventListener("load", (event) => {
    let lineanimation = document.querySelector("#line")
    lineanimation.classList.add("lineanimation")

    let box1animation = document.querySelector("#box1")
    box1animation.classList.add("box1animation")

    let box2animation = document.querySelector("#box2")
    box2animation.classList.add("box2animation")

    let box3animation = document.querySelector("#box3")
    box3animation.classList.add("box3animation")
});