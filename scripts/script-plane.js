function main() {
    const flightPath = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            { x: 100, y: 140 },
            { x: 500, y: 100 },
            { x: 700, y: -300 },
            { x: 350, y: -200 },
            { x: 600, y: 100 },
            { x: 1100, y: -100 },
            { x: window.innerWidth, y: -window.innerHeight }

        ]
    }

    const tween = new TimelineLite();

    tween.add(
        TweenLite.to('.paper-plane', 1, {
            bezier: flightPath,
            ease: Power1.easeInOut
        }),
    );

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 1000,
        triggerHook: 0
    })
        .setTween(tween)
        .setPin('.animation')
        .addTo(controller);

}
main();
