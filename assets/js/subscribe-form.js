document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");
  const message = document.getElementById("subscribe-message");

  if (!form || !message) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = form.email.value.trim();

    message.hidden = true;
    message.textContent = "";

    try {
      const response = await fetch("https://lewis-updates.contact-b4a.workers.dev/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      message.textContent = data.message || "Check your email to confirm your subscription.";
      message.hidden = false;
      form.reset();
    } catch (err) {
      message.textContent = err.message || "Something went wrong.";
      message.hidden = false;
    }
  });
});
