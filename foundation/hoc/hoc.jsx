function logProps(WrappedComponent) {
	class LogProps extends React.Component {
		componentDidUpdate(prevProps) {
			console.log('old props:', prevProps);
			console.log('new props:', this.props);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	return LogProps;
}

class Foo extends React.Component {
	render() {
		return <h3>This is a normal component. props: {this.props.msg}</h3>;
	}
}

let LogFoo = logProps(Foo);

class App extends React.Component {
	constructor() {
		super();
		this.state = { msg: 'foo' };
		this.onBtnClickBinded = this.onBtnClick.bind(this);
	}

	onBtnClick() {
		this.setState({
			msg: Math.random().toString(),
		});
	}

	render() {
		return (
			<fieldset>
				<legend>HOC Demo</legend>
				<button onClick={this.onBtnClickBinded}>toggle</button>
				<LogFoo msg={this.state.msg} />
			</fieldset>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
