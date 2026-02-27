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

    var originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Sending…";

    // Replace with your real endpoint (e.g. form service or API)
    // For now we just show success and reset
    setTimeout(function () {
      btn.textContent = "We'll be in touch.";
      btn.style.background = "#8b949e";
      input.value = "";
      input.disabled = true;
    }, 800);
  });
})();
