import axios from 'axios'

export const useRequest = () => {
  const get = async (url, headers) => {
    try {
      const req = await axios({
        method: 'get',
        url: url,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await req.data

      return data
    } catch (e) {
      return new Error('Some propblem')
    }
  }

  const post = async (url, data) => {
    try {
      const req = await axios({
        method: 'post',
        url: url,
        data: data,
      })

      const res = await req.data

      return res
    } catch (e) {
      return new Error('Some problem', e)
    }
  }

  return {
    get,
    post,
  }
}