import React from 'react';
import StatelessComponent from './StatelessComponent';

const HOCComponent = (Component: any) => {
	return class extends React.Component {
		componentDidUpdate() {
			console.log('组件更新');
		}

		render() {
			return <Component {...this.props} />;
		}
	};
};

export default HOCComponent(StatelessComponent);
