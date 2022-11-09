import { QueryResult } from '@1hive/connect-thegraph'

import WrappedToken from '../../models/WrappedToken'
import { WrappedTokenData } from '../../types'

function buildWrappedToken(wrappedToken: any, connector: any): WrappedToken {
  const { id, name, symbol, decimals, token, tokenWrapper } = wrappedToken

  const castVoteData: WrappedTokenData = {
    id,
    name,
    symbol,
    decimals,
    tokenId: token.id,
    tokenWrapperId: tokenWrapper.id,
  }

  return new WrappedToken(castVoteData, connector)
}

export function parseWrappedToken(
  result: QueryResult,
  connector: any
): WrappedToken | null {
  const wrappedToken = result.data.wrappedToken
  return wrappedToken ? buildWrappedToken(wrappedToken, connector) : null
}
