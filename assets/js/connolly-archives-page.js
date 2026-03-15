(function () {
    var password = "poohpiglet";
    var storageKey = "connollyArchivesAccess";
    var page = document.querySelector("[data-connolly-archives-page]");
    var gate = document.querySelector("[data-connolly-archives-gate]");
    var form = document.querySelector("[data-connolly-archives-form]");
    var input = document.getElementById("connolly-archives-password");
    var error = document.querySelector("[data-connolly-archives-error]");
    var closeControls = document.querySelectorAll("[data-connolly-archives-close]");

    if (!page) {
        return;
    }

    function hasAccess() {
        try {
            return window.sessionStorage.getItem(storageKey) === "granted";
        } catch (err) {
            return false;
        }
    }

    function grantAccess() {
        try {
            window.sessionStorage.setItem(storageKey, "granted");
        } catch (err) {
            // Ignore storage failures.
        }
    }

    function revealPage() {
        page.hidden = false;
        if (gate) {
            gate.hidden = true;
        }
        document.body.classList.remove("connolly-archives-lock");
    }

    function showGate() {
        page.hidden = false;
        if (gate) {
            gate.hidden = false;
        }
        document.body.classList.add("connolly-archives-lock");
        if (error) {
            error.hidden = true;
        }
        if (input) {
            input.value = "";
            window.setTimeout(function () {
                input.focus();
            }, 0);
        }
    }

    function leavePage() {
        window.location.assign(page.getAttribute("data-archive-url") || "/archive/");
    }

    if (hasAccess()) {
        revealPage();
    } else {
        showGate();
    }

    if (form && input) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (input.value === password) {
                grantAccess();
                revealPage();
                return;
            }

            if (error) {
                error.hidden = false;
            }

            input.focus();
            input.select();
        });
    }

    closeControls.forEach(function (control) {
        control.addEventListener("click", leavePage);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && gate && !gate.hidden) {
            leavePage();
        }
    });

    document.querySelectorAll("[data-connolly-carousel]").forEach(function (carousel) {
        var slides = Array.prototype.slice.call(carousel.querySelectorAll("[data-carousel-slide]"));
        var caption = carousel.querySelector("[data-carousel-caption]");
        var prev = carousel.querySelector("[data-carousel-prev]");
        var next = carousel.querySelector("[data-carousel-next]");
        var index = 0;

        if (!slides.length) {
            return;
        }

        function render() {
            slides.forEach(function (slide, slideIndex) {
                var isActive = slideIndex === index;
                slide.hidden = !isActive;
                slide.classList.toggle("is-active", isActive);
            });

            if (caption) {
                caption.textContent = slides[index].getAttribute("data-caption") || "";
            }
        }

        function move(step) {
            index = (index + step + slides.length) % slides.length;
            render();
        }

        if (prev) {
            prev.addEventListener("click", function () {
                move(-1);
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                move(1);
            });
        }

        carousel.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
            }
        });

        render();
    });
}());
