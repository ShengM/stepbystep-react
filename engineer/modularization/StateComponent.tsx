import React from 'react';

class StateComponent extends React.Component {
	state = { count: 1 };

	addCount() {
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<>
				<label>count:</label>
				<span style={{ margin: '0 5px' }}>{this.state.count}</span>
				<button onClick={() => this.addCount()}>add count</button>
			</>
		);
	}
}

export default StateComponent;
