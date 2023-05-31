import { gql } from 'apollo-server-core'

export const queryTypeDefs = gql`
  type Query {
    getAllUsers: [User]
    getAllPost: [Post]
    getUserById(id: ID!): User!
    getPostByPostId(postid: ID!): Post
  }
`
