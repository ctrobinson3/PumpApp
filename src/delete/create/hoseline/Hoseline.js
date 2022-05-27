import React, { useState } from 'react';
import EditHoseline from '../discharge/components/EditDischarge';

const Hoseline = ({ hoseObj, index, deleteHose }) => {
	//state

	//edit modal

	//actions
	const handleDelete = () => {
		deleteHose(index);
	};

	return (
		<div className='hose-wrapper'>
			<div className='hose-info'>
				<h5>
					<b>Hose {index + 1}</b>
				</h5>
				<p>{hoseObj.Diameter}"</p>
				<p>{hoseObj.Length} feet</p>
			</div>
			<footer>
				<button onClick={handleDelete}>Delete</button>
			</footer>
		</div>
	);
};

export default Hoseline;
