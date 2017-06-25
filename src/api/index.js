import axios from 'axios'
import config from '../config'
import data from './config'

const LATENCY = 16

export default {
  getData (cb) {
    // cb(data)
    setTimeout(() => {
      cb(data)
    }, LATENCY)
  },
  request (method, uri, data = null) {
    console.log('API request', method, uri)
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    var url = config.serverURI + uri
    console.log('url', url)
    return axios({ method, url, data })
  }
}
