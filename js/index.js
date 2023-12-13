var quotesList = [
  "Don’t ever let somebody tell you, you can’t do something. Not even me.",
  "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
  "You become what you believe.",
  "An unexamined life is not worth living.",
  "I failed my way to success.",
  "The successful warrior is the average man, with laser-like focus.",
  "It's fun to do the impossible.",
  "We will fail when we fail to try.",
  "Don’t count the days, make the days count.",
  "I dream it / I work hard / I grind ’til I own it.",
  "Success is a state of mind. If you want success, start thinking of yourself as a success.",
  "Don’t trust any one story of how to become successful.",
];

var quotesAuthorList = [
  "— Christopher Gardner",
  "— Mother Teresa",
  "— Oprah Winfrey",
  "— Socrates",
  "— Thomas Edison",
  "— Bruce Lee",
  "— Walt Disney",
  "— Rosa Parks",
  "— Muhammad Ali",
  "— Beyoncé",
  "— Joyce Brothers",
  "— Mindy Kaling",
];

function randomQuote() {
  var quote = quotesList[Math.floor(Math.random() * quotesList.length)];
  var quotesAuthor = quotesAuthorList[quotesList.indexOf(quote)];
  document.getElementById("random").innerHTML = quote;
  document.getElementById("author").innerHTML = quotesAuthor;
}
