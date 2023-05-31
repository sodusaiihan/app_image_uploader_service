"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTypeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.postTypeDefs = (0, apollo_server_core_1.gql) `
  type Post {
    postid: ID!
    userid: ID!
    title: String!
    imageurl: String!
    description: String!
  }
`;
