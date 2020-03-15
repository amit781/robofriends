import React from 'react';

const Scroll = (props) => {
	const divStyle={
  overflowY: 'scroll',
  border:'1px solid black',
  height:'500px',
	};

	return (
		<div style={divStyle}>
			{props.children}
		</div>
	);
}

export default Scroll;