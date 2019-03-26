import UserService from '../../services/user.service'

const service = new UserService()

export default {
  Query: {
    users () {
      return service.findAll()
    }
  }
}
