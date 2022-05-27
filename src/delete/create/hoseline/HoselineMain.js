import React, { useEffect, useState } from 'react';
import Hoseline from './Hoseline';
import AddHoseline from './AddHoseline';
import NozzleMain from '../nozzle/NozzleMain';
import { nanoid } from 'nanoid';

const HoselineMain = ({ dischargeKey }) => {
	//key
	let hoseKey = dischargeKey + nanoid();
	// state
	const [hoselineList, setHoselineList] = useState([]);

	//localstorage
	useEffect(() => {
		let arr = localStorage.getItem(dischargeKey);

		if (arr) {
			let obj = JSON.parse(arr);
			setHoselineList(obj);
		}
	}, []);

	//modal
	const [open, setOpen] = useState(false);
	const toggleModal = () => setOpen(!open);

	//actions
	const saveHoseline = (hoseObj) => {
		let tempList = hoselineList;
		tempList.push(hoseObj);
		localStorage.setItem(dischargeKey, JSON.stringify(tempList));
		setHoselineList(tempList);
	};

	const deleteHose = (index) => {
		let tempList = hoselineList;
		tempList.splice(index, 1);
		localStorage.setItem(dischargeKey, JSON.stringify(tempList));
		setHoselineList(tempList);
		window.location.reload();
	};

	return (
		<div className='hoseline-container'>
			<div className='hoseline-header'>
				<h5>Hoseline:</h5>
			</div>
			<div className='hoses-div'>
				{hoselineList &&
					hoselineList.map((obj, index) => (
						<Hoseline
							hoseObj={obj}
							index={index}
							deleteHose={deleteHose}
							key={nanoid()}
						/>
					))}
				<NozzleMain dischargeKey={dischargeKey} />
			</div>
			<button className='add-hose-button' onClick={toggleModal}>
				Add Hose
			</button>
			<AddHoseline open={open} toggleModal={toggleModal} save={saveHoseline} />
		</div>
	);
};

export default HoselineMain;
