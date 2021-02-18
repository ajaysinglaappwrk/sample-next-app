import React from 'react';
import Text from './components/selectors/Text/TextInternalComp';
import Container from './components/selectors/Container/index';

import exportedJSX from './ExportedJSX'

const Resolver = { Text,Container }; // All components needs to be registered here.

const resolveComponent = (compName) => {
	return Resolver[compName];
}

const getJSX = (nodes) => {
	debugger;
	let elementsAtThatLevel = []
	if (!nodes) {
		return elementsAtThatLevel;
	}
	nodes.forEach(element => {
		let elementType = element.type;
		let reactEl = null;
		if (element.props && element.props.children) {
			reactEl = React.createElement(
				resolveComponent(elementType),
				element.props,
				getJSX(element.props.children)
			);
		} else {
			reactEl = React.createElement(
				resolveComponent(elementType),
				element.props,
				[]
			);
		}

		elementsAtThatLevel.push(reactEl);
	})
	return elementsAtThatLevel;
}
const JSXObj = JSON.parse(exportedJSX);
const myJSX = getJSX(JSXObj)[0]


export default myJSX;

