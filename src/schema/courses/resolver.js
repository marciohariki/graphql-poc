import CourseService from '../../services/course.service'

const service = new CourseService()

export default {
  Query: {
    courses (root, args, context, info) {
      return service.findAll()
    },
    course (root, { id }) {
      return service.findById(id)
    }
  }
}
