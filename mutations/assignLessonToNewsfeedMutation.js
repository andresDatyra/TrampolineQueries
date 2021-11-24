const assignLessonToNewsfeed = `#graphql
mutation {
  assignLessonToNewsfeed(params: {
    lessonId: 10
    type: "article"
    userIds: ["ResimaxVIP#d8dd1f81-7ff2-4d61-b9c8-b06ee7587ad1"]
    accountId: "ResimaxVIP"
  })
  {
    id
  }
}
`;