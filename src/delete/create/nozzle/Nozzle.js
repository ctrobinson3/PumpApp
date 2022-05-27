import React from 'react';

const Nozzle = ({ nozzleObj, index, key }) => {
	return (
		<div className='nozzle-wrapper'>
			<div className='nozzle-information'>
				<h5>
					<b>Nozzle</b>
				</h5>
				<p>{nozzleObj.GPM} GPM</p>
				<p>{nozzleObj.PSI} PSI</p>
			</div>
		</div>
	);
};

export default Nozzle;
