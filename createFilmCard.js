export function createFilmCard(filmInfo) {
  const container = document.createElement("div")
  container.style = "width: 500px"

  const image = document.createElement("img")
  image.src = filmInfo.movie_banner
  image.style = "width: 100%"

  container.append(image)

  return container
}
