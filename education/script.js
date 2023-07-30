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