function rem(){
let ele = document.getElementById("two")
if(watch.matches){
    ele.remove()
}
}



var watch = window.matchMedia("(max-width:2000px)")
rem()
watch.addListener(rem)

// var watch2 = window.matchMedia("(max-width:1000px)")
// watch2.addListener(rem)