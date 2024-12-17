// Types from the API

/**
 * @typedef {{
 * title: string,
 * movie_banner: string,
 * }} Film
 */

// Internal variable, not exposed to the consumer of this module
const baseUrl = "https://ghibliapi.vercel.app"

/**
 * Returns the full list of films from the studio
 * 
 * @returns {Promise<Film[]>}
 */
export async function films() {
  const response = await fetch(`${baseUrl}/films`)
  const data = await response.json()
  return data
}

export async function vehicles() {

}

export async function people() {
  
}
