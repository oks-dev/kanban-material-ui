import { GET_TASKS } from '../types'

export const getTasks = value => {
  return {
    type: GET_TASKS,
    payload: value
  }
}