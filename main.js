var tl = gsap.timeline();

tl.from(".loading-picture", {duration: 1, opacity: 0, ease: "power3"})
tl.to(".loading-picture", {duration: 1, opacity: 0, ease: "power3"})

tl.from(".poster-content", {duration: 1, y: 100, opacity: 0, ease: "power3"})
tl.from(".maxim", {duration: 1, y: 100, opacity: 0, ease: "power3"},"-=0.5")
tl.from(".vietnamese-info", {duration: 1, y: 100, opacity: 0, ease: "power3", stagger: 0.2})

// tl.from(".manage-video-right", {duration: 1, y: 100, opacity: 0.5, scale: 0.8});

gsap.registerPlugin(ScrollTrigger);

const galleryPhoto = gsap.from(".gallery-item", {
    y: 100,
    duration: 5,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
  });

ScrollTrigger.create({
    trigger: ".gallery",
    animation: galleryPhoto,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 200vh",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});

const heroContent = gsap.from(".hero-item", {
    delay: 0.25,
    y: 100,
    duration: 4,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
});
ScrollTrigger.create({
    trigger: ".hero",
    animation: heroContent,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 100vh",
    end: "top 600vh",
    // toggleClass: "active",
    // pin: true,
    scrub: 9,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});

const coupleGroom = gsap.from(".couple-card:first-child", {
    delay: 0.25,
    x: -200,
    duration: 2,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
});
ScrollTrigger.create({
    trigger: ".couple",
    animation: coupleGroom,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 130px",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});
const coupleBride = gsap.from(".couple-card:nth-child(2)", {
    delay: 0.5,
    x: 200,
    duration: 3,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
});
ScrollTrigger.create({
    trigger: ".couple",
    animation: coupleBride,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 130px",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});

const project = gsap.from(".project-item", {
    delay: 0.25,
    y: 50,
    duration: 2,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
});
ScrollTrigger.create({
    trigger: ".project",
    animation: project,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 500px",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});