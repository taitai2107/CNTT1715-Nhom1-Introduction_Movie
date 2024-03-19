let lastScrollPosition = 0;
window.addEventListener("scroll", function () {
  requestAnimationFrame(function () {
    // Kiểm tra vị trí cuộn trang và thay đổi kiểu dáng của topbar
    let currentScrollPosition = window.scrollY;
    let topbar = document.querySelector(".topnav");
    if (currentScrollPosition > lastScrollPosition) {
      topbar.classList.add("scroll-down");
    } else {
      topbar.classList.remove("scroll-down");
    }
    lastScrollPosition = currentScrollPosition;
  });
});

function changeClass(element) {
  var links = document
    .getElementsByClassName("topnav")[0]
    .getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  element.classList.add("active");
}
var slideIndex = 0;

function carousel() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
carousel();

const items = document.querySelectorAll(".item");
const images = document.querySelectorAll(".image");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const name = item.getAttribute("data-name");
    items.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");

    images.forEach((image) => {
      const type = image.getAttribute("data-type");
      if (name === "all" || type === name) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });
});
// slides[slideIndex - 1].style.top = "100px";

// const db = "../db.json"
// fetch("db.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((movie) => {
//       const movieElement = document.createElement("div");
//       movieElement.classList.add("movie");

//       const imageElement = document.createElement("img");
//       imageElement.src = movie.image;
//       imageElement.alt = movie.title;
//       movieElement.appendChild(imageElement);

//       const titleElement = document.createElement("h2");
//       titleElement.textContent = movie.title;
//       movieElement.appendChild(titleElement);

//       const descriptionElement = document.createElement("p");
//       descriptionElement.textContent = movie.description;
//       movieElement.appendChild(descriptionElement);

//       document.getElementById("movies-container").appendChild(movieElement);
//     });
//   })
//   .catch((error) => {
//     console.error("Error loading movies:", error);
//   });

// Lắng nghe sự kiện scroll bằng requestAnimationFrame()
