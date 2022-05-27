import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';

const CreateDischarge = ({ open, toggleModal, save }) => {
	//state
	const [dischargeName, setDischargeName] = useState('');

	//actions
	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === 'dischargeName') {
			setDischargeName(value);
		}
	};

	const handleSave = () => {
		let dischargeObj = {};
		dischargeObj['Name'] = dischargeName;
		save(dischargeObj);
		toggleModal();
	};

	return (
		<Modal isOpen={open}>
			<ModalHeader>Add Discharge</ModalHeader>
			<ModalBody>
				<form>
					<div className='form-group'>
						<label>Discharge Name</label>
						<input
							type='text'
							className='form-control'
							value={dischargeName}
							onChange={handleChange}
							name='dischargeName'
						/>
					</div>
				</form>
			</ModalBody>
			<div className='modal-btn'>
				<Button className='m-btn' onClick={handleSave}>
					Create
				</Button>
				<Button className='m-btn' onClick={toggleModal}>
					Cancel
				</Button>
			</div>
		</Modal>
	);
};

export default CreateDischarge;
