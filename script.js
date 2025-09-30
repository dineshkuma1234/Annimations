// gsap.to("#gsap",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"yellow",
//     rotate:360,
//     borderRadius:"50%",
//     scale:0.1,

// })

gsap.from("#gsap",{
    x:1000,
    duration:2,
    delay:1,
    backgroundColor:"yellow",
    rotate:360,
    borderRadius:"50%",
    scale:0.1,

})

gsap.from("h2",{
    y:300,
    opacity:0,//initially it is 0 then it will come to 1 
    duration:2,
    delay:1,
    stagger:0.5,//it will come one by one after 0.5 sec
})

gsap.to(".circle",{
    x:1200,
    duration:2,
    delay:1,
    borderRadius:"10px",
    repeat:-1,//it will repeat infinite times
    yoyo:true,//it will come back to its original position
    rotate:360,
})

var tl = gsap.timeline() //it will create a timeline

tl.to("#box1",{
    x:1200,
    duration:2,
    // delay:1,
})

tl.to("#box2",{
    x:1200,
    duration:2,
    // delay:3,
    rotate:360
})

tl.to("#box3",{
    x:1200,
    duration:2,
    // delay:3,
    rotate:-360
})