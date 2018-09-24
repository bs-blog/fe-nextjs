const category = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SYSTEM':
      return {
        ...state,
        ...action.system
      }
    default:
      return state
  }
}

export default category
