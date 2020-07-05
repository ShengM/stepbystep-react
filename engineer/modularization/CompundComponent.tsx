import React, { Component } from 'react';
class GroupButton extends Component {
	render() {
		return (
			<>
				{React.Children.map(this.props.children, (child) => {
					// @ts-ignore
					return child.type
						? // @ts-ignore
						  React.cloneElement(child, {
								onClick: () => {
									// @ts-ignore
									this.props.onChange(child.props.value);
								},
						  })
						: child;
				})}
			</>
		);
	}
}

export default () => {
	return (
		// @ts-ignore
		<GroupButton onChange={(e) => console.log('onChange:', e)}>
			<button value="red">Red</button>
			<button value="yellow">Yellow</button>
			<button value="blue">Blue</button>
			<button value="white">White</button>
		</GroupButton>
	);
};
