"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mutations_1 = require("../graphql/mutations");
const queries_1 = require("../graphql/queries");
const Resolvers = {
    Query: {
        getAllUsers: queries_1.getAllUsers,
        getUserById: queries_1.getUserById,
        getAllPost: queries_1.getAllPost,
        getPostByPostId: queries_1.getPostByPostId,
    },
    Mutation: {
        signUp: mutations_1.signUp,
        signIn: mutations_1.signIn,
        updateUserById: mutations_1.updateUserById,
        deleteUserById: mutations_1.deleteUserById,
        createPost: mutations_1.createPost,
        updatePostById: mutations_1.updatePostById,
        deletePostById: mutations_1.deletePostById,
    },
};
exports.default = Resolvers;
