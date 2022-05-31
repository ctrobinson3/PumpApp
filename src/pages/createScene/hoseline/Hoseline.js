import React from 'react';

const Hoseline = (obj, hoseFl, getFl) => {
	const hose = obj.obj;
	const length = hose.len;
	const diameter = hose.diameter;
	const number = obj.index;
	const gpm = hose.hoseGpm;

	const runFl = () => {
		let total = 0;
		if (diameter === '1.75') {
			total = 15.5 * (parseFloat(length) / 100) * (parseFloat(gpm) / 100) ** 2;
		} else if (diameter === '2.5') {
			total = 2 * (parseFloat(length) / 100) * (parseFloat(gpm) / 100) ** 2;
		}

		let t = total.toFixed(2);
		return t;
	};
	let frictionLoss = runFl();

	return (
		<div className='hose-wrapper'>
			<div className='hose-info'>
				<h5>
					<b>Hose {number + 1}</b>
				</h5>
				<p>{diameter}"</p>
				<p>{length} feet</p>
				<p>Hose GPM: {gpm}</p>
				<p>Friction Loss: {frictionLoss}</p>
			</div>
		</div>
	);
};

export default Hoseline;
