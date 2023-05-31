import Repository from '../../../database'
import { User } from '../../types'

export const signIn = async (_: any, { email, password }: User) => {
  try {
    const query = 'SELECT * FROM users WHERE email = $1'
    const values = [email]
    const user = await Repository.query(query, values)
    const foundUser = user.rows.find((row) => row.email === email)

    if (!email) {
      return {
        success: false,
        message: 'Email is required',
      }
    }
    if (!password) {
      return {
        success: false,
        message: 'Password is required',
      }
    }
    if (!foundUser) {
      return {
        success: false,
        message: 'User not found',
      }
    }
    const validPassword = password === foundUser.password
    if (!validPassword) {
      return {
        success: false,
        message: 'Invalid password',
      }
    }

    return {
      success: true,
      message: 'User authenticated successfully',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to sign in',
    }
  }
}
