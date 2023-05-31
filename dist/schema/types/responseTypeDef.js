"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTypeDefs = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.responseTypeDefs = (0, apollo_server_core_1.gql) `
  type Response {
    success: Boolean!
    message: String!
    token: String
  }
`;
