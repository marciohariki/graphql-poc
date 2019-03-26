// vendor
import PeopleService from './src/services/people.service';

const main = async () => {
  const service = new PeopleService()
  const data = await service.findAll()
  console.log(data)
}

main()