import React, { useState } from 'react';
import HoselineMain from '../../hoseline/HoselineMain';
import EditDischarge from './EditDischarge';

const Discharge = ({
	dischargeObj,
	index,
	deleteDischarge,
	updateDischargeArray,
}) => {
	//state
	const [dischargeState, setDischargeState] = useState({
		totalGpm: 0,
		totalFl: 0,
		pdp: 0,
	});

	//edit modal
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};

	//actions
	const updateDischarge = (obj) => {
		updateDischargeArray(obj, index);
	};

	const handleDelete = () => {
		deleteDischarge(index);
	};

	return (
		<div className='discharge-wrapper'>
			<div className='card-header'>
				<h3>{dischargeObj.Name}</h3>

				<label className='label-header'>GPM: {dischargeState.totalGpm}</label>
				<label className='label-header'>
					Friction Loss: {dischargeState.totalFl}
				</label>
				<label className='label-header'>
					Discharge Pressure: {dischargeState.pdp}
				</label>
			</div>
			<div className='hoseline-display'>
				<HoselineMain dischargeKey={index} />
			</div>
			<div className='card-btns'>
				<button className='dis-btn' onClick={toggle}>
					edit
				</button>
				<button className='dis-btn dis-delete' onClick={handleDelete}>
					Delete
				</button>
			</div>

			<EditDischarge
				open={open}
				toggleModal={toggle}
				updateDischarge={updateDischarge}
				dischargeObj={dischargeObj}
			/>
		</div>
	);
};

export default Discharge;
