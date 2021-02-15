const flightPath = {
    curviness: 1.5,
    autoRotate: true,
    values: [
        { x: 100, y: -30 },
        { x: 300, y: 20 },
        { x: 500, y: 120 },
        { x: 700, y: -200 },
        { x: 300, y: -20 },
        { x: 600, y: 90 },
        { x: 900, y: -100 },
        { x: window.innerWidth, y: -250 },
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    triggerHook: 0,
    duration: 3000
})
    .setTween(tween)
    .setPin('.animation')
    .addTo(controller);