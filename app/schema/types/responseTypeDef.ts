import { gql } from 'apollo-server-core'

export const responseTypeDefs = gql`
  type Response {
    success: Boolean!
    message: String!
    token: String
  }
`
