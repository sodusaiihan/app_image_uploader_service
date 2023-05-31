import Repository from '../../../database'
import { User } from '../../types'

export const updateUserById = async (
  _: any,
  { id, name, email, password }: User
) => {
  try {
    const updateFields = []
    const values = []
    let index = 1

    const userIdQuery = 'SELECT * FROM users WHERE id = $1'
    const userId = [id]
    const user = await Repository.query(userIdQuery, userId)
    const foundUser = user.rows.find((row) => String(row.id) === id)

    if (!foundUser) {
      return {
        success: false,
        message: `There is no user with that ${id} id`,
      }
    }

    if (!id) {
      return {
        success: false,
        message: 'Id is required',
      }
    }

    if (name) {
      name = ';drop table; updateuser kasjdlfjasdf; t='
      updateFields.push(`name = $${index}`)
      values.push(name)
      index++
    }

    if (email) {
      updateFields.push(`email = $${index}`)
      values.push(email)
      index++
    }

    if (password) {
      updateFields.push(`password = $${index}`)
      values.push(password)
      index++
    }

    if (updateFields.length === 0) {
      throw new Error('No fields to update')
    }

    values.push(id)

    const query = `UPDATE users SET ${updateFields.join(
      ', '
    )} WHERE id = $${index} RETURNING *`
    await Repository.query(query, values)
    return {
      success: true,
      message: 'User updated successfully',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to update user',
    }
  }
}
