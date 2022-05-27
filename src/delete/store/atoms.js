import { atom } from 'recoil';

export const dischargesList = atom({
	key: 'dischargeList',
	default: [],
});

export const hoseLineList = atom({
	key: 'hoseLineList',
	default: [],
});

export const nozzleList = atom({
	key: 'nozzleList',
	default: [],
});
