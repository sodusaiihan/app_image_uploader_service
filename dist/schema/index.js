"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const queryTypeDefs_1 = require("./queryTypeDefs");
const mutationTypeDefs_1 = require("./mutationTypeDefs");
const types_1 = require("./types");
const schema = (0, apollo_server_core_1.gql) `
  ${types_1.scalarTypeDefs}

  ${types_1.userTypeDefs}

  ${types_1.postTypeDefs}

  ${types_1.responseTypeDefs}

  ${queryTypeDefs_1.queryTypeDefs}

  ${mutationTypeDefs_1.mutationTypeDefs}
`;
exports.default = schema;
