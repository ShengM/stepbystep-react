import React, { useState } from 'react';

import StatelessComponent from './StatelessComponent';
import StateComponent from './StateComponent';
import HOCComponent from './HOCComponent';
import RenderPropsComponent from './RenderPropsComponent';
import CompundComponent from './CompundComponent';

export default function ReduxDemo() {
	let [msg, setMsg] = useState('');

	return (
		<fieldset>
			<legend>组件化</legend>
			<StatelessComponent msg="world" />
			<StateComponent />
			<HOCComponent {...{ msg }} />
			<button onClick={() => setMsg(Math.random().toString())}>Set random</button>
			<RenderPropsComponent />
			<CompundComponent />
		</fieldset>
	);
}
