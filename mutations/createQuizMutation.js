const createQuiz = `#graphql 
mutation {
    createQuiz(
        params: {
            title: "title"
            subTitle: "subTitle"
            accountId: "ResimaxVIP"
            quizNode: {
                name: "yourPeopleComeFirst"
                customProperties: [{ key: "questionCount", value: "3" }]
                title: "Your people come first"
                type: "quiz"
                position: 1
                children: [
                    {
                        position: 1
                        customProperties: [
                            { key: "correctAnswer", value: "Yes" }
                            { key: "correctMsg", value: "High-5!" }
                            {
                                key: "wrongMsg"
                                value: "That’s a really cool thing you did. That’s what makes you an awesome leader!"
                            }]
                            title: "Can you remember the last time you did a really small thing that make someone at work feel special?"
                            type: "question"
                            children: [
                                { position: 1, title: "No", type: "choice" }
                                { position: 2, title: "Yes", type: "choice" }]
                    }
                    {
                        position: 2
                        customProperties: [
                            { key: "correctMsg", value: "You're a superstar!" }
              {
                key: "wrongMsg"
                value: "Uh-oh! The good news is that you can work on this with Alex! Get started by watching her great little video Put your people first."
              }
              { key: "correctAnswer", value: "Yes" }
            ]
            title: "Think about the employee experience from when they first interview with you, right through the onboarding into your business and beyond. Would your people say that you treat them well?"
            type: "question"
            children: [
              { position: 1, title: "Yes", type: "choice" }
              { position: 2, title: "No", type: "choice" }
            ]
          }
          {
            position: 3
            customProperties: [
              { key: "correctMsg", value: "Awesome answer!" }
              {
                key: "wrongMsg"
                value: " Erm...yes it is your role to get people excited about the vision! That’s what will make you a truly incredible leader."
              }
              { key: "correctAnswer", value: "Agree" }
            ]
            title: "It’s your job as a leader to get your people excited about the vision. Do you agree or disagree?"
            type: "question"
            children: [
              { position: 1, title: "Disagree", type: "choice" }
              { position: 2, title: "Agree", type: "choice" }
            ]
          }
        ]
      }
      status: "active"
      body: "[{\"type\":\"title\",\"value\":\"How not to react under pressure\"},{\"type\":\"paragraph\",\"value\":\"Take this pressure test!\",\"fontSize\":16},{\"type\":\"paragraph\",\"value\":\"The great leaders that you see are the ones who seemingly effortlessly handle pressure. So, how do you handle pressure? Bearing in mind that pressure can be both positive and negative.\",\"fontSize\":16},{\"type\":\"paragraph\",\"value\":\"Take this test now and find out what triggers a stress response for you!\",\"fontSize\":16},{\"type\":\"button\",\"action\":\"showQuiz\",\"value\":\"Test your knowledge\"}]"
      defaultButtonText: "defaultButtonText"
      size: "size"
      previewIcon: "https://tym-knowledge-packs-articles.rarebirds.io/images/smallQuizIMG.png"
      previewImg: "https://trampoline-app-assets-resimax.s3-ap-southeast-2.amazonaws.com/newsfeed-small.png"
      categoryId: "ResimaxVIP#MINDSET"
      newsfeedUnviewedIcon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/video-new.png"
      newsfeedViewedIcon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/video-viewed.png"

    }
    ) {
        id
        quizNodeId
        body
        defaultButtonText
        size
        previewIcon
        previewImg
        categoryId
    }
} 
`;
