import { gql } from 'apollo-server-core'

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`
