import * as ghibli from './ghibliApi.js'
import { createFilmCard } from './createFilmCard.js'

const movieListElement = document.querySelector("body")
const films = await ghibli.films()

for (const film of films) {
  console.log(film.movie_banner)

  const card = createFilmCard(film)

  movieListElement.append(card)
}
