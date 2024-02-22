// Animaciones con GSAP y ScrollTrigger
const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();

// Ocultar los contenedores__Animacion_2 y __Animacion_3 al principio
gsap.set(".contenedor__Animacion_2, .contenedor__Animacion_3", { visibility: "hidden" });

// Configuración predeterminada de GSAP
gsap.defaults({ ease: "expo.inOut", duration: 2 });

// Animaciones para el contenedor__Animacion
tl.from(".seccio_2", { yPercent: -100 });
tl.from(".seccio_1_1", { yPercent: 100 }, "-=2");

// Animaciones para el contenedor__Animacion_2
tl2.set(".contenedor__Animacion_2", { visibility: "visible" }); // Hacer visible el contenedor__Animacion_2 después de la animación
tl2.from(".seccio_3", { xPercent: -100 });
tl2.from(".seccio_4", { xPercent: 100 }, "-=2");

// Animaciones para el contenedor__Animacion_3
tl3.set(".contenedor__Animacion_3", { visibility: "visible" }); // Hacer visible el contenedor__Animacion_3 después de la animación
tl3.from(".seccio_5", { yPercent: -100 });
tl3.from(".seccio_6", { yPercent: 100 }, "-=2");

// Crea una secuencia de animaciones para __Animacion_2 y __Animacion_3
const secuencia = gsap.timeline()
  .add(tl2)
  .add(tl3);

// Configuración de ScrollTrigger para el contenedor__Animacion
ScrollTrigger.create({
    animation: tl,
    trigger: ".contenedor__Animacion",
    start: "top top",
    end: "+=1",
    markers: true,
    scrub: 4,
    pin: true
});

// Configuración de ScrollTrigger para el contenedor__Animacion_2
ScrollTrigger.create({
    animation: secuencia,
    trigger: ".contenedor__Animacion_2",
    start: "+=13%",
    end: "+=1",
    markers: true,
    scrub: 4,
    pin: true
});

// Configuración de ScrollTrigger para el contenedor__Animacion_3
ScrollTrigger.create({
    animation: tl3,
    trigger: ".contenedor__Animacion_3",
    start: "+=26%",
    end: "+=1",
    markers: true,
    scrub: 4,
    pin: true
});

