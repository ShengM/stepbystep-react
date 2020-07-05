import React, { Component } from 'react';

class ToggleVisibleComponent extends Component {
	state = { visible: false };

	toggleVisible = () => {
		this.setState({ visible: !this.state.visible });
	};

	render() {
		let { visible } = this.state;
		let { toggleVisible } = this;
		// @ts-ignore
		return this.props.children(visible, toggleVisible);
	}
}

export default class extends Component {
	render() {
		return (
			<ToggleVisibleComponent>
				{(visible: any, toggleVisible: any) => (
					<div>
						{visible ? <span style={{ marginRight: '10px' }}>hello component</span> : null}
						<button onClick={toggleVisible}>{visible ? '隐藏' : '显示'}</button>
					</div>
				)}
			</ToggleVisibleComponent>
		);
	}
}
