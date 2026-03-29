document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");
  const message = document.getElementById("subscribe-message");
  const card = document.getElementById("post-follow-card");
  const inner = document.getElementById("post-follow-inner");

  if (!form || !message || !card || !inner) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = form.email.value.trim();

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

      inner.style.display = "none";
      message.textContent = "Thank you for subscribing.";
      message.hidden = false;
      card.classList.add("is-subscribed");
    } catch (err) {
      message.textContent = err.message || "Something went wrong.";
      message.hidden = false;
    }
  });
});
