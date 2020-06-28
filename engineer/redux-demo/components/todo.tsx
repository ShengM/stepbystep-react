import React from 'react';

interface Props {
	onClick: () => void;
	completed: boolean;
	text: string;
}

let Todo: React.FC<Props> = ({ onClick, completed, text }) => (
	<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
		{text}
	</li>
);

export default Todo;
