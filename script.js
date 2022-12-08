var tablinks = document.getElementsByClassName("tab-links");
var tabcontaines = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontaine of tabcontaines) {
    tabcontaine.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

$(window).on("scroll", function () {
  var scoll = $(window).scroll();

  if ((scroll = 50)) {
    $("#msg").addclass("stickyadd");
  } else {
    $("#msg").removeclass("stickyadd");
  }
});


var typed = new Typed(".element ", {
  Strings: ["ShyamJeeban Mitra", "a Developer", "a Designer", "a Student"],
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
  startDeley: 1000,
});

//Progress bars
var waypoint = new Waypoint({
  element: document.getElementById("exp-id"),
  handler: function () {
    var p = document.querySelectorAll(".progress-bar");
    p[0].setAttribute("style", "width:100%;transition:1s all");
    p[1].setAttribute("style", "width:95%;transition:1.5s all");
    p[2].setAttribute("style", "width:85%;transition:1.7s all");
    p[3].setAttribute("style", "width:99%;transition:2s all");
    p[4].setAttribute("style", "width:85%;transition:2.3s all");
    p[5].setAttribute("style", "width:30%;transition:2.5s all");
  },
  offset: "90%",
});

var filterized = $(".filter-container").filterized({
  animationDuration: 0.5,
});

//owl Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  items: 1,
});
