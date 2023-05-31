import Repository from '../../../database'

export const getAllUsers = async () => {
  try {
    const query = 'SELECT * FROM users'
    const { rows } = await Repository.query(query)
    return rows
  } catch (error) {
    throw new Error('There is no user')
  }
}
