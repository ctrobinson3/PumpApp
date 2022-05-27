import { useState } from 'react';

const SmoothBoreGPM = () => {
	const [input, setInput] = useState({
		np: 0,
		d: '',
	});
	const [total, setTotal] = useState(0);

	const onMutate = (e) => {
		setInput({
			...input,
			[e.target.id]: e.target.value,
		});
	};
	const onEntry = () => {
		const np = input.np;
		const d = parseFloat(input.d);

		const total = 29.7 * d ** 2 * Math.sqrt(np);
		setTotal(total.toFixed(2));
	};

	return (
		<div className='page-container'>
			<header>
				<h1>Smooth Bore GPM</h1>
				<p>Use this page to calculate the GPM of a smooth bore nozzle.</p>
			</header>
			<div className='equation-container'>
				<label>Smooth Bore Diameter: </label>
				<select id='d' onChange={onMutate}>
					<option value='0'></option>
					<option value='.9375'>15/16"</option>
					<option value='1.1875'>1 3/16"</option>
					<option value='1.5'>1 1/2"</option>
				</select>
				<label>Nozzle Pressure (PSI): </label>
				<input id='np' onChange={onMutate}></input>
			</div>
			<div className='solution-container'>
				<button type='button' onClick={onEntry}>
					Calculate
				</button>
				<label>{total} GPM</label>
			</div>
		</div>
	);
};

export default SmoothBoreGPM;
