const createVideo = `#graphql
  mutation {
  createVideo(params: {
    title: "lesson title"
    subTitle: "lesson sub title"
    url: "vsc_psd68nw"
    duration: "2:17"
    accountId: "HPC"
    categoryId: "HPC#RESULTS"
    size: "small"
    # groupIds is optional.
    groupIds: [5]
    previewIcon: "https://tym-knowledge-packs-articles.rarebirds.io/images/smallVideoIMG.png"
    previewImg: "https://tym-knowledge-packs-articles.rarebirds.io/images/smallVideoIMG.png"
    newsfeedUnviewedIcon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/video-new.png"
    newsfeedViewedIcon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/video-viewed.png"
  }) {
    id
  }
}
`