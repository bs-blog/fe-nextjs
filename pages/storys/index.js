import { connect } from 'react-redux'
import Presentational from './Presentational'

const mapStateToProps = (state, ownProps) => {
  return {
    storyList: state.storys.storyList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initStoryList: () => {
      return dispatch(api.updateVideo(id, payload))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational)

export default container
