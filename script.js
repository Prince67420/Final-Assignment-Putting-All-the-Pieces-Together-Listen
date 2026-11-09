const feedbackForm = document.querySelector("#feedback-form");
const formStatus = document.querySelector("#form-status");

if (feedbackForm && formStatus) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks for sharing. No information has been sent or saved.";
    feedbackForm.reset();
  });
}
