import React, { useState } from 'react';
import CreateDischarge from './discharge/CreateDischarge';
import './static/styles/CreateScene.css';
import { nanoid } from 'nanoid';
import Discharge from './discharge/Discharge';

const Scene = () => {
	//discharge list
	const [dischargeList, setDischargeList] = useState([]);
	const [item, setItem] = useState();

	//set name for discharge as object
	const onMutate = (e) => {
		setItem({
			...item,
			[e.target.id]: e.target.value,
		});
	};

	//modal
	const [open, setOpen] = useState(false);
	const toggleModal = () => {
		setOpen(!open);
	};

	//enter name
	const onEntry = () => {
		setDischargeList([...dischargeList, item]);
		toggleModal();
	};

	return (
		<>
			<div className='page-container'>
				<div className='header text-center'>
					<h2>Create Scene</h2>
					<button className='btn btn-primary' onClick={toggleModal}>
						Add Discharge
					</button>
				</div>
				{dischargeList &&
					dischargeList.map((obj, index) => (
						<Discharge obj={obj} index={index} key={nanoid()} />
					))}

				<CreateDischarge
					open={open}
					toggleModal={toggleModal}
					onMutate={onMutate}
					onEntry={onEntry}
				/>
			</div>
		</>
	);
};

export default Scene;
