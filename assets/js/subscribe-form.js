document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribe-form");
  const message = document.getElementById("subscribe-message");
  const card = document.getElementById("post-follow-card");
  const stack = document.getElementById("post-follow-stack");

  if (!form || !message || !card || !stack) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = form.email.value.trim();

    try {
      const response = await fetch("https://email.lewisconnolly.com/subscribe", {
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

      stack.style.visibility = "hidden";
      stack.style.pointerEvents = "none";
      message.textContent = "Thank you for subscribing.";
      message.hidden = false;
      card.classList.add("is-subscribed");
    } catch (err) {
      message.textContent = err.message || "Something went wrong.";
      message.hidden = false;
    }
  });
});
