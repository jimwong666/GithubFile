import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/home.scss';
import classNames from "classnames/bind";
import { Button } from "antd";

const CB = classNames.bind(styles);

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div className={CB("qwer")}>我是home!啦啦啦~</div>
				<div id={CB("qwer")}>我是id!啦啦啦~</div>
				<Button type='primary'>Button</Button>
			</div>
		);
	}
}