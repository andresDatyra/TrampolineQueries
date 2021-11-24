//This is for sending progress notif to user(s) who have ongoing challenges
//User will receive 3 notifs if user have 3 challenges that match criteria

const challengeProgressNotif = `#graphql
mutation {
challengeProgressNotif(params: {
    accountId: "holmanwebb"
    groupIds: [8]
    # userIds: [
    #   "holmanwebb#6be21174-44d2-40d4-b916-852e3dbac31a"
    # ]
  })
}
`;