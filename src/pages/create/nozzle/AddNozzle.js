import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const AddNozzle = ({ open, toggleModal, save }) => {
	const [nozzleType, setNozzleType] = useState('');
	const [nozzleState, setNozzleState] = useState({
		nozGpm: 0,
		nozPsi: 0,
	});

	//on change events
	const onMutate = (e) => {
		setNozzleType(e.target.value);
	};

	//smooth bore states and calcs
	const [smoothState, setSmoothState] = useState({
		diameter: 0,
		psiOrGpm: '',
		value: 0,
	});
	const calcGpm = () => {
		let d = smoothState.diameter;
		let pg = smoothState.psiOrGpm;
		let v = smoothState.value;
		let total;
		if (pg === 'psi') {
			const g = 29.7 * d ** 2 * Math.sqrt(v);
			total = g.toFixed(2);
			nozzleState.nozGpm = total;
			nozzleState.nozPsi = v;
		} else if (pg === 'gpm') {
			const p = (v / 29.7 / d ** 2) ** 2;
			total = p.toFixed(2);
			nozzleState.nozGpm = v;
			nozzleState.nozPsi = total;
		}
	};
	const handleSmooth = (e) => {
		setSmoothState({
			...smoothState,
			[e.target.id]: e.target.value,
		});
	};

	const handleFog = (e) => {
		setNozzleState({
			...nozzleState,
			[e.target.id]: e.target.value,
		});
	};

	//save
	const handleSave = () => {
		if (nozzleType === 'Smooth Bore') {
			calcGpm();
		}
		let nozzleObj = {};
		nozzleObj['GPM'] = nozzleState.nozGpm;
		nozzleObj['PSI'] = nozzleState.nozPsi;
		save(nozzleObj);
		toggleModal();
	};

	const nozzleOptions = (n) => {
		if (n === 'Smooth Bore')
			return (
				<div className='smooth-options'>
					<div className='noz-div'>
						<label>Diameter: </label>{' '}
						<select id='diameter' onChange={handleSmooth}>
							<option>...select</option>
							<option value='0.9375'>15/16"</option>
							<option value='1.1875'>1 3/16"</option>
						</select>
					</div>
					<div className='noz-div'>
						<input
							id='value'
							className='nozz-input'
							onChange={handleSmooth}
						></input>{' '}
						<select id='psiOrGpm' onChange={handleSmooth}>
							<option>...select</option>
							<option value='gpm'>GPM</option>
							<option value='psi'>PSI</option>
						</select>
					</div>
				</div>
			);
		else if (n === 'Fog')
			return (
				<div className='fog-options'>
					<div className='noz-div'>
						<label>GPM: </label>{' '}
						<input id='nozGpm' onChange={handleFog}></input>
					</div>
					<div className='noz-div'>
						<label>PSI: </label>{' '}
						<input id='nozPsi' onChange={handleFog}></input>
					</div>
				</div>
			);
	};

	return (
		<Modal isOpen={open}>
			<ModalHeader>Add Nozzle</ModalHeader>
			<ModalBody className='noz-form'>
				<form>
					<header className='noz-form-header'>
						<select
							placeholder='Diameter'
							id='diameter'
							className='hose-select'
							onChange={onMutate}
						>
							<option value='err'>...Nozzle Type</option>
							<option value='Smooth Bore'>Smooth Bore</option>
							<option value='Fog'>Fog</option>
						</select>
					</header>
					{nozzleOptions(nozzleType)}
				</form>
			</ModalBody>
			<ModalFooter>
				<Button onClick={handleSave}>Add</Button>
				<Button onClick={toggleModal}>Cancel</Button>
			</ModalFooter>
		</Modal>
	);
};

export default AddNozzle;
