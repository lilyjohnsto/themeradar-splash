(function () {
  "use strict";

  var form = document.getElementById("notify-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var input = form.querySelector('input[type="email"]');
    var btn = form.querySelector("button[type='submit']");
    if (!input || !btn) return;

    var email = (input.value || "").trim();
    if (!email) return;

    btn.disabled = true;
    btn.textContent = "Sending…";

    var formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(function () {
        btn.textContent = "We'll be in touch.";
        btn.style.background = "#8b949e";
        input.value = "";
        input.disabled = true;
      })
      .catch(function () {
        btn.textContent = "Notify Me";
        btn.disabled = false;
      });
  });
})();
