gsap.registerPlugin(TextPlugin, Observer, ScrollTrigger,CustomEase,EasePack, EaselPlugin);

/* HAMBURGER-MENU-NAVIGATION */

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
    const visiblity = nav.getAttribute("data-visible");
     if(visiblity === "false"){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navToggle.style.transform = "rotate(90deg)";
        navToggle.style.transition = "transform 300ms"
     } else{
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navToggle.style.transform = "rotate(0deg)";
     }
})

/*----------------------------*/
/*       REVEAL-CONTENT       */
/*----------------------------*/

function hide(elem) { 
    gsap.set(elem, {autoAlpha: 0}); //set the opacity to 0
  }
  
/* REVEAL-HORIZONTAL*/

  document.addEventListener("DOMContentLoaded", function() {  
  
    gsap.utils.toArray(".gs_reveal_hor").forEach(elem => { //function to animate all elements, thats contain .gs_reveal
      hide(elem); //set the initial opacity of the elements to 0
  
      ScrollTrigger.create({ //create object from GSAP
        trigger: elem,
        onEnter: function() { animateHor(elem) }, //call the function when the elements enter the viewport
        onEnterBack: function() { animateHor(elem, -1) }, //call the function when the elements re-enter the viewport
        onLeave: function() { hide(elem) } //call the function when the elements leave the viewport
      });
    });
  });

  function animateHor(elem, direction) { //function to create enter animation from right or left
    direction = direction || 1; //initial direction
    var x = 0,
        y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) { //create enter animation from left
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) { //create enter animation from right
      x = 100;
      y = 0;
    }
  
    elem.style.transform = "translate(" + x + "px, " + y + "px)"; //set the initial position of the elements
    elem.style.opacity = "0"; //set the initial opacity of the elements
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, { //adding the animation to the element
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }


/* REVEAL-VERTICAL*/

  document.addEventListener("DOMContentLoaded", function() {  
  
    gsap.utils.toArray(".gs_reveal_ver").forEach(elem => { //function to animate all elements, thats contain .gs_reveal
      hide(elem); //set the initial opacity of the elements to 0
      ScrollTrigger.create({ //create object from GSAP
        trigger: elem,
        onEnter: function() { animateVer(elem) }, //call the function when the elements enter the viewport
        onEnterBack: function() { animateVer(elem, -1) }, //call the function when the elements re-enter the viewport
        onLeave: function() { hide(elem) } //call the function when the elements leave the viewport
      });
    });
  });
  
  function animateVer(elem, direction) { //function to create enter animation from right or left
    direction = direction || 1; //initial direction
    var x = direction*100,
        y = 0;
  if (elem.classList.contains("gs_reveal_fromTop")) { //create enter animation from left
      x = 0;
      y = -100;
    } else if (elem.classList.contains("gs_reveal_fromBottom")) { //create enter animation from right
      x = 0;
      y = 100;
    }
  
    elem.style.transform = "translate(" + x + "px, " + y + "px)"; //set the initial position of the elements
    elem.style.opacity = "0"; //set the initial opacity of the elements
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, { //adding the animation to the element
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    });
  }


/*----------------------------*/
/*    MATCHMEDIA-ANIMATION    */
/*----------------------------*/ 

let mm = gsap.matchMedia();


/*----------------------------*/
/*      MOBILE-ANIMATION      */
/*----------------------------*/

mm.add("(max-width: 41.9rem)", () => {

/* NAVIGATION-MOBILE*/

    const showAnim = gsap.from(".mobile-nav-toggle", {  //create animation for nav-bar
        yPercent: -170,
        paused: true,
        duration: 0.2
      }).progress(1);

      ScrollTrigger.create({ //create GSAP object to animate the navbar when the page scrolled up
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });

/* COLLABORATION-ANIMATION-MOBILE */

      function changeTextCollaboration(title, text){
       document.getElementById("collaboration-title").innerHTML = title;
       document.getElementById("collaboration-subtitle").innerHTML = text;
      }
      function resetTextCollaboration(){
        document.getElementById("collaboration-title").innerHTML = "Special Collaboration";
        document.getElementById("collaboration-subtitle").innerHTML = "A fusion of Characteristic, style and taste from other brand local and international";
      }
      ScrollTrigger.create({
        trigger: ".collaboration-title",
        start: "top 0",
        end: "+=1300px",
        pin: ".collaboration-title",
      }); 
      const collabPic1 = document.querySelector("#collab-pic1");
      const collabPic2 = document.querySelector("#collab-pic2");
      const collabPic3 = document.querySelector("#collab-pic3");

      ScrollTrigger.create({
        trigger: collabPic1,
        start:"top 30%",
        end: () => "+=" + collabPic1.offsetWidth,
        onEnter: function(){changeTextCollaboration("Seremoni", "We did Collaboration with Seremoni")},
        onLeaveBack: function(){resetTextCollaboration()}
      });

      ScrollTrigger.create({
        trigger: collabPic2,
        start:"top 30%",
        end: () => "+=" + collabPic2.offsetWidth,
        onEnter: function(){changeTextCollaboration("Lumberjack", "We did Collaboration with Lumberjack")},
        onLeaveBack: function(){changeTextCollaboration("Seremoni", "We did Collaboration with Seremoni")}
      });
      ScrollTrigger.create({
        trigger: collabPic3,
        start:"top 30%",
        end: () => "+=" + collabPic3.offsetWidth,
        onEnter: function(){changeTextCollaboration("Kopi Kayon", "We did Collaboration with Kopi Kayon. It was a fun experience that brings a lot of new lesson")},
        onLeaveBack: function(){changeTextCollaboration("Lumberjack", "We did Collaboration with Lumberjack")},
      });
});

mm.add("(min-width: 42rem)", () => {

/* NAVIGATION-DESKTOP*/

  const showAnim = gsap.from(".primary-navigation", { 
    yPercent: -170,
    paused: true,
    duration: 0.2
  }).progress(1);

  ScrollTrigger.create({ 
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });

/* COLLABORATION-ANIMATION-DESKTOP*/
  let collabPics = document.querySelectorAll(".collaboration-pic");
  gsap.set(collabPics, {autoAlpha:0, yPercent:100});
  gsap.to (collabPics, {
    yPercent: 0,
    ease:"ease",
    stagger: 0.4,
    autoAlpha:1,
    scrollTrigger: {
      trigger: "#collaboration-subtitle",
    start:"top center",
    end: "+=500vh top",
    toggleActions: "restart reverse play reverse",
    }
  });
});


  
 