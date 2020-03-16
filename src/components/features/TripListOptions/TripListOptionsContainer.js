import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters,
  changeSearchPhrase,
  createActionAddTag,
  createActionRemoveTag,
  createActionChangeDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  createActionAddTag: addTag => dispatch(createActionAddTag(addTag)),
  createActionRemoveTag: removeTag => dispatch(createActionRemoveTag(removeTag)),
  createActionChangeDuration: ({type, value}) => dispatch(createActionChangeDuration({type, value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
