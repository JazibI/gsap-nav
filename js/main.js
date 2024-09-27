

let tl = gsap.timeline();

// Animation sequence for header logo and nav items
tl.from("header .logo", {
    y: -50,
    duration: 1,
    opacity: 0,
})
tl.from("header .nav_ul .nav_item", {
    y: -50,
    delay: 1,
    duration: 1,
    opacity: 0,
    stagger: 0.3, // Adjust stagger time as needed
}); // Overlap the start of the nav items animation with the logo animation


tl.from(".hero_heading",{
    opacity: 0,
    // scale: .2,
    x: "-100%",
    duration: 2
})
