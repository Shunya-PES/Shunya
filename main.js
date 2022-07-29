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
window.onscroll = function () {
    if (window.scrollY >= 500 || window.pageYOffset >= 500) {
        document.getElementsByTagName("header")[0].style.backgroundColor = "#001322"
        document.getElementsByTagName("header")[0].style.transition = "0.4s"
        document.querySelector(".nav-logo").style.height = "100px"
        document.querySelector(".nav-logo").style.transition = "0.4s"
    } else {
        document.getElementsByTagName("header")[0].style.backgroundColor = "transparent"
        document.getElementsByTagName("header")[0].style.transition = "0.4s"
        document.querySelector(".nav-logo").style.height = "170px"
        document.querySelector(".nav-logo").style.transition = "0.4s"
    }
};
function openNav() {
    document.getElementById("mySidenav").style.width = "100px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}
