import messages from './messages'
import * as types from '../constants/ActionTypes'

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(
      messages([], {
        type: types.ADD_MESSAGE,
        message: 'Hello, World!',
        author: 'Host'
      })
    ).toEqual([
      {
        message: 'Hello, World',
        author: 'Host'
      }
    ])

    expect(
      messages(
        [
          {
            message: 'Hello, World!',
            author: 'Host'
          }
        ],
        {
          type: types.ADD_MESSAGE,
          message: 'Goodbye, World!',
          author: 'Guest'
        }
      )
    ).toEqual([
      {
        message: 'Hello, World!',
        author: 'Host'
      },
      {
          message: 'Goodbye, World!',
          author: 'Guest'
      }
    ])
  })
})