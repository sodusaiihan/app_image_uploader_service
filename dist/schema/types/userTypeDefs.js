"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTypeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.userTypeDefs = (0, apollo_server_core_1.gql) `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;
