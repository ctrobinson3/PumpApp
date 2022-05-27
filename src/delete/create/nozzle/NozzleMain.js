import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import AddNozzle from './AddNozzle';
import Nozzle from './Nozzle';

const NozzleMain = ({ dischargeKey }) => {
	//modal
	const [open, setOpen] = useState(false);
	const toggleModal = () => setOpen(!open);

	//state
	const [nozzle, setNozzle] = useState([]);

	//local storage
	useEffect(() => {
		let arr = localStorage.getItem(dischargeKey + 'noz');

		if (arr) {
			let obj = JSON.parse(arr);
			setNozzle(obj);
		}
	});

	//actions
	const saveNozzle = (nozzleObj) => {
		let tempList = nozzle;
		tempList.push(nozzleObj);
		localStorage.setItem(dischargeKey + 'noz', JSON.stringify(tempList));
		setNozzle(tempList);
		window.location.reload();
	};

	return (
		<div className='nozzle-container'>
			<div className='nozzle-list-div'>
				{nozzle &&
					nozzle.map((obj, index) => (
						<Nozzle nozzleObj={obj} index={index} key={nanoid()} />
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
