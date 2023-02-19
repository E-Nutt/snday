gsap.registerPlugin(TextPlugin, Observer, ScrollTrigger,CustomEase,EasePack, EaselPlugin);

/* HAMBURGER-MENU-NAVIGATION */

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
    const visiblity = nav.getAttribute("data-visible");
     if(visiblity === "false"){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
     } else{
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
     }
     console.log(navToggle.getAttribute("aria-expanded"));
})

/*----------------------------*/
/*       REVEAL-CONTENT       */
/*----------------------------*/

function hide(elem) { 
    gsap.set(elem, {autoAlpha: 0,ease:"power2"}); //set the opacity to 0
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
});


  
 