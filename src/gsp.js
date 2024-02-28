// Animaciones con GSAP y ScrollTrigger
const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();
const tl4 = gsap.timeline();

// Ocultar los contenedores__Animacion_2 y __Animacion_3 al principio
gsap.set(".contenedor__Animacion_2, .contenedor__Animacion_3, .contenedor__Animacion_4", { visibility: "hidden" });

// Configuración predeterminada de GSAP
gsap.defaults({ ease: "expo.inOut", duration: 2 });

// Animaciones para el contenedor__Animacion
tl.from(".seccio_2", { xPercent: 100 });
tl.from(".seccio_1_1", { xPercent: -100 }, "-=2");

// Animaciones para el contenedor__Animacion_2
tl2.set(".contenedor__Animacion_2", { visibility: "visible" }); // Hacer visible el contenedor__Animacion_2 después de la animación
tl2.from(".seccio_3", { yPercent: -100 });
tl2.from(".seccio_4", { yPercent: 100 }, "-=2");

// Animaciones para el contenedor__Animacion_3
tl3.set(".contenedor__Animacion_3", { visibility: "visible" }); // Hacer visible el contenedor__Animacion_3 después de la animación
tl3.from(".seccio_5", { xPercent: -100 });
tl3.from(".seccio_6", { xPercent: 100 }, "-=2");

// Animaciones para el contenedor__Animacion_4
tl4.set(".contenedor__Animacion_4", { visibility: "visible" }); // Hacer visible el contenedor__Animacion_3 después de la animación
tl4.from(".seccio_7", { yPercent: 100 });
tl4.from(".seccio_8", { yPercent: -100 }, "-=2");

// Crea una secuencia de animaciones para __Animacion_2 y __Animacion_3
const secuencia = gsap.timeline()
  .add(tl2)
  .add(tl3)
  .add(tl4);

// Configuración de ScrollTrigger para el contenedor__Animacion
ScrollTrigger.create({
    animation: tl,
    trigger: ".contenedor__Animacion",
    start: "top top",
    end: "+=1",
    /* markers: true, */
    scrub: 3,
    pin: true
});

// Configuración de ScrollTrigger para el contenedor__Animacion_2
ScrollTrigger.create({
    animation: tl2,
    trigger: ".contenedor__Animacion_2",
    start: "+=13%",
    end: "+=1",
    /* markers: true, */
    scrub: 3,
    pin: true
});

// Configuración de ScrollTrigger para el contenedor__Animacion_3
ScrollTrigger.create({
    animation: secuencia,
    trigger: ".contenedor__Animacion_3",
    start: "+=14%",
    end: "+=1",
    /* markers: true, */
    scrub: 3,
    pin: true
});

// Configuración de ScrollTrigger para el contenedor__Animacion_4
ScrollTrigger.create({
    animation: tl4,
    trigger: ".contenedor__Animacion_4",
    start: "+=15%",
    end: "+=1",
    /* markers: true, */
    scrub: 3,
    pin: true
});


/* var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);
 */

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
