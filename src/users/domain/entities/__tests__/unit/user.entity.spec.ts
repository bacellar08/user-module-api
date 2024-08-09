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

  it('Getters of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toEqual('string');
  })

  it('Getters of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toEqual('string');
  })

  it('Getters of password field', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toEqual('string');
  })

  it('Getters of createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  })
})
