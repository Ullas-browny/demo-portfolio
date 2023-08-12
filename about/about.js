function rem(){
let ele = document.getElementById("two")
if(watch.matches){
    ele.remove()
}
}

var watch = window.matchMedia("(max-width:460px)")
rem()
watch.addEventListener(rem)