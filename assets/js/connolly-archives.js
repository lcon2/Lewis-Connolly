(function () {
    var password = "poohpiglet";
    var storageKey = "connollyArchivesAccess";

    function grantAccess() {
        try {
            window.sessionStorage.setItem(storageKey, "granted");
        } catch (error) {
            // Ignore storage failures and continue with the redirect.
        }
    }

    var trigger = document.querySelector("[data-connolly-archives-trigger]");
    var modal = document.querySelector("[data-connolly-archives-modal]");
    var form = document.querySelector("[data-connolly-archives-form]");
    var passwordInput = document.getElementById("connolly-archives-password");
    var errorMessage = document.querySelector("[data-connolly-archives-error]");
    var closeControls = document.querySelectorAll("[data-connolly-archives-close]");

    function openModal() {
        if (!modal) {
            return;
        }

        modal.hidden = false;
        document.body.classList.add("connolly-archives-modal-open");

        if (errorMessage) {
            errorMessage.hidden = true;
        }

        if (passwordInput) {
            passwordInput.value = "";
            window.setTimeout(function () {
                passwordInput.focus();
            }, 0);
        }
    }

    function closeModal() {
        if (!modal) {
            return;
        }

        modal.hidden = true;
        document.body.classList.remove("connolly-archives-modal-open");
    }

    if (trigger && modal && form && passwordInput) {
        trigger.addEventListener("click", openModal);

        closeControls.forEach(function (control) {
            control.addEventListener("click", closeModal);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !modal.hidden) {
                closeModal();
            }
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (passwordInput.value === password) {
                grantAccess();
                window.location.assign(trigger.getAttribute("data-target"));
                return;
            }

            if (errorMessage) {
                errorMessage.hidden = false;
            }

            passwordInput.focus();
            passwordInput.select();
        });
    }
}());
