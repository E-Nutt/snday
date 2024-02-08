gsap.registerPlugin(TextPlugin, Observer, ScrollTrigger,CustomEase,EasePack);

let select = (selector)=> {
  return document.querySelector(selector)
  } 

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
  
/*     elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";  */
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, { 
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
        onEnter: function() {animateVer(elem)}, //call the function when the elements enter the viewport
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

    let mobileNavbar = gsap.from(".mobile-nav-toggle", {
        yPercent:-170,
        paused: true,
        duration:0.2,
    }).progress(1)

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) =>{
          self.direction === -1 ? mobileNavbar.play() : mobileNavbar.reverse()
        }
    })

/* MENU-ACCORDION*/

let menuContainer = gsap.utils.toArray(".menu-accordion-container")
    menuTitle = gsap.utils.toArray(".menu-accordion-title")
    accordionToggler = menuContainer.map(createAnim);
    menuTitle.forEach(menu => {
      menu.addEventListener("click", () => menuToggles(menu));
    })

    function menuToggles (menuClicked){
      accordionToggler.forEach(toggleFn => toggleFn(menuClicked));
    }

    function createAnim(element){
     
      let title = element.querySelector(".menu-accordion-title")
          content = element.querySelector(".menu-accordion-content");
          menu = element.querySelectorAll(".menu-item")
          price = element.querySelectorAll(".menu-price")
          
      gsap.set(content, {height:"auto"});

      let animContainer = gsap.timeline()
      .from(content, {
        height:0,
        duration:0.3,
        ease:"power1.inOut"
      }).reverse();

      let menuAnimEntry = gsap.timeline()
      .from(menu, {
        x:-50,
        autoAlpha:0,
        duration:0.5,
        stagger:0.2,
        ease:"power2.inOut"
      })
      .from(price, {
        x:50,
        autoAlpha:0,
        duration:0.5,
        stagger:0.2,
        ease:"power2.inOut"
      }, "<")
      .reverse();

      return function(menuClicked){
        if(menuClicked === title){
          animContainer.reversed(!animContainer.reversed());
          menuAnimEntry.reversed(!menuAnimEntry.reversed());
        }else{
          animContainer.reverse();
          menuAnimEntry.reverse();
        }
      }
    }
  });

mm.add("(min-width: 42rem)", () => {

/* NAVIGATION-DESKTOP*/
const showAnim = gsap.from(".primary-navigation", {
  yPercent: -170,
  duration: 0.3,
  paused:true,
}).progress(1);

ScrollTrigger.create({
  start:"top top",
  end:99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  }
})
});
 