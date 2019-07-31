import React from 'react';
import styles from '_styles/main.scss';
import Home from '_pages/home/views/home.jsx';
import classNames from "classnames/bind";

const CB = classNames.bind(styles);

export default class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className={CB("qwer")}>hello~我是第一个React应用！123321</div>
				<Home />
			</React.Fragment>
		);
	}
}
