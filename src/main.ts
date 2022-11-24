import "./sass/main.scss";

const quotes = [
  {
    quote: "Some story Aaron told me",
    source: "Aaron!",
  },

  {
    quote: "Clear eyes, full hearts, can't lose.",
    source: "Dillon Panthers",
    citation: "Friday Night Lights",
    year: "1990",
  },
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object
function printQuote() {
  let quotes = getRandomQuote();
  let quoteContainer = document.getElementById("quote-box");
  let quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
  if (quotes.citation) {
    quoteString += `<span class="citation">${quotes.citation}</span>`;
  }
  if (quotes.year) {
    quoteString += `<span class="year">${quotes.year}</span></p>`;
  } else {
    quoteString += "</p>";
  }
  quoteContainer!.innerHTML = quoteString;
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function () {
  printQuote();
}, 35000);

//Event listener on LoadQuote button to generate new quote
document.getElementById("loadQuote")!.addEventListener("click", printQuote);
