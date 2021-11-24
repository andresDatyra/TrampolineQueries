const createCourse = `#graphql
mutation {
  createCourse(params: {
      bgImage: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/course_bg_HPC.png"
	  	icon: "https://trampoline-asset.s3-ap-southeast-2.amazonaws.com/holmanwebb/category-group.png"
	  	bgColor: "0xFFB48B8C"
      status: "enabled"
      description: "Ever wondered if your ego is affecting your leadership? Perhaps you haven’t spotted the signs, and maybe it’s holding you back. In this course you’ll get a reality check, and some really practical advice that will help you manage your ego – making you a better leader!"
      title: "Let go of your ego"
      categoryId: "holmanwebb#CAREER_PROGRESSION" # get accountId from this field
	  
      courseVideos: { existing: [{ id: 175, sequence: 1 }] }
	  
      courseChallenges: { existing: [{ id: 61, sequence: 2 }] }
	  
      courseQuizzes: { existing: [{ id: 99, sequence: 7 }] }
	  
      groupIds: [14] # will be created on CourseGroups
  }){
    id
  }
}
`;