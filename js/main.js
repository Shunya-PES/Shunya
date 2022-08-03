setTimeout(function () {
    $('.loader-wrapper').fadeToggle();
}, 1500);

AOS.init();

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
    maxDistance: 30.00,
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
        maxDistance: 25.00,
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
        maxDistance: 25.00,
        spacing: 30.00
    })
}

window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= 200 || window.pageYOffset >= 200) {
        document.querySelector(".scrollup").style.visibility = "visible";

    } else {
        document.querySelector(".scrollup").style.visibility = "hidden";
    }
}
const form = document.getElementById("contact-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("alert");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            status.innerHTML = "Your message has been sent!";
            document.querySelector(".alert_style").style.width = "200px";
            document.querySelector(".alert_style").style.borderColor = "green";
            document.querySelector(".alert_style").style.backgroundColor = "rgba(1, 232, 47, 0.525)";


            // hide alert after 3 seconds
            setTimeout(function () {
                document.querySelector(".alert_style").style.width = "0px"
                status.innerHTML = "";
            }, 4000);
            form.reset();
        })
        .catch((error) => {
            status.innerHTML = "There was a problem. Try Again!";
            document.querySelector(".alert_style").style.width = "200px";
            document.querySelector(".alert_style").style.borderColor = "red";
            document.querySelector(".alert_style").style.backgroundColor = "rgba(232, 1, 1, 0.525)";


            // hide alert after 3 seconds
            setTimeout(function () {
                document.querySelector(".alert_style").style.width = "0px"
                status.innerHTML = "";
            }, 4000);
        });
}
form.addEventListener("submit", handleSubmit);