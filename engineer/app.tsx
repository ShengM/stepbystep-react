import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

function Main() {
	import('./components/util').then(({ Util }) => Util.show());
	return <h1>engineer2</h1>;
}

ReactDOM.render(<Main />, document.getElementById('app'));
