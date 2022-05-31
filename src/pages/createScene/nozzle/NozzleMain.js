import React, { useState } from 'react';
import AddNozzle from './AddNozzle';
import Nozzle from './Nozzle';
import { nanoid } from 'nanoid';

const NozzleMain = ({ hoselineList, nozzleState, setNozzleState }) => {
	const [item, setItem] = useState({
		nozType: '',
		nozGpm: 0,
		nozPsi: 0,
	});

	//setting hoseline GPM
	if (nozzleState.length > 0) {
		const thisNozzle = nozzleState[0];
		const thisGpm = parseFloat(thisNozzle.nozGpm);
		for (let i = 0; i < hoselineList.length; i++) {
			let hose = hoselineList[i];
			hose.hoseGpm = thisGpm;
		}
	}

	//set nozzle info
	const onMutate = (e) => {
		setItem({
			...item,
			[e.target.id]: e.target.value,
		});
	};

	//modal
	const [open, setOpen] = useState(false);
	const toggleModal = () => setOpen(!open);

	//enter nozzle info
	const onEntry = () => {
		setNozzleState([...nozzleState, item]);
		toggleModal();
	};

	return (
		<div className='nozzle-container'>
			<div className='nozzle-list-div'>
				{nozzleState &&
					nozzleState.map((obj) => <Nozzle nozzleObj={obj} key={nanoid()} />)}
			</div>
			<div className='add-noz-btn'>
				<button onClick={toggleModal}>Add Nozzle</button>
			</div>
			<AddNozzle
				open={open}
				toggleModal={toggleModal}
				onMutate={onMutate}
				onEntry={onEntry}
				item={item}
			/>
		</div>
	);
};

export default NozzleMain;
