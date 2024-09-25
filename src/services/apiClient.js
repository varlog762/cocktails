import axios from 'axios'

export default {
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
