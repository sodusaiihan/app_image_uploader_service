import { gql } from 'apollo-server-core'
import { queryTypeDefs } from './queryTypeDefs'
import { mutationTypeDefs } from './mutationTypeDefs'
import {
  postTypeDefs,
  responseTypeDefs,
  scalarTypeDefs,
  userTypeDefs,
} from './types'

const schema = gql`
  ${scalarTypeDefs}

  ${userTypeDefs}

  ${postTypeDefs}

  ${responseTypeDefs}

  ${queryTypeDefs}

  ${mutationTypeDefs}
`

export default schema
