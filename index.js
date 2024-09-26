// Select all the links
const links = document.querySelectorAll('#nav #links a');

links.forEach(link => {
    // Mouse enter (stretch)
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scaleX: 1.5,  // Stretch horizontally
            scaleY: 0.9,  // Slight vertical compression for a more dynamic effect
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    // Mouse leave (revert to original state)
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scaleX: 1,  // Reset horizontal scale
            scaleY: 1,  // Reset vertical scale
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});
