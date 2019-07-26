import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/home.scss';
import classNames from "classnames/bind";

const CB = classNames.bind(styles);

export default class Home extends React.Component {
	render() {
		return (
			<div className={CB("qwer")}>我是home!啦啦啦~</div>
		);
	}
}