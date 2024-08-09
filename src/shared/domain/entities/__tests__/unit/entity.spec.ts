import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity';

type StubProps = {
  prop1: string,
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {



  it('Should set props and id', () => {

    const props = {prop1: 'value1', prop2: 15}
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()

  })

  it('Should accept valid uuid', () => {

    const props = {prop1: 'value1', prop2: 15}
    const id = '0c96f8a2-6cac-40d5-af54-c1449ec142f6'
    const entity = new StubEntity(props, id)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)

  })

  it('Should convert entity into a Javascript object', () => {

    const props = {prop1: 'value1', prop2: 15}
    const id = '0c96f8a2-6cac-40d5-af54-c1449ec142f6'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({id, ...props})
  })
})
