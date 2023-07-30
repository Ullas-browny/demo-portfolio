let form = document.querySelector("form")
  

window.onload=()=>{
    axios.get("http://localhost:3000/fedbck/getData")
    .then((response)=>{
        const items = response.data
        items.forEach(ele => {

            let parent = document.querySelector(".feedbackcontainer")
            let div = document.createElement("div")
            div.classList.add("bubble") 
            parent.appendChild(div)

            let p = document.createElement("p")
            div.appendChild(p)

            let img = document.createElement("img")
            img.src="quotes.png"
            p.appendChild(img)

            let name = document.createElement("div")
            name.classList.add("name")
            p.appendChild(name)

            let text = document.createTextNode(ele.data)    
            div.appendChild(text)
            
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let text = document.querySelector("#text").value

    axios.post("http://localhost:3000/fedbck",{data:text})
    .then((Response)=>{
        document.querySelector("#text").value = ""
        console.log("success")
        axios.get("http://localhost:3000/fedbck/getData")
        .then((response)=>{
            const items = response.data
            items.forEach(ele => {
                let parent = document.querySelector(".feedbackcontainer")
                let div = document.createElement("div")
                div.classList.add("bubble") 
                let text = document.createTextNode(ele.data)    
                div.appendChild(text)
                parent.appendChild(div)
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

let parent = document.querySelector(".feedbackcontainer")
let div = document.createElement("div")
div.classList.add("bubble") 
parent.appendChild(div)

let p = document.createElement("p")
div.appendChild(p)

let img = document.createElement("img")
img.src="quotes.png"
p.appendChild(img)

let name = document.createElement("div")
let word = document.createTextNode("Anonymous")
name.appendChild(word)
name.classList.add("name")
p.appendChild(name)


let text = document.createTextNode("this is a demo feedback given by me to myself to check the functionality of code")    
div.appendChild(text)

