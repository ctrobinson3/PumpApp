import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import AddNozzle from './AddNozzle';
import Nozzle from './Nozzle';

const NozzleMain = ({ dischargeKey }) => {
	//key
	const nozzleKey = dischargeKey + 'noz';

	//modal
	const [open, setOpen] = useState(false);
	const toggleModal = () => setOpen(!open);

	//state
	const [nozzle, setNozzle] = useState([]);

	//local storage
	useEffect((e) => {
		let arr = localStorage.getItem(nozzleKey);

		if (arr) {
			let obj = JSON.parse(arr);
			setNozzle(obj);
		}
	}, []);

	//nozzles gpm and psi
	let gpm = 0;
	let psi = 0;
	for (let i = 0; i < nozzle.length; i++) {
		let noz = nozzle[i];
		let g = noz.GPM;
		let p = noz.PSI;
		let gp = parseFloat(g);
		let ps = parseFloat(p);
		gpm += gp;
		if (ps > psi) psi = ps;
	}
	console.log(gpm, psi);

	//actions
	const saveNozzle = (nozzleObj) => {
		let tempList = nozzle;
		tempList.push(nozzleObj);
		localStorage.setItem(nozzleKey, JSON.stringify(tempList));
		setNozzle(tempList);
		window.location.reload();
	};

	const deleteNozzle = (index) => {
		let tempList = nozzle;
		tempList.splice(index, 1);
		localStorage.setItem(nozzleKey, JSON.stringify(tempList));
		setNozzle(tempList);
		window.location.reload();
	};

	return (
		<div className='nozzle-container'>
			<div className='nozzle-list-div'>
				{nozzle &&
					nozzle.map((obj, index) => (
						<Nozzle
							nozzleObj={obj}
							index={nozzleKey}
							key={nanoid()}
							deleteNozzle={deleteNozzle}
						/>
					))}
			</div>
			<div className='add-noz-btn'>
				<button onClick={toggleModal}>Add Nozzle</button>
			</div>
			<AddNozzle save={saveNozzle} open={open} toggleModal={toggleModal} />
		</div>
	);
};

export default NozzleMain;
