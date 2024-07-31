var t1 = gsap.timeline();
t1.from(".page1 h2", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
});
t1.from(".page1 h1", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
});
t1.from(".nav img", {
  opacity: 0,
  y: 80,
  duration: 0.3,
  scrub: true,
});
t1.from(".nav-menu", {
  opacity: 0,
  y: 80,
  duration: 0.3,
  scrub: true,
});
t1.from(".hamburger", {
  opacity: 0,
  opacity: 0,
  y: 100,
  duration: 0.3,
});
gsap.from(".info p", {
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".info",
    scroller: "body",
    // markers:true,
    start: "top 85%",
    end: "top 60%",
    scrub: 1,
  },
});
gsap.to(".nav", {
  backgroundColor: "rgb(81, 79, 79)",
  height: "9%",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start: "top -3%",
    end: "top -11%",
    scrub: 2,
  },
});
gsap.to(".page1", {
  backgroundImage:
    "linear-gradient(to left, rgba(26, 25, 25,.9) 0%, rgba(26, 25, 25,.9) 100%), url('praveen.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".container",
    scroller: "body",
    start: "top -5%",
    end: "top -55%",
    scrub: 3,
  },
});
gsap.from(".resume-info", {
  opacity: 0,
  duration: 2,
  // delay: 2,
  scrollTrigger: {
    trigger: ".resume",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    // markers: true,
    scrub: 1,
  },
});
gsap.from(".heading", {
  opacity: 0,
  y: "-100%",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".resume",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    // markers: true,
    scrub: 1,
  },
});
gsap.from(".my_image", {
  opacity: 0,
  x: "-50%",
  duration: 0.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".about-me",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    // markers: true,
    scrub: 2,
  },
});
gsap.from(".info h1", {
  y: "-100px",
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-me",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    // markers: true,
    scrub: 2,
  },
});
gsap.from(".info p", {
  // opacity: 0,
  x: "200px",
  duration: 0.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-me",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    // markers: true,
    scrub: 2,
  },
});
gsap.from(".btn", {
  y: "100px",
  opacity: 0,
  duration: 0.5,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-me",
    scroller: "body",
    start: "top 55%",
    end: "top 50%",
    // markers: true,
    scrub: 2,
  },
});
gsap.from(".projects .heading p", {
  opacity: 0,
  y: "-100%",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".page_4",
    scroller: "body",
    start: "top 90%",
    end: "top 70%",
    // markers: true,
    scrub: 1,
  },
});
gsap.from(".project_card", {
  opacity: 0,
  transform: "rotate3d(0, 1, 0, 180deg)",
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: ".page_4",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    // markers: true,
    scrub: 1,
  },
});
gsap.from(".footer .heading p", {
  opacity: 0,
  y: "-100%",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".page_5",
    scroller: "body",
    start: "top 85%",
    end: "top 70%",
    // markers: true,
    scrub: 1,
  },
});
gsap.from(".form h1", {
  opacity: 0,
  // x: "-20%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page_5",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    // markers: true,
    scrub: 1,
  },
});
gsap.from(".contact_detail h1", {
  opacity: 0,
  // x: "-20%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page_5",
    scroller: "body",
    start: "top 70%",
    end: "top 70%",
    // markers: true,
    scrub: 1,
  },
});
var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page_5",
    scroller: "body",
    start: "top 60%",
    end: "top 45%",
    scrub: 1,
  },
});
t2.from("form #name", {
  opacity: 0,
  x: "-50%",
});
t2.from("form #email", {
  opacity: 0,
  x: "-50%",
});
t2.from("form #tel", {
  opacity: 0,
  x: "-50%",
});
t2.from("form #textarea", {
  opacity: 0,
  x: "-50%",
});
gsap.from(".form button", {
  y: "50px",
  opacity: 0,
  duration: 2,
  stagger: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".form",
    scroller: "body",
    start: "top 30%",
    end: "top 25%",
    // markers: true,
    scrub: true,
  },
});
var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact_detail",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
  },
});
t3.from(".contact_detail .email", {
  opacity: 0,
  x: "20px",
  duration: 1,
});
t3.from(".contact_detail .phone", {
  opacity: 0,
  x: "20px",
  duration: 1,
});
t3.from(".contact_detail .Address", {
  opacity: 0,
  x: "20px",
  duration: 1,
});

var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".icon",
    scroller: "body",
    start: "top 87%",
    end: "top 82%",
    // markers: true,
    scrub: 2,
  },
});
t4.from(".fa-facebook-f", {
  opacity: 0,
  y: "30px",
  duration: 2,
  stagger: 0.8,
});
t4.from(".fa-linkedin-in", {
  opacity: 0,
  y: "-30px",
  duration: 2,
  stagger: 0.8,
});
t4.from(".icon .fa-github", {
  opacity: 0,
  y: "30px",
  duration: 2,
  stagger: 0.8,
});
t4.from(".fa-instagram", {
  opacity: 0,
  y: "-30px",
  duration: 2,
  stagger: 0.8,
});
t4.from(".fa-twitter", {
  opacity: 0,
  y: "30px",
  duration: 2,
  stagger: 0.8,
});
gsap.from(".skills .heading p", {
  opacity: 0,
  y: "-130%",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".skills",
    scroller: "body",
    start: "top 90%",
    end: "top 70%",
    // markers: true,
    scrub: 1,
  },
});
gsap.from(".skills-items i", {
  opacity: 0,
  x: "-500px",
  duration: 1,
  scrollTrigger: {
    trigger: ".skills",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    // markers: true,
    scrub: 1,
  },
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("change");
    if (menu.style.opacity == "1" && menu.style.visibility == "visible") {
      menu.style.opacity = "0";
      menu.style.visibility = "hidden";
    } else {
      menu.style.opacity = "1";
      menu.style.visibility = "visible";
    }
  });
});
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    const offset = 200; 
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});


const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    scrollToTopButton.style.display = 'block';
    scrollToTopButton.style.position="fixed";
    scrollToTopButton.style.bottom="5%";
    scrollToTopButton.style.right="2%";
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

