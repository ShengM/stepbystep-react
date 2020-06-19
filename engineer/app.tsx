import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

import { LazyComponentDemo } from './lazy-component-demo/lazyComponentDemo';
import ReduxDemo from './redux-demo';

function Main() {
	return (
		<React.Fragment>
			<LazyComponentDemo />
			<ReduxDemo />
		</React.Fragment>
	);
}

ReactDOM.render(<Main />, document.getElementById('app'));
