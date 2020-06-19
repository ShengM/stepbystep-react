import React, { Suspense } from 'react';

let LazyComponent = React.lazy(() => import('./components/lazyComponent'));

export function LazyComponentDemo() {
	return (
		<fieldset>
			<legend>Lazy Component</legend>
			<Suspense fallback={<div>The component is loading...</div>}>
				<LazyComponent />
			</Suspense>
		</fieldset>
	);
}
