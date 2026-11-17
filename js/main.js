
document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------------------
    // 1. UPDATE THE FOOTER YEAR AUTOMATICALLY
    // -----------------------------------------

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // -----------------------------------------
    // 2. JOURNEY: SHOW MORE / SHOW LESS
    // -----------------------------------------

    const journeyToggle = document.getElementById("journey-toggle");
    const hiddenJourneyCards = document.querySelectorAll(".journey-hidden");

    if (journeyToggle && hiddenJourneyCards.length > 0) {

        journeyToggle.addEventListener("click", function () {

            const isCurrentlyHidden =
                hiddenJourneyCards[0].classList.contains("journey-hidden");

            hiddenJourneyCards.forEach(function (card) {
                card.classList.toggle("journey-hidden");
            });

            if (isCurrentlyHidden) {
                journeyToggle.textContent = "Show Less";
                journeyToggle.setAttribute("aria-expanded", "true");
            } else {
                journeyToggle.textContent = "Show More";
                journeyToggle.setAttribute("aria-expanded", "false");
            }

        });

    }


    // -----------------------------------------
    // 3. HOBBIES: IMAGE LIGHTBOX
    // -----------------------------------------

    const artImages = document.querySelectorAll("#hobbies .art-item img");

    if (artImages.length > 0) {

        // Create the lightbox elements
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-modal", "true");
        lightbox.setAttribute("aria-label", "Artwork image viewer");

        const lightboxContent = document.createElement("div");
        lightboxContent.className = "lightbox-content";

        const closeButton = document.createElement("button");
        closeButton.className = "lightbox-close";
        closeButton.type = "button";
        closeButton.textContent = "×";
        closeButton.setAttribute("aria-label", "Close image viewer");

        const lightboxImage = document.createElement("img");
        lightboxImage.className = "lightbox-image";
        lightboxImage.alt = "";

        const lightboxCaption = document.createElement("p");
        lightboxCaption.className = "lightbox-caption";

        lightboxContent.appendChild(closeButton);
        lightboxContent.appendChild(lightboxImage);
        lightboxContent.appendChild(lightboxCaption);
        lightbox.appendChild(lightboxContent);

        document.body.appendChild(lightbox);

        let previouslyFocusedElement = null;

        // Open the selected image
        function openLightbox(image) {

            previouslyFocusedElement = document.activeElement;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = image.alt;

            lightbox.classList.add("active");
            document.body.classList.add("lightbox-open");

            closeButton.focus();
        }

        // Close the lightbox
        function closeLightbox() {

            lightbox.classList.remove("active");
            document.body.classList.remove("lightbox-open");

            lightboxImage.removeAttribute("src");

            if (previouslyFocusedElement) {
                previouslyFocusedElement.focus();
            }
        }

        // Attach click events to gallery images
        artImages.forEach(function (image) {

            image.addEventListener("click", function () {

                // Do not open a broken or unavailable image
                if (image.complete && image.naturalWidth > 0) {
                    openLightbox(image);
                }

            });

            image.setAttribute("tabindex", "0");
            image.setAttribute("role", "button");
            image.setAttribute("aria-label", "Open artwork image");

            image.addEventListener("keydown", function (event) {

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();

                    if (image.complete && image.naturalWidth > 0) {
                        openLightbox(image);
                    }
                }

            });

        });

        // Close button
        closeButton.addEventListener("click", closeLightbox);

        // Close when clicking outside the image
        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

        // Close using the Escape key
        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("active")
            ) {
                closeLightbox();
            }

        });

    }


    // -----------------------------------------
    // 4. SMOOTH SCROLL FOR INTERNAL LINKS
    // -----------------------------------------

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            // Ignore links that only contain "#"
            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});

    // -----------------------------------------
    // 5. SCROLL REVEAL ANIMATIONS
    // -----------------------------------------

    const revealElements = document.querySelectorAll(
        ".section-heading, .journey-card, .hobby-art, .wellness-card"
    );

    // Check whether the browser supports IntersectionObserver
    if ("IntersectionObserver" in window && revealElements.length > 0) {

        // Add a class to enable the animation styles
        document.body.classList.add("reveal-ready");

        // Create an observer to detect when elements enter the screen
        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        // Stop observing once the element is revealed
                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        // Observe each selected element
        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    }

    // -----------------------------------------
    // 5. MOBILE NAVIGATION
    // -----------------------------------------

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        // Open or close the mobile menu
        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close the menu after selecting a navigation link
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

        // Close the menu when Escape is pressed
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });

    }
