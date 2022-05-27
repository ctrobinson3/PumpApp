import { useState } from 'react';

const FrictionLoss = () => {
	const [input, setInput] = useState({
		c: 0,
		q: 0,
		l: 0,
	});
	const [total, setTotal] = useState(0);

	const onMutate = (e) => {
		setInput({
			...input,
			[e.target.id]: e.target.value,
		});
	};

	const onEntry = () => {
		const c = input.c;
		const q = input.q;
		const l = input.l;
		setTotal(c * (l / 100) * (q / 100) ** 2);
	};

	return (
		<div className='page-container'>
			<header>
				<h1>Friction Loss</h1>
				<p>
					Use this page to calculate the friction loss of any length/diameter of
					hose at a target flow (GPM).
				</p>
			</header>
			<div className='equation-container'>
				<label>Coefficient: </label>
				<input id='c' onChange={onMutate}></input>
				<label>Flow (GPM): </label>
				<input id='q' onChange={onMutate}></input>
				<label>Length (Feet): </label>
				<input id='l' onChange={onMutate}></input>
			</div>
			<div className='solution-container'>
				<button type='button' onClick={onEntry}>
					Calculate
				</button>
				<label>{total} PSI</label>
			</div>
		</div>
	);
};

export default FrictionLoss;
