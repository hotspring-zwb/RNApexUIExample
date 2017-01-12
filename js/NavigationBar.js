
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {View, Text, Navigator, Animated} from 'react-native';
var NavBarConfig = require('./NavBarConfig');

class NavigationBar extends Navigator.NavigationBar {
	static propTypes = {
		navBarHidden: PropTypes.bool,
	};

	static defaultProps = {
		routeMapper: NavBarConfig,
		...Navigator.NavigationBar.defaultProps,
	};

	state = {
		anim: new Animated.Value(0),
	};

	updateProgress(/*number*/progress, /*number*/fromIndex, /*number*/toIndex) {
		console.log(fromIndex, toIndex);
		super.updateProgress(progress, fromIndex, toIndex);
	}

	doAnimationTo(toValue) {
		Animated.spring(this.state.anim, {toValue}).start();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.navBarHidden != this.props.navBarHidden) {
			this.doAnimationTo(nextProps.navBarHidden ? -64 : 0);
		}
	}

	render() {
		return (
			<Animated.View style={[styles.container, {top: this.state.anim}]}>
				{super.render()}
			</Animated.View>
		);
	}
}

const styles = {
	container: {
		position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
    },
};

module.exports = NavigationBar;
