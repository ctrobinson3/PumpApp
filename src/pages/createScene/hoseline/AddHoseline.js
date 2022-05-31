import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const AddHoseline = ({ open, toggleModal, onMutate, onEntry }) => {
	return (
		<Modal isOpen={open}>
			<ModalHeader>Add Hose</ModalHeader>
			<ModalBody className='hose-form'>
				<form>
					<select
						placeholder='Diameter'
						id='diameter'
						className='hose-select'
						onChange={onMutate}
					>
						<option value='err'>...Diameter</option>
						<option value='1.75'>1 3/4"</option>
						<option value='2.5'>2 1/2"</option>
					</select>
					<input
						className='hose-input'
						id='len'
						placeholder='Length'
						onChange={onMutate}
					></input>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button onClick={onEntry}>Add</Button>
				<Button onClick={toggleModal}>Cancel</Button>
			</ModalFooter>
		</Modal>
	);
};

export default AddHoseline;
