import React, { Component, useMemo } from 'react';
import WebView from 'react-electron-web-view';
import './App.css';
import GridLayout from 'react-grid-layout';
import { fromJS } from 'immutable'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTab } from './redux/tabs/actionCreators';
import Tabs from './app/Tabs'
class App extends Component {
	render() {
			return <Tabs />
	}
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addTab }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);