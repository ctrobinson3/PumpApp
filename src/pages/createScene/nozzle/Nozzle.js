import React from 'react';

const Nozzle = ({ nozzleObj }) => {
	const type = nozzleObj.nozType;
	const gpm = nozzleObj.nozGpm;
	const psi = nozzleObj.nozPsi;
	return (
		<div className='nozzle-wrapper'>
			<div className='nozzle-information'>
				<h5>
					<b>{type} Nozzle</b>
				</h5>
				<p>{gpm} GPM</p>
				<p>{psi} PSI</p>
			</div>
		</div>
	);
};

export default Nozzle;
