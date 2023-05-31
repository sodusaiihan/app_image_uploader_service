import { gql } from 'apollo-server-core'

export const mutationTypeDefs = gql`
  type Mutation {
    signUp(name: String!, email: String!, password: String!): Response!
    signIn(email: String!, password: String!): Response!
    updateUserById(
      id: String!
      name: String
      email: String
      password: String
    ): Response!
    deleteUserById(id: String!): Boolean

    createPost(
      userid: ID!
      title: String!
      imageurl: String!
      description: String!
    ): Response!
    updatePostById(
      postid: ID!
      title: String!
      imageurl: String!
      description: String!
    ): Response!
    deletePostById(postid: ID!): Boolean
  }
`
