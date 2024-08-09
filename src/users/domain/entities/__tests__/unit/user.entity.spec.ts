import {faker} from '@faker-js/faker'
import { User, UserProps } from '../../user.entity'

describe('User unit tests', () => {

  let sut: User;
  let props: UserProps

  beforeEach( () => {

    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    sut = new User(props)
  })

  it('Constructor method', () => {

    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  })
})
