import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/main.scss';
import Home from './Home.jsx';
import classNames from "classnames/bind";

const CB = classNames.bind(styles);

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className={CB("qwer")}>hello~我是第一个React应用！123321</div>
				<Home />
			</div>
		);
	}
}
