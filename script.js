const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")


let apiQuotes = [];

// Show new Quotes

// Show loader
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}
// Hide loader
function loadComplete() {
    loader.hidden = true
    quoteContainer.hidden = false
} 

function newQuote() {
    loading()
  // Pick a random quote from API arrays
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Check if the author field is null and populate it with "Unknown"
    if (!quote.author) {
        quoteText.textContent = "Unknown"
    } else {
        authorText.textContent = quote.author;
    }

    // Change the font size if the quote have long text
    if (quote.text.length > 60) {
        quoteText.classList.add("long-quote-text");
    } else {
        quoteText.classList.remove("long-quote-text");
    }
    // Set Quote, Hide loader
    quoteText.textContent = quote.text
    loadComplete()
}
// Adding Event Listener to the New Quote Button by calling the new quote funtion
newQuoteBtn.addEventListener("click", newQuote)

// Get Quotes from API
async function getQuotes() {
    loading()
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text= ${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}
// Add Event listener to the tweet Quote button
twitterBtn.addEventListener("click", tweetQuote)

// Call the getQuotes function on Load
getQuotes();



















// const spanQuote = document.querySelector('quote')
// const newQuoteButton = document.getElementById("new-quote");

// newQuoteButton.addEventListener("click", function () {
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
//     console.log(quote)
// })




