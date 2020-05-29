class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(err, errInfo) {
		console.log('[ErrorBoundary]', err, errInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h2>something is wrong</h2>;
		}

		return this.props.children;
	}
}

function Child() {
	let random = Math.random();
	if (random > 0.5) {
		a.b();
	}

	return <h3>This is child</h3>;
}

function App() {
	return (
		<ErrorBoundary>
			<Child />
		</ErrorBoundary>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
