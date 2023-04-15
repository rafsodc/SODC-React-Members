import axios from 'axios'

const instance = axios.create({
  headers: {
    common: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
    post: {
      'Content-Type': 'application/json',
    },
    patch: {
      'Content-Type': 'application/merge-patch+json'
    }
  }
})

export default instance