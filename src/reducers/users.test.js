import users from './users'
import * as types from '../constants/ActionTypes'

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
          name: 'Wasgen'
      })
    ).toEqual([
      {
          name: 'Wasgen'
      }
    ])

    expect(
      users(
        [
          {
            name: 'Aram',
          }
        ],
        {
          type: types.ADD_USER,
          name: 'Armen'
        }
      )
    ).toEqual([
      {
        name: 'Aram',
      },
      {
        name: 'Armen'
      }
    ])
  })
})