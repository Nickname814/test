const quotes = [
    {
        quote: "A",
        author: "a"
    },
    {
        quote: "B",
        author: "b"
    },
    {
        quote: "C",
        author: "c"
    },
    {
        quote: "D",
        author: "d"
    },
    {
        quote: "E",
        author: "e"
    },
    {
        quote: "F",
        author: "f"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);



quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
