import Repository from '../../../database'
import { Post } from '../../types'

export const getPostByPostId = async (_: any, { postid }: Post) => {
  try {
    const query = 'SELECT * FROM posts WHERE postid = $1 LIMIT 1'
    const { rows } = await Repository.query(query, [postid])

    if (!postid) {
      throw new Error('Post id is required')
    }
    if (rows.length === 0) {
      throw new Error('Post not found')
    }

    return rows[0]
  } catch (error) {
    throw new Error('Post not found')
  }
}
