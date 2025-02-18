function valueSetters() {
  gsap.set("#nav a", {
    y: "-100%",
    opacity: 0
  });
  gsap.set("#home .parent .child",{
      y: "100%"
  });
  gsap.set("#home .row img", {opacity: 0, y:"100%"
  });
   
}

function revealToSpan() {
  document.querySelectorAll(".reveal")
  .forEach(function(elem){
   //Creating two spans
     let parent = document.createElement("span");
     let child = document.createElement("span");

   //parent and child sets their respective classes
     parent.classList.add("parent");
     child.classList.add("child");

     //span parent get child and child get elem
     child.innerHTML = elem.innerHTML;
     parent.append(child);

     //elem replace its value with parent
     elem.innerHTML = "";
     elem.appendChild(parent);
   });
}

function loaderAnimation() {
  var tl = gsap.timeline();

tl
  .from("#loader .child span", {
    x: 100,
    duration: 1.4,
    delay: 1,
    stagger: .2,
    ease: Power3.easeInOut,
  })

  .to("#loader .parent .child", {
      y: "-100%",
      duration: 1, 
      ease: Circ.easeInOut, 
}) 
.to("#loader", {
    height: 0,
  duration: 1, 
  ease: Circ.easeInOut, 
}) 
.to("#green", {
  height: "100%",
  top: 0,
  duration: 1, 
  delay: -.8,
  ease: Circ.easeInOut, 
}) 

.to("#green", {
  height: "0%",
  top: 0,
  duration: 1, 
  delay: -.5,
  ease: Circ.easeInOut, 
  onComplete: function() {
    animateHomePage();
  }
}) 
} 
 
function animateSvg() {
   // Select each path or polyline inside the SVG groups
   document.querySelectorAll("#Visual > g > g > path, #Visual > g > g > polyline").forEach(function (element) {
      
    // Get the total length of the stroke for each element
    const length = element.getTotalLength();
    
    // Set initial strokeDasharray and strokeDashoffset values
    element.style.strokeDasharray = length + 'px';
    element.style.strokeDashoffset = length + 'px';
  
      // Use GSAP to animate strokeDashoffset to 0
      gsap.to(element, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "expo.inOut", 
          delay: 7,
          repeat: -1
      });
    });
}


function animateHomePage() {
   
var tl = gsap.timeline();

tl
   .to("#nav a",{
        y: 0,
        opacity: 12,
        stagger: .05,
        ease: Expo.easeInOut
    })

    .to("#home .parent .child",{
      y: 0, 
      stagger: .1,
      duration: 1.5,
      ease: Expo.easeInOut
  })
  .to("#home .row img",{
    y: 0,
    opacity: 1, 
    delay: -.5,
    ease: Expo.easeInOut,
     
})


} 

function locoInitalize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
};



// function cardHoverEffect() {
//   document.querySelectorAll(".cnt")
//   .forEach(function(cnt){
//     var showingImage;
//     cnt.addEventListener("mousemove", function(dets) { 
//      document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity = 1;
//      showingImage = dets.target;
//      document.querySelector(".cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px`;
//      showingImage.style.filter = "grayscale(1)";

//      document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
//     })

//     cnt.addEventListener("mouseleave", function(dets) { 
//       document.querySelector(".cursor").children[showingImage.dataset.index].style.opacity = 0; 
//      showingImage.style.filter = "grayscale(0)";

//      document.querySelector("#work").style.backgroundColor = "#fff";

//      })
//   })
// }
// }
 function cardHoverEffect() {
  const cursorChildren = document.querySelector("#cursor").children;
  const workElement = document.querySelector("#workDefine");
  const cntElements = document.querySelectorAll(".cnt");

  let showingImage = null;

  cntElements.forEach((cnt) => {
    cnt.addEventListener("mousemove", (event) => {
      const { index, color } = event.target.dataset;

      // Validate dataset properties
      if (!index || !cursorChildren[index]) {
        console.error("Invalid index or cursor child missing for:", event.target);
        return;
      }

      const cursorChild = cursorChildren[index];

      // Show and position the corresponding cursor child
      cursorChild.style.opacity = "1";
      cursorChild.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;

      // Apply grayscale effect to the target
      showingImage = event.target;
      showingImage.style.filter = "grayscale(1)";

      // Change background color of #work
      if (color) {
        workElement.style.backgroundColor = `#${color}`;
      }
    });

    cnt.addEventListener("mouseleave", () => {
      if (!showingImage) return;

      const { index } = showingImage.dataset;

      // Validate and hide the corresponding cursor child
      if (index && cursorChildren[index]) {
        cursorChildren[index].style.opacity = "0";
      }

      // Reset grayscale and background color
      showingImage.style.filter = "grayscale(0)";
      workElement.style.backgroundColor = "#f2f2f2";

      showingImage = null;
    });
  });
}

function svgMoving() {
const container = document.getElementById('footer');
const svg = document.getElementById('c-circle');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left; // Mouse X relative to the container
  const y = e.clientY - rect.top;  // Mouse Y relative to the container

  // Move the SVG
  svg.style.transform = `translate(${x - 25}px, ${y - 25}px)`; // Center the SVG
});
};



 
revealToSpan();  
valueSetters();  
loaderAnimation();
animateSvg();  
cardHoverEffect(); 
svgMoving();
cardHoverEffect2();
// locoInitalize();
