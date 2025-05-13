$(document).ready(function () {
    // Add smooth scrolling to all links
    $("#navbar a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});

function loadScript() {
    // Check if the viewport width is less than or equal to 768 pixels (adjust as needed)
    if (window.innerWidth >= 768) {
        console.log("desk");
        Shery.imageEffect("#main_bg", {
            style: 5,
            config: {
                a: { value: 2, range: [0, 30] },
                b: { value: -0.89, range: [-1, 1] },
                zindex: { value: -9996999, range: [-9999999, 9999999] },
                aspect: { value: 1.2 },
                ignoreShapeAspect: { value: true },
                shapePosition: { value: { x: 0, y: 0 } },
                shapeScale: { value: { x: 0.5, y: 0.5 } },
                shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
                shapeRadius: { value: 0, range: [0, 2] },
                currentScroll: { value: 0 },
                scrollLerp: { value: 0.07 },
                gooey: { value: false },
                infiniteGooey: { value: false },
                growSize: { value: 4, range: [1, 15] },
                durationOut: { value: 1, range: [0.1, 5] },
                durationIn: { value: 1.5, range: [0.1, 5] },
                displaceAmount: { value: 0.5 },
                masker: { value: false },
                maskVal: { value: 1, range: [1, 5] },
                scrollType: { value: 0 },
                geoVertex: { range: [1, 64], value: 1 },
                noEffectGooey: { value: true },
                onMouse: { value: 1 },
                noise_speed: { value: 0.2, range: [0, 10] },
                metaball: { value: 0.2, range: [0, 2] },
                discard_threshold: { value: 0.5, range: [0, 1] },
                antialias_threshold: { value: 0.002, range: [0, 0.1] },
                noise_height: { value: 0.5, range: [0, 2] },
                noise_scale: { value: 10, range: [0, 100] },
            },
        });

        Shery.imageEffect("#image_slide", {
            style: 5,
            config: {
                a: { value: 1.49, range: [0, 30] },
                b: {
                    value: -0.98,
                    range: [-1, 1],
                },
                aspect: { value: 1.8822947576656774 },
                gooey: { value: true },
                infiniteGooey: { value: true },
                durationOut: { value: 1, range: [0.1, 5] },
                durationIn: { value: 1, range: [0.1, 5] },
                displaceAmount: { value: 0.5 },
                masker: { value: true },
                maskVal: {
                    value: 1.33,
                    range: [1, 5],
                },
                scrollType: { value: 0 },
                geoVertex: { range: [1, 64], value: 1 },
                noEffectGooey: { value: false },
                onMouse: { value: 1 },
                noise_speed: { value: 1.59, range: [0, 10] },
                metaball: { value: 0.21, range: [0, 2] },
                discard_threshold: { value: 0.5, range: [0, 1] },
                antialias_threshold: { value: 0, range: [0, 0.1] },
                noise_height: { value: 0.47, range: [0, 2] },
                noise_scale: { value: 12.15, range: [0, 100] },
            },
            gooey: true,
        });
        Shery.mouseFollower({
            //Parameters are optional.
            skew: true,
            // < !--ease: "cubic-bezier(0.23, 1, 0.320, 1)", --> duration: 1,
        });

        Shery.hoverWithMediaCircle("#hover-target" /* Element to target.*/, {
            images: ["img/admin1.jpeg"],
        });

        Shery.makeMagnet("#magnet-target" /* Element to target.*/, {
            //Parameters are optional.
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
        });

        Shery.hoverWithMediaCircle("#hover-image", {
            images: [
                "https://i.pinimg.com/originals/d7/c0/03/d7c0036975ad8b58f6100dba443d153b.gif",
            ],
        });
        Shery.imageMasker("#python" /* Element to target.*/, {
            //Parameters are optional.
            mouseFollower: true,
            text: "Shery",
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
        });

        // project pages

        Shery.imageEffect("#back", {
            style: 5,
            config: {
                a: { value: 1.49, range: [0, 30] },
                b: {
                    value: -0.98,
                    range: [-1, 1],
                },
                aspect: { value: 1.8822947576656774 },
                gooey: { value: true },
                infiniteGooey: { value: true },
                durationOut: { value: 1, range: [0.1, 5] },
                durationIn: { value: 1, range: [0.1, 5] },
                displaceAmount: { value: 0.5 },
                masker: { value: true },
                maskVal: {
                    value: 1.33,
                    range: [1, 5],
                },
                scrollType: { value: 0 },
                geoVertex: { range: [1, 64], value: 1 },
                noEffectGooey: { value: false },
                onMouse: { value: 1 },
                noise_speed: { value: 1.59, range: [0, 10] },
                metaball: { value: 0.21, range: [0, 2] },
                discard_threshold: { value: 0.5, range: [0, 1] },
                antialias_threshold: { value: 0, range: [0, 0.1] },
                noise_height: { value: 0.47, range: [0, 2] },
                noise_scale: { value: 12.15, range: [0, 100] },
            },
            gooey: true,
        });

        
        Shery.hoverWithMediaCircle("#techstack" /* Element to target.*/, {
            images: ["https://lh6.googleusercontent.com/vPxZR3vr150e1LgfieaevQO4u8zvmr7ife_usOIDun6E84Mjadrh5Kqik-QwJ8P7sZ69HvbhrPvjueYXCoDXVAqn62WOMURAtssZi3e2XQJEpBbaxOrq-JUTL3IighpfsgCvUNOD"] /*OR*/,
            //videos: ["video1.mp4", "video2.mp4"],
        });

        Shery.hoverWithMediaCircle("#predictbay" /* Element to target.*/, {
            images: ["https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/v4vapid/9MW59rEj-Stonks7.gif"] /*OR*/,
            //videos: ["video1.mp4", "video2.mp4"],
        });

        Shery.hoverWithMediaCircle("#jansevak" /* Element to target.*/, {
            images: ["https://assets-global.website-files.com/5da60733afec9db1fb998273/63eeeb6e74143b75dcab6ff3_HealthFundraising_Blog_Header.gif"] /*OR*/,
            //videos: ["video1.mp4", "video2.mp4"],
        });

        Shery.hoverWithMediaCircle("#vision" /* Element to target.*/, {
            images: ["https://8f430952.rocketcdn.me/wp-content/uploads/2023/06/Adobe-Generative-Recolor.gif"] /*OR*/,
            //videos: ["video1.mp4", "video2.mp4"],
        });

        Shery.hoverWithMediaCircle("#travelscape" /* Element to target.*/, {
            images: ["https://i.pinimg.com/originals/54/09/b7/5409b785444a9f59d6d66901922d992b.gif"] /*OR*/,
            //videos: ["video1.mp4", "video2.mp4"],
        });
    }
}


// Run the function on page load
window.addEventListener("load", loadScript);