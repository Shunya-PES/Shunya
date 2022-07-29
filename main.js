setTimeout(function () {
    $('.loader-wrapper').fadeToggle();
}, 1500);

VANTA.NET({
    el: "#vantajs",
    mouseControls: true,
    touchControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0382b8,
    backgroundColor: 0x001322,
    points: 10.00,
    maxDistance: 35.00,
    spacing: 20.00
})

if (screen.width >= 350 && screen.width < 580) {
    VANTA.NET({
        el: "#vantajs",
        mouseControls: true,
        touchControls: true,
        minHeight: 100.00,
        minWidth: 100.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0382b8,
        backgroundColor: 0x001322,
        points: 10.00,
        maxDistance: 35.00,
        spacing: 30.00
    })
}
if (screen.width >= 580 && screen.width < 700) {
    VANTA.NET({
        el: "#vantajs",
        mouseControls: true,
        touchControls: true,
        minHeight: 100.00,
        minWidth: 100.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0382b8,
        backgroundColor: 0x001322,
        points: 10.00,
        maxDistance: 35.00,
        spacing: 30.00
    })
}

