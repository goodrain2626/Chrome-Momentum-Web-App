function displayRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteContent = randomQuote.text;
    const quoteAuthor = randomQuote.author || "Unknown";

    document.getElementById("quote-content").innerText = quoteContent;
    document.getElementById("quote-author").innerText = `- ${quoteAuthor}`;
}

fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(quotes) {
        displayRandomQuote(quotes);
    });