"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationTypeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.mutationTypeDefs = (0, apollo_server_core_1.gql) `
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
`;
