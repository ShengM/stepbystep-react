import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';

import { LazyComponentDemo } from './lazy-component-demo/lazyComponentDemo';
import ReduxDemo from './redux-demo';
import Modularization from './modularization';
import WebComponent from './web-component';

function Main() {
	return (
		<React.Fragment>
			<LazyComponentDemo />
			<ReduxDemo />
			<Modularization />
			<WebComponent />
		</React.Fragment>
	);
}

ReactDOM.render(<Main />, document.getElementById('app'));
