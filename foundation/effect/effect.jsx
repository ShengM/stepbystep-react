function App() {
	let [count, setCount] = React.useState(0);
	let [showChild, setShowChild] = React.useState(true);

	React.useEffect(() => {
		document.title = count;
	});

	return (
		<div>
			<p>You clicked {count} times.</p>
			<button onClick={() => setCount(count + 1)}>click me</button>
			<button onClick={() => setShowChild(!showChild)}>toggle child</button>
			{showChild ? <Child /> : null}
		</div>
	);
}

function Child() {
	React.useEffect(() => {
		console.log('The child is rendered.');

		return function () {
			console.log('The child is destroyed.');
		};
	});
	return <p>This is child</p>;
}

ReactDOM.render(<App />, document.getElementById('app'));
