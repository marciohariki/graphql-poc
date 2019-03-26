import apiPoc from '../api/api-poc'
import { find } from 'lodash'

export default class CourseService {
  constructor() {
    this.api = apiPoc
  }

  async findAll() {
    const response = await this.api.get('/courses')
    return response.data
  }

  async findById(id) {
    const response = await this.api.get('/courses')
    return find(response.data, { id })
  }
}