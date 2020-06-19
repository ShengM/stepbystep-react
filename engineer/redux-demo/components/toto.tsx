import React from 'react';
import PropTypes from 'prop-types';

interface Props {
	onClick: () => void;
	completed: Boolean;
	text: String;
}

let Todo: React.FC<Props> = ({ onClick, completed, text }) => {
	return (
		<li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
			{text}
		</li>
	);
};

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
};

export default Todo;
