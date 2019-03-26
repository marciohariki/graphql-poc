import { find } from 'lodash'
import jsonplaceholder from '../api/jsonplaceholder'

export default class UserService {
  constructor () {
    this.api = jsonplaceholder
  }

  async findAll () {
    const response = await this.api.get('/users')
    return response.data
  }

  async findById (id) {
    const response = await this.api.get('/users')
    return find(response.data, { id })
  }
}
