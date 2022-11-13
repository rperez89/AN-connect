import { providers as ethersProviders } from 'ethers'

import { WrappedTokenData } from '../types'

export default class WrappedToken {
  #ethersProvider: ethersProviders.Provider

  readonly id: string
  readonly name: string
  readonly symbol: string
  readonly decimals: string
  readonly tokenId: string
  readonly tokenWrapperId: string
  readonly totalSupply: string

  constructor(
    data: WrappedTokenData,
    ethersProvider: ethersProviders.Provider
  ) {
    this.#ethersProvider = ethersProvider

    this.id = data.id
    this.name = data.name
    this.symbol = data.symbol
    this.decimals = data.decimals
    this.tokenId = data.tokenId
    this.tokenWrapperId = data.tokenWrapperId
    this.totalSupply = data.totalSupply
  }
}
