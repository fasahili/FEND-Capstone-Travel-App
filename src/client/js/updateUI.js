import { deleteTrip } from "./fetchApi";

const updateUI = async () => {
  try {
    let response = await fetch("http://localhost:9000/trip");
    let data = await response.json();

    const resultsContainer = document.querySelector("#results");
    resultsContainer.innerHTML = "";

    data.forEach((trip, index) => {
      const tripDiv = document.createElement("div");
      tripDiv.className = "trip";

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.title = "Delete this trip";
      deleteButton.textContent = "X";
      deleteButton.onclick = () => deleteTrip("http://localhost:9000", index);

      const photoDiv = document.createElement("div");
      photoDiv.className = "photo";
      const image = document.createElement("img");
      image.src = trip.image;
      image.alt = "Trip photo";
      photoDiv.appendChild(image);

      const infoDiv = document.createElement("div");
      infoDiv.className = "info";
      infoDiv.innerHTML = `
        <p><strong>Destination:</strong> ${trip.name}</p>
        <p><strong>Departing:</strong> ${trip.date}</p>
        <p><strong>Typical weather for then is:</strong></p>
        <p>High: <span class="high">${trip.high}</span></p>
        <p>Low: <span class="low">${trip.low}</span></p>
      `;

      tripDiv.appendChild(deleteButton);
      tripDiv.appendChild(photoDiv);
      tripDiv.appendChild(infoDiv);
      resultsContainer.appendChild(tripDiv);
    });
  } catch (e) {
    console.error("Error updating UI:", e);
  }
};

export { updateUI };
