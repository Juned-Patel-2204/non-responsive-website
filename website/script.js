
 let crsr=document.querySelector("#cursor")
 let blur=document.querySelector("#cursor-blur") 
document.addEventListener("mousemove",function(dets){
   
  crsr.style.left = dets.x-30 + "px";
  crsr.style.top = dets.y -30+ "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
  })

  let h4All=document.querySelectorAll("#nav");
  h4All.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.backgroundColor="transparent"
        crsr.style.border="1px solid"
    })
  })
  h4All.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.backgroundColor="#cfe623"
        crsr.style.border="0px solid #cfe623"
    })
  })
gsap.to('#nav',{
    backgroundColor: "#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -15%",
        end:"top -14%",
        scrub:2
    }
     
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -10%",
        end:"top -80%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 50%",
        end:"top 55%",
        scrub:3
     }

})
gsap.from(".card",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#card-container",
        scroller:"body",
        start:"top 60%",
        end:"top 65%",
        scrub:3
     }

})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    opacity:0,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 605%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    opacity:0,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 60%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });