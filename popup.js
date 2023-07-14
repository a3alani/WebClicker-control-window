import { checkAccess } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const accessInfo = await checkAccess();
  const container = document.getElementsByClassName("container")[0];

  if (accessInfo.hasAccess) {
    const sessionID = accessInfo.tabURL.split("/")[4];
    const courseID = accessInfo.tabURL.split("/")[5];
    console.log(sessionID);
    console.log(courseID);

    if (courseID && sessionID) {
      const buttonRow = document.createElement("div");
      buttonRow.classList.add("button-row");

      const startPollButton = document.createElement("button");
      startPollButton.textContent = "Start Poll";
      startPollButton.classList.add("button", "start-poll");

      const displayResultsButton = document.createElement("button");
      displayResultsButton.textContent = "Display Results";
      displayResultsButton.classList.add("button", "display-results");

      const endSessionButton = document.createElement("button");
      endSessionButton.textContent = "End Session";
      endSessionButton.classList.add("button", "end-session");

      buttonRow.appendChild(startPollButton);
      buttonRow.appendChild(displayResultsButton);
      buttonRow.appendChild(endSessionButton);

      container.appendChild(buttonRow);

      endSessionButton.addEventListener("click", () => {
        // Add your code to handle the end session logic here
        // For example, you can display a confirmation dialog and send an API request to end the session.
      });
    } else {
      container.innerHTML =
        '<div class="title">Select a Session to access controls</div>';
    }
  } else {
    container.innerHTML =
      '<div class="title">Please login to an instructor account</div>';
  }
});

