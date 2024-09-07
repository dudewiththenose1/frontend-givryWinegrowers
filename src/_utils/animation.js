import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
    tl.to("body", {
        duration: 0.1,
        css: { overflowY: "hidden" },
        ease: "power3.inOut",
    })
        .to(".preloader", {
            duration: 1,
            height: "0vh",
            delay: 1,
            ease: "Power3.easeOut",
            onComplete: fadeInContent, // Call the fade-in content animation
        })
        .to("body", {
            duration: 0.1,
            css: { overflowY: "scroll" },
            ease: "power3.inOut",
        })
        .to(".preloader", {
            duration: 0,
            css: { display: "none" },
        });
};

// Function to fade in the main content from bottom to top
const fadeInContent = () => {
    gsap.from(".main-content", {
        duration: 1,
        y: 100,       // Starting position (100px below)
        opacity: 0,   // Start fully transparent
        ease: "power3.out", // Easing function
    });
};
