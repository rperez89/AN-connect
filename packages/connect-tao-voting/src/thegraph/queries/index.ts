import gql from 'graphql-tag'

export const GET_DISPUTABLE_VOTING = (type: string) => gql`
  ${type} DisputableVoting($disputableVoting: String!) {
    taoVoting(id: $disputableVoting) {
      id
      dao
      token {
        id      
      }
      setting {
        id
      }
    }
  }
`

export const GET_CURRENT_SETTING = (type: string) => gql`
  ${type} DisputableVoting($disputableVoting: String!) {
    taoVoting(id: $disputableVoting) {
      setting {
        id
        settingId
        voteTime
        supportRequiredPct
        minimumAcceptanceQuorumPct
        delegatedVotingPeriod
        quietEndingPeriod
        quietEndingExtension
        executionDelay
        createdAt
        voting {
          id
        }
      }
    }
  }
`

export const GET_SETTING = (type: string) => gql`
  ${type} Setting($settingId: String!) {
    setting(id: $settingId) {
      id
      settingId
      voteTime
      supportRequiredPct
      minimumAcceptanceQuorumPct
      delegatedVotingPeriod
      quietEndingPeriod
      quietEndingExtension
      executionDelay
      createdAt
      voting {
        id
      }
    }
  }
`

export const ALL_SETTINGS = (type: string) => gql`
  ${type} Settings($disputableVoting: String!, $first: Int!, $skip: Int!) {
    settings(where: {
      voting: $disputableVoting
    }, first: $first, skip: $skip) {
      id
      settingId
      voteTime
      supportRequiredPct
      minimumAcceptanceQuorumPct
      delegatedVotingPeriod
      quietEndingPeriod
      quietEndingExtension
      executionDelay
      createdAt
      voting {
        id
      }
    }
  }
`

export const GET_VOTE = (type: string) => gql`
  ${type} Vote($voteId: String!) {
    vote(id: $voteId) {
      id
      voting { 
        id 
        token {
          id
          symbol  
          decimals
        }
      }
      voteId
      creator
      originalCreator
      context
      status
      setting { 
        id 
        voteTime
        supportRequiredPct
        minimumAcceptanceQuorumPct
        delegatedVotingPeriod
        quietEndingPeriod
        quietEndingExtension
        executionDelay
      }
      startDate
      totalPower
      snapshotBlock
      yeas
      nays
      quietEndingExtensionDuration
      quietEndingSnapshotSupport
      script
      executedAt
      isAccepted
      castVotes {
        id
        voter {
          id
          address
        }
        caster
        supports
        stake
        createdAt
      }
    }
  }
`

export const ALL_VOTES = (type: string) => gql`
  ${type} Votes($disputableVoting: String!, $first: Int!, $skip: Int!) {
    votes(where: {
      voting: $disputableVoting
    }, orderBy: startDate, orderDirection: asc, first: $first, skip: $skip) {
      id
      voting { 
        id 
        token {
          id
          symbol
          decimals
        }
      }
      voteId
      creator
      originalCreator
      context
      status
      setting { 
        id 
        voteTime
        supportRequiredPct
        minimumAcceptanceQuorumPct
        delegatedVotingPeriod
        quietEndingPeriod
        quietEndingExtension
        executionDelay
      }
      startDate
      totalPower
      snapshotBlock
      yeas
      nays
      quietEndingExtensionDuration
      quietEndingSnapshotSupport
      script
      isAccepted
      castVotes {
        id
        voter {
          id
          address
        }
        caster
        supports
        stake
        createdAt
      }
    }
  }
`

export const GET_CAST_VOTE = (type: string) => gql`
  ${type} CastVote($castVoteId: String!) {
    castVote(id: $castVoteId) {
      id
      vote { 
        id 
      }
      voter { 
        id
      }
      caster
      supports
      stake
      createdAt
    }
  }
`

export const ALL_CAST_VOTES = (type: string) => gql`
  ${type} CastVotes($voteId: ID!, $first: Int!, $skip: Int!) {
    castVotes(where: {
      vote: $voteId
    }, first: $first, skip: $skip) {
      id
      vote { 
        id 
      }
      voter { 
        id 
      }
      caster
      supports
      stake
      createdAt
    }
  }
`

export const GET_VOTER = (type: string) => gql`
  ${type} Voter($voterId: String!) {
    voter(id: $voterId) {
      id
      address
      representative {
        address
      }
      representativeFor {
        address
      }
      voting { 
        id
      }
    }
  }
`

export const GET_ERC20 = (type: string) => gql`
  ${type} ERC20($tokenAddress: String!) {
    erc20(id: $tokenAddress) {
      id
      name
      symbol
      decimals
    }
  }
`
