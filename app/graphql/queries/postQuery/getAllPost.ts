import Repository from '../../../database'

export const getAllPost = async () => {
  try {
    const query = 'SELECT * FROM posts'
    const { rows } = await Repository.query(query)
    return rows
  } catch (error) {
    throw new Error('Error retrieving posts')
  }
}
