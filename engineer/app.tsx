import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './app.less';

let LazyComponent = React.lazy(() => import('./components/lazyComponent'));

function Main() {
	return (
		<fieldset>
			<legend>Lazy Component</legend>
			<Suspense fallback={<div>The component is loading...</div>}>
				<LazyComponent />
			</Suspense>
		</fieldset>
	);
}

ReactDOM.render(<Main />, document.getElementById('app'));
