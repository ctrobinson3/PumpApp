import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const AddHoseline = ({ open, toggleModal, save }) => {
	const [hoseState, setHoseState] = useState({
		diameter: 0,
		length: 0,
	});

	const onMutate = (e) => {
		setHoseState({
			...hoseState,
			[e.target.id]: e.target.value,
		});
	};

	const handleSave = () => {
		let hoseObj = {};
		hoseObj['Diameter'] = hoseState.diameter;
		hoseObj['Length'] = hoseState.length;
		save(hoseObj);
		toggleModal();
	};

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
						id='length'
						placeholder='Length'
						onChange={onMutate}
					></input>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button onClick={handleSave}>Add</Button>
				<Button onClick={toggleModal}>Cancel</Button>
			</ModalFooter>
		</Modal>
	);
};

export default AddHoseline;
