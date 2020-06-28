import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/link';

let mapStateToProps = (state: any, ownProps: any) => {
	return {
		active: ownProps.filter !== state.visibilityFilter,
	};
};

let mapDispatchToProps = (dispatch: any, ownProps: any) => ({
	onClick() {
		dispatch(setVisibilityFilter(ownProps.filter));
	},
});

let FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
