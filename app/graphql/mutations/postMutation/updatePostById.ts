import Repository from '../../../database'
import { Post } from '../../types'

export const updatePostById = async (
  _: any,
  { postid, title, imageurl, description }: Post
) => {
  try {
    const updateFields = []
    const values = []
    let index = 1

    const postIdQuery = 'SELECT * FROM posts WHERE postid = $1 LIMIT 1'
    const postIdValue = [postid]
    const row = await Repository.query(postIdQuery, postIdValue)

    if (row.rowCount === 0) {
      return {
        success: false,
        message: `There is no post with that ${postid} id`,
      }
    }

    if (!postid) {
      return {
        success: false,
        message: 'Post id is required',
      }
    }

    if (title) {
      updateFields.push(`title = $${index}`)
      values.push(title)
      index++
    }

    if (imageurl) {
      updateFields.push(`imageurl = $${index}`)
      values.push(imageurl)
      index++
    }

    if (description) {
      updateFields.push(`description = $${index}`)
      values.push(description)
      index++
    }

    if (updateFields.length === 0) {
      throw new Error('No fields to update')
    }

    values.push(postid)

    const query = `UPDATE posts SET ${updateFields.join(
      ', '
    )} WHERE postid = $${index} RETURNING *`
    await Repository.query(query, values)
    return {
      success: true,
      message: 'Post updated successfully',
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: 'Failed to update post',
    }
  }
}
