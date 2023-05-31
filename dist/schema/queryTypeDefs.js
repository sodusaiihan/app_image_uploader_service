"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryTypeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.queryTypeDefs = (0, apollo_server_core_1.gql) `
  type Query {
    getAllUsers: [User]
    getAllPost: [Post]
    getUserById(id: ID!): User!
    getPostByPostId(postid: ID!): Post
  }
`;
