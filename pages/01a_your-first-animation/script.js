// gsap.fn(target, vars)
gsap.to(".card", {
    opacity: 1,
    scale: 1,
    duration: 5,
    onComplete: () => {
        gsap.to(".card", {
            repeat: -1,
            yoyo: true,
            duration: 0.5,
        });

        gsap.to(".card", {
            boxShadow: "0 20px 80px rgba(29, 209, 169, 0.6)",
            repeat: -1,
            yoyo: true,
            duration: 1,
        });
    },
});
