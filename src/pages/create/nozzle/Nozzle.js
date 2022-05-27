import React from 'react';

const Nozzle = ({ nozzleObj, index, deleteNozzle }) => {
	const handleDelete = () => {
		deleteNozzle(index);
	};

	return (
		<div className='nozzle-wrapper'>
			<div className='nozzle-information'>
				<h5>
					<b>Nozzle</b>
				</h5>
				<p>{nozzleObj.GPM} GPM</p>
				<p>{nozzleObj.PSI} PSI</p>
			</div>
			<footer>
				<button onClick={handleDelete}>Delete</button>
			</footer>
		</div>
	);
};

export default Nozzle;
