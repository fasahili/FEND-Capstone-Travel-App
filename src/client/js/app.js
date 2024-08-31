import { addTrip } from "./fetchApi";
import { updateUI } from "./updateUI";

const handleFormSubmission = () => {
  const submitButton = document.querySelector("#submit");

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const place = document.querySelector("#place").value.trim();
    const date = document.querySelector("#date").value;

    if (!place.length > 0) {
      alert("Please enter a Place Name");
      return;
    }

    if (date.length === 0) {
      alert("Please enter a Date");
      return;
    }

    try {
      await addTrip("http://localhost:9000", { place, date });
      await updateUI();
      clearText();
    } catch (e) {
      document.querySelector("#results").innerText =
        "Error , please try again.";
      console.log(e);
    }
  });
};

function clearText() {
  document.querySelector("#place").value = "";
  document.querySelector("#date").value = "";
}

export { handleFormSubmission, clearText };
