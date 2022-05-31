import React, { useState } from 'react';
import Hoseline from './Hoseline';
import AddHoseline from './AddHoseline';
import NozzleMain from '../nozzle/NozzleMain';
import { nanoid } from 'nanoid';

const HoselineMain = ({
	hoseState,
	setHoseState,
	nozzleState,
	setNozzleState,
}) => {
	//hoseline list
	const [item, setItem] = useState({
		hoseGpm: 0,
	});

	//set state for hoseline
	const onMutate = (e) => {
		setItem({
			...item,
			[e.target.id]: e.target.value,
		});
	};

	//friction loss addition

	//modal
	const [open, setOpen] = useState(false);
	const toggleModal = () => setOpen(!open);

	const onEntry = () => {
		setHoseState([...hoseState, item]);
		toggleModal();
	};

	return (
		<div className='hoseline-container'>
			<div className='hoseline-header'>
				<h5>Hoseline:</h5>
			</div>
			<div className='hoses-div'>
				{hoseState &&
					hoseState.map((obj, index) => (
						<Hoseline obj={obj} index={index} key={nanoid()} />
					))}
				<NozzleMain
					nozzleState={nozzleState}
					setNozzleState={setNozzleState}
					hoselineList={hoseState}
				/>
			</div>
			<button className='add-hose-button' onClick={toggleModal}>
				Add Hose
			</button>
			<AddHoseline
				open={open}
				toggleModal={toggleModal}
				onMutate={onMutate}
				onEntry={onEntry}
			/>
		</div>
	);
};

export default HoselineMain;
