
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {StyleSheet, View, Text, ListView, TouchableHighlight} from 'react-native';
import {List} from 'react-native-apex-ui';
const ListItem = List.ListItem;

const Examples = [
	require('./examples/VectorIconExample'),
	require('./examples/ButtonExample'),
	require('./examples/ListExample'),
	require('./examples/AppHeaderExample'),
	require('./examples/PaperExample'),
	require('./examples/PopoverExample'),
	require('./examples/DialogExample'),
	require('./examples/SideboardExample'),
	
	

];

const dataSource = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2,
	sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
}).cloneWithRows(Examples);

class ExampleList extends Component {
	static title = 'ReactNativeApexUI';

	static contextTypes = {
		uiTheme: PropTypes.object.isRequired,
	};

	_handleRowPress = (module) => {
		this.props.navigator.push({module});
	}

	_renderExampleRow = (module: Object, sectionID, rowID) => {
		return this._renderRow(
			module.title,
			module.description,
			() => this._handleRowPress(module),
			rowID,
		);
	}

	_renderRow = (title, description, handler, rowID) => {
		let isLastRow = rowID == (dataSource.getRowCount() - 1);
		return (
			<ListItem 
				title={<ListItemTitle title={title} description={description} />}
				onPress={handler}
				style={styles.row}
				hideSeparator={isLastRow}
			/>
		);
	}

	render() {
		return (
			<ListView
				style={styles.list}
				contentContainerStyle={styles.content}
				dataSource={dataSource}
				renderRow={this._renderExampleRow}
			/>
		);
	}
}

function ListItemTitle({title, description}) {
	if(description) {
		description = 
			<Text style={styles.description}>{description}</Text>
	}
	return (
		<View>
			<Text style={styles.title}>
				{title}
			</Text>
			{description}
		</View>
	);
}

const styles = {
	list: {
		paddingTop: 20,
        flex: 1,
    },
    content: {
    	borderColor: '#d9d9d9',
    	borderWidth: StyleSheet.hairlineWidth,
    },
    row: {
    	backgroundColor: 'white',
    },
    title: {
    	fontSize: 17,
    },
    description: {
    	color: '#999',
    	marginTop: 5,
    },
};

module.exports = ExampleList;