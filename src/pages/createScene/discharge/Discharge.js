import React, { useState } from 'react';
import HoselineMain from '../hoseline/HoselineMain';

const Discharge = ({ obj, index }) => {
	const [pdp, setPdp] = useState(0);
	const [fl, setFl] = useState(0);
	const [gpm, setGpm] = useState(0);
	const [hoseState, setHoseState] = useState([]);
	const [nozzleState, setNozzleState] = useState([]);

	//GPM
	const getGpm = () => {
		for (let i = 0; i < nozzleState.length; i++) {
			let noz = nozzleState[i];
			let nozG = noz.nozGpm;
			setGpm(nozG);
		}
	};

	//Friction Loss
	const getFl = () => {
		let totalFriction = 0;
		let totalPdp = 0;
		let highestNozz = 0;
		for (let i = 0; i < hoseState.length; i++) {
			let thisHose = hoseState[i];
			let gpm = thisHose.hoseGpm;
			let dia = thisHose.diameter;
			let len = thisHose.len;
			let total = 0;
			if (dia === '1.75') {
				total = 15.5 * (parseFloat(len) / 100) * (parseFloat(gpm) / 100) ** 2;
			} else if (dia === '2.5') {
				total = 2 * (parseFloat(len) / 100) * (parseFloat(gpm) / 100) ** 2;
			}
			let t = total.toFixed(2);
			totalFriction += parseFloat(t);
		}
		setFl(totalFriction);
		for (let i = 0; i < nozzleState.length; i++) {
			let noz = nozzleState[i];
			let nP = noz.nozPsi;
			let nozP = parseFloat(nP);
			if (nozP > highestNozz) {
				highestNozz = nozP;
			}
		}
		totalPdp = highestNozz + totalFriction;
		setPdp(totalPdp);
	};

	function getEntered() {
		getGpm();
		getFl();
	}

	//displays
	const name = obj.dischargeName;

	return (
		<div className='discharge-wrapper'>
			<div className='card-header'>
				<h3>{name}</h3>
				<label className='label-header'>GPM: {gpm}</label>
				<label className='label-header'>Friction Loss: {fl}</label>
				<label className='label-header'>Discharge Pressure: {pdp}</label>
				<button onClick={getEntered}>Calculate</button>
			</div>
			<div className='hoseline-display'>
				<HoselineMain
					hoseState={hoseState}
					setHoseState={setHoseState}
					nozzleState={nozzleState}
					setNozzleState={setNozzleState}
				/>
			</div>
			<div className='card-btns'></div>
		</div>
	);
};

export default Discharge;
