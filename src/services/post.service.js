import { find } from 'lodash'
import jsonplaceholder from '../api/jsonplaceholder'

export default class PostService {
  constructor () {
    this.api = jsonplaceholder
  }

  async findAll () {
    const response = await this.api.get('/posts')
    return response.data
  }

  async findById (id) {
    const response = await this.api.get('/posts')
    return find(response.data, { id })
  }
}
