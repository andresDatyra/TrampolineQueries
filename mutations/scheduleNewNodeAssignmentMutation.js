const scheduleNewNodeAssignment = `#graphql 
mutation {
  scheduleNewNodeAssignment(
    params: {
      # this is the conversation that appears when user clicks inbox message
      newNode: {
        # very important to set category="inbox"
        category: "inbox"
        accountId: "HPC"
        type: "inboxItem"
        position: 1
        children: [
          {
            customProperties: [
              { key: "imageUrl", value: null }
              { key: "delay", value: "1" }
              { key: "type", value: "Videos" }
              { key: "refId", value: "1" }
            ]
            # very important to set positon. This will determine the sequence
            position: 1
            title: "The importance of well defined goals"
            type: "card"
          }
          {
            position: 2
            customProperties: [{ key: "delay", value: "2" }]
            title: "You should"
            type: "message"
          }
        ]
      }
      # Field: [lesson] [Required]
      # Description: Provide either [id] or [details] field 
      lesson: {
        type: "video"
        # Field: [id] [Optional]
        # Description: Provide id to use existing lesson
        id: 1
        # Field: [details] [Optional]
        # Description: Provide details to create new lesson
        # [Sample]
        # details: {
        #   title: "lesson title"
        #   subTitle: "lesson sub title"
        #   url: "vsc_psd68nw"
        #   duration: "2:17"
        #   categoryId: "HPC#RESULTS"
        #   size:"small"
        #   previewIcon: "https://tym-knowledge-packs-articles.rarebirds.io/images/smallVideoIMG.png"
        #   previewImg: "https://tym-knowledge-packs-articles.rarebirds.io/images/smallVideoIMG.png"
        # }
      }
      # scheduled inbox notif can only be tied to a single account. 
      accountId: "HPC"
      # execution: time to send the scheduled notification 
      execution: "2020-12-11 14:12:13"
      title: "yes, this is title"
      body: "sample push notif body"
      # groupIds: [Optional] Use this to send ONLY to specific groups(related to a single account)
      groupIds: [5]
    }
  )
}
`;