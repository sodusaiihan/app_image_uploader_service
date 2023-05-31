import Repository from '../../../database'
import { Post } from '../../types'

export const createPost = async (
  _: any,
  { userid, title, imageurl, description }: Post
) => {
  try {
    const query =
      'INSERT INTO posts (userId, title, imageUrl, description) VALUES ($1, $2, $3, $4) RETURNING *'
    const values = [userid, title, imageurl, description]
    await Repository.query(query, values)

    return {
      success: true,
      message: 'Post created successfully',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to create post',
    }
  }
}
