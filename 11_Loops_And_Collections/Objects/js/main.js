var emptyObj = {};

var serge = {
  name: "Serge Gainsbourg",
  age: 65
};

console.log(serge);

var age = serge.age;
console.log(age);

var name = serge.name;
console.log(name);

var bookSeries = {
  name: "In Search of Lost Time",
  author: "Marcel Proust",
  books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained"
  ]
};

var seriesName = bookSeries.name;
var author = bookSeries.author;
var allBooks = bookSeries.books;
var firstBook = bookSeries.books[0];

var movie = {
  title: "Satantango",
  director: "Bela Tarr",
  duration: 432
};
console.log(movie);

// Reassigning Values
movie.duration = 534;
console.log(movie);

// Add a new key-value pair
movie.language = "Hungarian";
console.log(movie);

var jacques = {
  name: "Jacques Cousteau",
  job: "Explorer",
  birth: {
    day: 11,
    month: 6,
    year: 1910
  }
};

var jName = jacques.name;
var jJob = jacques.job;
var jBirthday = jacques.birth.day;
var jYear = jacques.birth.year;

jacques.purpose = "Hello World";
jacques.favouriteDrug = "jetlag";

console.log(jacques);
