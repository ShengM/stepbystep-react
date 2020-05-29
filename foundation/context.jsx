let themeContext = React.createContext('blue');

function App() {
	return (
		<fieldset>
			<legend>Context Demo</legend>
			<themeContext.Provider value="red">
				<Toolbar />
			</themeContext.Provider>
			<themeContext.Provider value="lightblue">
				<Toolbar />
			</themeContext.Provider>
			<Toolbar />
		</fieldset>
	);
}

function Toolbar() {
	return (
		<div className="toolbar">
			<ThemeButton />
			<ThemeButton />
			<ThemeButton />
		</div>
	);
}

class ThemeButton extends React.Component {
	static contextType = themeContext;

	render() {
		return <button style={{ backgroundColor: this.context }}>click me</button>;
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
