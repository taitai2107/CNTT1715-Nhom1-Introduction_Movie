let data = require("../db.json");
// function displayMovies(category) {
//   var container = document.getElementById("movies-container");
//   var movies = data[category];
//   movies.forEach(function (movie) {
//     var movieDiv = document.createElement("div");
//     movieDiv.classList.add("movie");

//     var img = document.createElement("img");
//     img.src = movie.img;

//     var movieInfo = document.createElement("div");
//     movieInfo.classList.add("movie-info");

//     var title = document.createElement("h3");
//     title.textContent = movie.title;

//     var director = document.createElement("p");
//     director.textContent = "Director: " + movie.director;

//     var year = document.createElement("p");
//     year.textContent = "Year: " + movie.year;

//     var rating = document.createElement("p");
//     rating.textContent = "Rating: " + movie.rating;

//     movieInfo.appendChild(title);
//     movieInfo.appendChild(director);
//     movieInfo.appendChild(year);
//     movieInfo.appendChild(rating);
//     movieDiv.appendChild(img);
//     movieDiv.appendChild(movieInfo);

//     container.appendChild(movieDiv);
//   });
// }

// window.onload = function () {
//   displayMovies("hoat_hinh");
// };
console.log(data);
