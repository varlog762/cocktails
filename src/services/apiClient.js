import axios from 'axios'

export default {
  /**
   * Performs a GET request to the given URL and returns an array of cocktail
   * objects. If the request fails or the response does not contain the
   * expected 'drinks' property, an empty array is returned.
   *
   * @param {String} url - The URL to fetch the data from
   * @return {Promise<Array>} - An array of cocktail objects
   */
  async getData(url) {
    try {
      const data = await axios.get(url)

      if (!data.status === 200) {
        throw new Error('Failed to fetch data')
      }

      if (!data?.data?.drinks) {
        return []
      }

      return data.data.drinks
    } catch (error) {
      console.error(error)
    }
  }
}
