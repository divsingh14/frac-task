import React from 'react';

const textArea = (props) => (
	<div className="mb-3">
	  <label className="form-label">{props.label}</label>
	  <textarea className="form-control" rows="3" onChange={props.handler} ></textarea>
	</div>
);

export default textArea;