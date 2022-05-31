import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const AddNozzle = ({
	open,
	toggleModal,
	onMutate,
	onEntry,
	item,
	changeGpm,
}) => {
	const [nozzleType, setNozzleType] = useState('');
	const [nozzleState, setNozzleState] = useState({
		nozGpm: 0,
		nozPsi: 0,
	});
	const [smoothState, setSmoothState] = useState({
		diameter: 0,
		psiOrGpm: '',
		value: 0,
	});

	const onNozzle = (e) => {
		setNozzleType(e.target.value);
		onMutate(e);
	};
	const calcGpm = () => {
		let d = smoothState.diameter;
		let pg = smoothState.psiOrGpm;
		let v = smoothState.value;
		let total;
		if (pg === 'psi') {
			const g = 29.7 * d ** 2 * Math.sqrt(v);
			total = g.toFixed(2);
			item.nozGpm = total;
			item.nozPsi = v;
		} else if (pg === 'gpm') {
			const p = (v / 29.7 / d ** 2) ** 2;
			total = p.toFixed(2);
			item.nozGpm = v;
			item.nozPsi = total;
		}
	};
	const handleSmooth = (e) => {
		setSmoothState({
			...smoothState,
			[e.target.id]: e.target.value,
		});
	};

	const enterNozzle = () => {
		if (nozzleType === 'Fog') {
			onEntry();
		} else if (nozzleType === 'Smooth Bore') {
			calcGpm();
			onEntry();
		}
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
						<label>GPM: </label> <input id='nozGpm' onChange={onMutate}></input>
					</div>
					<div className='noz-div'>
						<label>PSI: </label> <input id='nozPsi' onChange={onMutate}></input>
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
							id='nozType'
							className='hose-select'
							onChange={onNozzle}
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
				<Button onClick={enterNozzle}>Add</Button>
				<Button onClick={toggleModal}>Cancel</Button>
			</ModalFooter>
		</Modal>
	);
};

export default AddNozzle;
