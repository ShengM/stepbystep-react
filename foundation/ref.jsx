let WrapperButton = React.forwardRef((props, ref) => {
	return <button ref={ref}>{props.children}</button>;
});

class App extends React.Component {
	render() {
		let ref = React.createRef();
		this._wrapperButtonRef = ref;

		return (
			<fieldset>
				<legend>Ref Demo</legend>
				<WrapperButton ref={ref}>click me</WrapperButton>
			</fieldset>
		);
	}

	componentDidMount() {
		console.log('componentDidMount:', this._wrapperButtonRef.current);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
