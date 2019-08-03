import React from 'react';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
import { Button } from "antd";
import Clock from "components/widgets/clock/views/index.jsx";

const CB = classNames.bind(styles);

export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className={CB("qwer")}>我是home!啦啦啦~</div>
				<div id={CB("qwer")}>我是id!啦啦啦~123we7889451qqqq</div>
				<Button type='primary'>Button</Button>
				<Clock />
			</React.Fragment>
		);
	}
}