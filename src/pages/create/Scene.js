import React, { useEffect, useState } from 'react';
import CreateDischarge from './discharge/CreateDischarge';
import Discharge from './discharge/components/Discharge';
import './static/styles/CreateScene.css';
import { nanoid } from 'nanoid';

const Scene = () => {
	//state
	const [dischargeList, setDischargeList] = useState([]);

	//local storage
	useEffect(() => {
		let arr = localStorage.getItem('dischargeList');

		if (arr) {
			let obj = JSON.parse(arr);
			setDischargeList(obj);
		}
	}, []);

	//modal
	const [open, setOpen] = useState(false);
	const toggleModal = () => {
		setOpen(!open);
	};

	//actions
	const saveDischarge = (dischargeObj) => {
		let tempList = dischargeList;
		tempList.push(dischargeObj);
		localStorage.setItem('dischargeList', JSON.stringify(tempList));
		setDischargeList(tempList);
	};

	const deleteDischarge = (index) => {
		let tempList = dischargeList;
		tempList.splice(index, 1);
		localStorage.setItem('dischargeList', JSON.stringify(tempList));
		setDischargeList(tempList);
		window.location.reload();
	};

	const updateDischargeArray = (obj, index) => {
		let tempList = dischargeList;
		tempList[index] = obj;
		localStorage.setItem('dischargeList', JSON.stringify(tempList));
		setDischargeList(tempList);
		window.location.reload();
	};

	return (
		<div className='page-container'>
			<div className='header text-center'>
				<h3>Create Scene</h3>
				<button className='btn btn-primary' onClick={toggleModal}>
					Add Discharge
				</button>
			</div>
			<div className='discharge-container'>
				{dischargeList &&
					dischargeList.map((obj, index) => (
						<Discharge
							dischargeObj={obj}
							index={index}
							deleteDischarge={deleteDischarge}
							updateDischargeArray={updateDischargeArray}
							key={nanoid()}
						/>
					))}
			</div>
			<CreateDischarge
				open={open}
				toggleModal={toggleModal}
				save={saveDischarge}
			/>
		</div>
	);
};

export default Scene;
