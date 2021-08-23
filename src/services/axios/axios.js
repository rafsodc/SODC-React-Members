import axios from 'axios';

const instance = axios.create({
  headers: {
    post: {
      "Content-Type": "application/json",
    },
    patch: {
      'Content-Type': 'application/merge-patch+json'
    }
  }
});

export default instance;