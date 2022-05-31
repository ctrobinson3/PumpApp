import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';

const CreateDischarge = ({ open, toggleModal, onMutate, onEntry }) => {
	//state

	//actions

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
							id='dischargeName'
							onChange={onMutate}
						/>
					</div>
				</form>
			</ModalBody>
			<div className='modal-btn'>
				<Button className='m-btn' onClick={onEntry}>
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
