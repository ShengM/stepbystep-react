function Main() {
	return (
		<React.Fragment>
			<BindingDemo />
			<ListDemo />
			<ConditionDemo />
			<CommunicationDemo />
		</React.Fragment>
	);
}

class BindingDemo extends React.Component {
	constructor() {
		super();
		this.state = { userName: '小明' };
		this.onUserNameChangeWithContext = this.onUserNameChange.bind(this);
	}

	onUserNameChange(ev) {
		this.setState({
			userName: ev.target.value,
		});
	}

	render() {
		return (
			<fieldset>
				<legend>数据及事件绑定</legend>
				<span>UserName:</span>
				<input
					type="text"
					value={this.state.userName}
					onChange={this.onUserNameChangeWithContext}
					placeholder="input user name"
				/>
				<input
					type="text"
					value={this.state.userName}
					onChange={this.onUserNameChangeWithContext}
					placeholder="input user name twice"
				/>
			</fieldset>
		);
	}
}

class ListDemo extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [
				{ id: '1', text: 'item1' },
				{ id: '2', text: 'item2' },
				{ id: '3', text: 'item3' },
				{ id: '4', text: 'item4' },
				{ id: '5', text: 'item5' },
				{ id: '6', text: 'item6' },
			],
		};
	}

	render() {
		return (
			<fieldset>
				<legend>列表渲染</legend>
				<ul>
					{this.state.items.map((item) => (
						<li key={item.id}>{item.text}</li>
					))}
				</ul>
			</fieldset>
		);
	}
}

class ConditionDemo extends React.Component {
	constructor() {
		super();
		this.state = { showText: true };
		this.onBtnClickBinded = this.onBtnClick.bind(this);
	}

	onBtnClick() {
		this.setState({
			showText: !this.state.showText,
		});
	}

	render() {
		return (
			<fieldset>
				<legend>条件渲染</legend>
				<button onClick={this.onBtnClickBinded}>切换</button>
				{this.state.showText ? <span>This is a section of text.</span> : null}
			</fieldset>
		);
	}
}

function CommunicationDemo() {
	return (
		<fieldset>
			<legend>组件通信</legend>
			<Parent />
		</fieldset>
	);
}

class Parent extends React.Component {
	constructor() {
		super();
		this.state = { msg: 'hello from parent' };
		this.onMsgChangeBinded = this.onMsgChange.bind(this);
	}

	onMsgChange(ev) {
		this.setState({
			msg: ev.target.value,
		});
	}

	render() {
		let { msg } = this.state;
		let onMsgChange = this.onMsgChangeBinded;
		return (
			<React.Fragment>
				<div>
					<ChildOne msg={msg} onMsgChange={onMsgChange} />
				</div>
				<div>
					<ChildTwo msg={msg} onMsgChange={onMsgChange} />
				</div>
			</React.Fragment>
		);
	}
}

class ChildOne extends React.Component {
	render() {
		return (
			<React.Fragment>
				<span>child one -- </span>
				<span>msg from parent: {this.props.msg}</span>
				<input type="text" onChange={this.props.onMsgChange} />
			</React.Fragment>
		);
	}
}

class ChildTwo extends React.Component {
	render() {
		return (
			<React.Fragment>
				<span>child two -- </span>
				<span>msg from parent: {this.props.msg}</span>
				<input type="text" onChange={this.props.onMsgChange} />
			</React.Fragment>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('app'));
