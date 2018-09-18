const story = (state = [], action) => {
  switch (action.type) {
    case 'SET_STORY_LIST':
      return {
        ...state,
        storyList: action.storyList
      }
    default:
      return state
  }
}

export default story
