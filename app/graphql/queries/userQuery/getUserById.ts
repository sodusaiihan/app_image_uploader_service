import Repository from '../../../database'
import { User } from '../../types'

export const getUserById = async (_: any, { id }: User) => {
  try {
    if (!id) {
      throw new Error('User id is required')
    }
    const query = 'SELECT * FROM users WHERE id = $1'
    const { rows } = await Repository.query(query, [id])
    return rows[0]
  } catch (error) {
    throw new Error('User not found')
  }
}
