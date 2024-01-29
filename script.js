const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const main = document.querySelector("#main")
const curser = document.querySelector("#curser")
main.addEventListener("mousemove",function(dets){
    curser.style.left = dets.x+"px",
    curser.style.top = dets.y+"px"
});

 


let v1 = document.querySelector("#v1")
v1.addEventListener("mouseenter",()=>{
    v1.play()
})
v1.addEventListener("mouseleave",()=>{
    v1.pause();
})


let v2 = document.querySelector("#v2")
v2.addEventListener("mouseenter",()=>{
    v2.play()
})
v2.addEventListener("mouseleave",()=>{
    v2.pause();
})



let v3 = document.querySelector("#v3")
v3.addEventListener("mouseenter",()=>{
    v3.play()
})
v3.addEventListener("mouseleave",()=>{
    v3.pause();
})


let v4 = document.querySelector("#v4")
v4.addEventListener("mouseenter",()=>{
    v4.play()
})
v4.addEventListener("mouseleave",()=>{
    v4.pause();
})



let v5 = document.querySelector("#v5")
v5.addEventListener("mouseenter",()=>{
    v5.play()
})
v5.addEventListener("mouseleave",()=>{
    v5.pause();
})




let v6 = document.querySelector("#v6")
v6.addEventListener("mouseenter",()=>{
    v6.play()
})
v6.addEventListener("mouseleave",()=>{
    v6.pause();
})


let v7 = document.querySelector("#v7")
v7.addEventListener("mouseenter",()=>{
    v7.play()
})
v7.addEventListener("mouseleave",()=>{
    v7.pause();
})


let v8 = document.querySelector("#v8")
v8.addEventListener("mouseenter",()=>{
    v8.play()
})
v8.addEventListener("mouseleave",()=>{
    v8.pause();
})



let v9 = document.querySelector("#v9")
v9.addEventListener("mouseenter",()=>{
    v9.play()
})
v9.addEventListener("mouseleave",()=>{
    v9.pause();
})



















