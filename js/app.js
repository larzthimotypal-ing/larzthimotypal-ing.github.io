//resizing viewbox of hero svg

let heroSvg = document.querySelector("#hero-svg")

//getting the viewport width
let screenWidth, screenHeight

window.onresize = window.onload = _ => {
    screenWidth = window.innerWidth
    if(screenWidth > 1024){
        heroSvg.setAttribute("viewBox","0 0 100 50")
    }else if(screenWidth > 768){
        heroSvg.setAttribute("viewBox","10 0 80 50")
    }else if(screenWidth > 500){
        heroSvg.setAttribute("viewBox","20 0 60 50")
    }else{
        heroSvg.setAttribute("viewBox","30 0 40 50")
    }
}


