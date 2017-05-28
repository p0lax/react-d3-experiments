import d3 from 'd3';
import React from 'react';
import { findDOMNode  } from 'react-dom';

export const SQUARE_SIZE = 50;
export const WIDTH = 1000;
export const HEIGHT = 300;

class D3Table extends React.Component {
	
	componentDidMount() {
		console.log(d3);
		const container = d3.select(this);
		debugger
		container
			.append('circle')
			.attr('cx', 100)
			.attr('cy', 100)
			.attr('r', 50);
	}
	
	render() {
		return (
			<svg width={WIDTH} height={HEIGHT}></svg>
		);
	}
}

export default D3Table;

