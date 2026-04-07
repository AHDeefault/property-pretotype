function submitPretotype() {
  const link = document.getElementById("linkInput").value;

  if (link.trim() === "") {
    alert("Please insert a link");
    return;
  }

  const message = document.getElementById("msg");

  message.innerHTML = `
   You will now be redirected to a short questionnaire in Google Forms.
  `;

  message.style.display = "block";

  const baseURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfJcryvch_ze1vV5aWlfR_vK8Zlb6Ngu5QWjRNkWUaDtfn7aw/viewform?usp=pp_url&entry.378741159=";

  const finalURL = baseURL + encodeURIComponent(link);

  setTimeout(() => {
    window.location.href = finalURL;
  }, 2500);
}
