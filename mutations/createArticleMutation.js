const createArticle = `#graphql
mutation {
  createArticle(params: {
    title: "5 Ways To Achieve Personal Gold"
    subTitle: "5 Ways To Achieve Personal Gold"
    body: "Test"
    accountId: "ResimaxVIP"
    status: "enabled"
    backgroundImage: "https://trampoline-content-articles.s3-ap-southeast-2.amazonaws.com/contents/images/header.png"
    defaultButtonText: "Read it now"
    size: "small"
    previewImg: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/holmanwebb/newsfeed-article-unread.png"
    previewIcon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/holmanwebb/newsfeed-article-unread.png"
    newsfeedUnviewedIcon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/holmanwebb/newsfeed-article-unread.png"
    newsfeedViewedIcon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/holmanwebb/newsfeed-article-read.png"
    categoryId: "ResimaxVIP#MINDSET"
    autoAssignNewsfeed: "yes"
    groupIds: [7]    
  }) {
    id
  }
}
`;