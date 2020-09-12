import React from 'react';

const textBox = (props)=>{
	return(
		<div className="mb-3">
		  <label className="form-label">{props.label}</label>
		  <input type="text" className="form-control"  value={props.value} onChange={props.handler}/>
		</div>
	);
};

export default textBox;