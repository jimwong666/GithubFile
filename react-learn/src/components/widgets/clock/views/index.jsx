import React from 'react';

export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	componentDidMount() {
		this.Timer = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.Timer)
	}

	render() {
		return (
			<h2>now is {this.state.date.toLocaleTimeString()}</h2>
		)
	}
}