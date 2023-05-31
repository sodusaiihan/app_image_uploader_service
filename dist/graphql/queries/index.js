"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.getUserById = exports.getAllPost = exports.getPostByPostId = void 0;
const postQuery_1 = require("./postQuery");
Object.defineProperty(exports, "getPostByPostId", { enumerable: true, get: function () { return postQuery_1.getPostByPostId; } });
Object.defineProperty(exports, "getAllPost", { enumerable: true, get: function () { return postQuery_1.getAllPost; } });
const userQuery_1 = require("./userQuery");
Object.defineProperty(exports, "getUserById", { enumerable: true, get: function () { return userQuery_1.getUserById; } });
Object.defineProperty(exports, "getAllUsers", { enumerable: true, get: function () { return userQuery_1.getAllUsers; } });
