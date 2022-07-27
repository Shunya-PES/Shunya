window.onscroll = function () {
    if (window.scrollY >= 500 || window.pageYOffset >= 500) {
        document.getElementsByTagName("header")[0].style.backgroundColor = "#00172A"
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
