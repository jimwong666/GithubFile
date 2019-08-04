import React from 'react';
import ReactDOM from 'react-dom';
// import {LocaleProvider } from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (El) => {
    ReactDOM.render(
        <AppContainer>
            <El />
        </AppContainer>,
        document.getElementById('root')
    )
};

// zoom~zoom~ React启动！！
render(App);

//热模块替换
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App);
    })
}