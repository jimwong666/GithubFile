import React from 'react';
import styles from '_styles/main.scss';
import Home from '_pages/home/views/home.jsx';
import classNames from "classnames/bind";

const CB = classNames.bind(styles);

export default class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Home />
			</React.Fragment>
		);
	}
}
