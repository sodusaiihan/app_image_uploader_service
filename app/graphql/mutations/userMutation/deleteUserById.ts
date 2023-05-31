import Repository from '../../../database'
import { User } from '../../types'

export const deleteUserById = async (_: any, { id }: User) => {
  try {
    if (!id) {
      throw new Error(`User ${id} does not exist`)
    }
    const query = 'DELETE FROM users WHERE id = $1'
    await Repository.query(query, [id])
    return true
  } catch (error) {
    throw new Error('Error deleting user')
  }
}
