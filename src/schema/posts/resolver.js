import PostService from '../../services/post.service'

const service = new PostService()

export default {
  Query: {
    posts () {
      return service.findAll()
    }
  }
}
