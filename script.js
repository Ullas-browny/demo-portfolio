
if (window.matchMedia("(max-width: 700px)").matches){
    console.log("working");


    var button = document.getElementById("anim");
    var sidebar= document.getElementById("sidebar");
    var text = "X";



var counter=2;
    function something(){
        console.log(counter);
        if(counter%2==0){
        button.style.fontSize="1.05rem";
        button.innerHTML=text;
        sidebar.classList.remove('stayoutsidebar');
        button.classList.remove('stayout')
        sidebar.classList.add('animate1');
        button.classList.add('animateout1');
        setTimeout(function(){
            sidebar.classList.remove('animate1');
            button.classList.remove('animateout1');
            sidebar.classList.add('stayinsidebar');
            button.classList.add('stayin');
        },300);

        }
        else{
        button.style.fontSize="0.9rem";
        button.innerHTML="☰";
        sidebar.classList.remove('stayinsidebar');
        button.classList.remove('stayin');
        sidebar.classList.add('animate2');
        button.classList.add('animateout2');
        setTimeout(function(){
            sidebar.classList.remove('animate2');
            button.classList.remove('animateout2');
            sidebar.classList.add('stayoutsidebar');
            button.classList.add('stayout');      
        },300);

        }
        counter++;
    }
button.addEventListener('click',something)



        
}
function about(){
    window.location.href="./about/about.html"
}
function education(){
    window.location.href="./education/index.html"
}

function ig(){
    window.location.href = "https://www.instagram.com/_._zooie_._/"
}
function git(){
    window.location.href = "https://github.com/Ullas-browny"
}
function li(){
    window.location.href = "https://www.linkedin.com/in/ullas-a-6b8219253/"
}
function em(){
    window.location.href = "mailto:ullasrrce@gmail.com?"
}


function resume(){
    window.location.href = "https://drive.google.com/u/0/uc?id=1plv907uN_CC4kPYqPG2iSB6bEayNhgF5&export=download"
}

function feedback(){
    window.location.href = "./feedback/fb.html"
}

