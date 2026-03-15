(function () {
    var password = "poohpiglet";
    var storageKey = "connollyArchivesAccess";
    var protectedPage = document.querySelector("[data-connolly-archives-page]");

    if (!protectedPage) {
        return;
    }

    function hasAccess() {
        try {
            return window.sessionStorage.getItem(storageKey) === "granted";
        } catch (error) {
            return false;
        }
    }

    function grantAccess() {
        try {
            window.sessionStorage.setItem(storageKey, "granted");
        } catch (error) {
            // Ignore storage failures and continue.
        }
    }

    function revealProtectedPage() {
        protectedPage.hidden = false;
    }

    if (hasAccess()) {
        revealProtectedPage();
        return;
    }

    var attemptedPassword = window.prompt("Enter the password for Connolly Archives:");

    if (attemptedPassword === password) {
        grantAccess();
        revealProtectedPage();
        return;
    }

    window.location.assign(protectedPage.getAttribute("data-archive-url") || "/archive/");
}());
