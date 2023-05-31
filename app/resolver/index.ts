import {
  createPost,
  deletePostById,
  deleteUserById,
  signIn,
  signUp,
  updatePostById,
  updateUserById,
} from '../graphql/mutations'
import {
  getAllUsers,
  getUserById,
  getAllPost,
  getPostByPostId,
} from '../graphql/queries'

const Resolvers = {
  Query: {
    getAllUsers,
    getUserById,
    getAllPost,
    getPostByPostId,
  },
  Mutation: {
    signUp,
    signIn,
    updateUserById,
    deleteUserById,
    createPost: createPost,
    updatePostById,
    deletePostById,
  },
}

export default Resolvers
