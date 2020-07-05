import React from 'react';

const StatelessComponent = ({ msg = 'nothing' }) => {
	return <p>hello {msg}</p>;
};

export default StatelessComponent;
