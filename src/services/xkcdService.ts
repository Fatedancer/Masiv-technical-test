import axios from 'axios'

const xkcdAPI = axios.create({
  baseURL: 'http://localhost:8080/https://xkcd.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export const fetchComic = async (id: number) => {
  if (typeof id !== 'number' || id <= 0) {
    throw new Error('Invalid id parameter. Must be a positive integer.')
  }
  try {
    const response = await xkcdAPI.get(`/${id}/info.0.json`)
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error(`Failed to fetch comic. Status code: ${response.status}`)
    }
  } catch (error) {
    console.error({ error })
    throw new Error('Failed to fetch comic')
  }
}

export const fetchRandomComic = async () => {
  try {
    const randomComicNumber = Math.floor(Math.random() * 2500)
    const response = await xkcdAPI.get(`/${randomComicNumber}/info.0.json`)
    return response.data
  } catch (error) {
    console.error({ error })
    throw error
  }
}
