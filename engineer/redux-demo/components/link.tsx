import React from 'react';

interface Props {
	active: boolean;
	children: [];
	onClick: () => void;
}

let Link: React.FC<Props> = ({ active, children, onClick }) => {
	if (!active) {
		return <span>{children}</span>;
	}

	return (
		<a
			href=""
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}>
			{children}
		</a>
	);
};

export default Link;
