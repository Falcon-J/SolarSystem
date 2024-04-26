document.addEventListener("DOMContentLoaded", function () {
  // Define a list of words (you can replace this with a dynamic source)
  const words = [
    "Ephemeral",
    "Capricious",
    "Quixotic",
    "Serendipity",
    "Ubiquitous",
    "Ineffable",
  ];

  function getWordOfTheDay() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const wordOfTheDayElement = document.getElementById("scrolling-text-wod");
  wordOfTheDayElement.textContent = `Word of the Day : ${getWordOfTheDay()}`;
});

function updateDate() {
  var currentDate = new Date();

  // Format the date
  var formattedDate =
    currentDate.getDate() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getFullYear();

  // Get all elements with class "dateval"
  var dateElements = document.getElementsByClassName("dateval");

  // Check if any elements found
  if (dateElements.length > 0) {
    // Update content of all elements
    for (var i = 0; i < dateElements.length; i++) {
      dateElements[i].textContent = formattedDate;
    }
  } else {
    console.error("No elements found with class 'dateval'");
  }

  console.log("Current date:", formattedDate);
}

window.onload = updateDate;
