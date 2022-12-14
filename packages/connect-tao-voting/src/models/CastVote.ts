import { subscription } from '@1hive/connect-core'
import { SubscriptionCallback, SubscriptionResult } from '@1hive/connect-types'

import Voter from './Voter'
import { CastVoteData, IDisputableVotingConnector } from '../types'

export default class CastVote {
  #connector: IDisputableVotingConnector

  readonly id: string
  readonly voteId: string
  readonly voterId: string
  readonly caster: string
  readonly supports: boolean
  readonly stake: string
  readonly createdAt: string

  constructor(data: CastVoteData, connector: IDisputableVotingConnector) {
    this.#connector = connector

    this.id = data.id
    this.voteId = data.voteId
    this.voterId = data.voterId
    this.caster = data.caster
    this.supports = data.supports
    this.stake = data.stake
    this.createdAt = data.createdAt
  }

  async voter(): Promise<Voter> {
    return this.#connector.voter(this.voterId)
  }

  onVoter(callback?: SubscriptionCallback<Voter>): SubscriptionResult<Voter> {
    return subscription<Voter>(callback, (callback) =>
      this.#connector.onVoter(this.voterId, callback)
    )
  }
}
