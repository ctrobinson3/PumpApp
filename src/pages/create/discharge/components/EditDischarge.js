import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

const EditDischarge = ({
	open,
	toggleModal,
	updateDischarge,
	dischargeObj,
}) => {
	const [dischargeName, setDischargeName] = useState('');
	const [description, setDescription] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name === 'dischargeName') {
			setDischargeName(value);
		} else {
			setDescription(value);
		}
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		let tempObj = {};
		tempObj['Name'] = dischargeName;
		tempObj['Description'] = description;
		updateDischarge(tempObj);
		toggleModal();
	};

	useEffect(() => {
		setDischargeName(dischargeObj.Name);
	}, []);

	return (
		<Modal isOpen={open}>
			<ModalHeader>Edit Discharge</ModalHeader>
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
				<Button onClick={handleUpdate}>Update</Button>
				<Button onClick={toggleModal}>Cancel</Button>
			</div>
		</Modal>
	);
};

export default EditDischarge;
