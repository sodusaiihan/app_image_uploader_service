import Repository from '../../../database'
import { Post } from '../../types'

export const deletePostById = async (_: any, { postid }: Post) => {
  try {
    if (!postid) {
      throw new Error(`Post ${postid} not exits`)
    }
    const query = 'DELETE FROM posts WHERE postid = $1'
    await Repository.query(query, [postid])
    return true
  } catch (error) {
    throw new Error('Error deleting post')
  }
}
