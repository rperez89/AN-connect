import { QueryResult } from '@1hive/connect-thegraph'

import { TaoVotingData } from '../../types'

export function parseDisputableVoting(
  result: QueryResult
): TaoVotingData {
  const disputableVoting = result.data.disputableVoting

  if (!disputableVoting) {
    throw new Error('Unable to parse disputable voting.')
  }

  const { id, dao, token, setting } = disputableVoting

  return {
    id,
    dao,
    token: token.id,
    currentSettingId: setting.id,
  }
}
