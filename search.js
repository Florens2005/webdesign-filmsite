const searchInput = document.querySelector(".searchbar #myInput")
console.log(searchInput)
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    const movies = document.querySelectorAll(".gallery")
    movies.forEach(movie => {
        const title = movie.querySelector(".desc").textContent.toLowerCase()
        if (title.includes(value)) {
            movie.style.display = "block"
        } else {
            movie.style.display = "none"
        }
    })
})