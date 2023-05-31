import { gql } from 'apollo-server-core'

export const postTypeDefs = gql`
  type Post {
    postid: ID!
    userid: ID!
    title: String!
    imageurl: String!
    description: String!
  }
`
