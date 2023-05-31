import Repository from '../../../database'
import { User } from '../../types'

export const signUp = async (_: any, { name, email, password }: User) => {
  try {
    const emailQuery = 'SELECT * FROM users WHERE email = $1'
    const emailValue = [email]
    const user = await Repository.query(emailQuery, emailValue)
    const foundUser = user.rows.find((row) => row.email === email)
    if (name.trim() === '') {
      return {
        success: false,
        message: 'Name is required',
      }
    }
    if (foundUser) {
      return {
        success: false,
        message: 'User already exists',
      }
    }
    if (email.trim() === '') {
      return {
        success: false,
        message: 'Email is required',
      }
    }
    if (password.trim() === '') {
      return {
        success: false,
        message: 'Password is required',
      }
    }
    const query =
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *'
    const values = [name, email, password]
    await Repository.query(query, values)

    return {
      success: true,
      message: 'User registered successfully',
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to sign up user',
    }
  }
}
