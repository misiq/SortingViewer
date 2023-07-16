import { Frames, Partition, QuickSort, Sort, Swap } from "../types/types";
let frames: Frames = [];

export const swap: Swap = (array, a, b) => {
	if (array[a] === undefined || array[b] === undefined) {
		throw new Error("Parameter is out of scope");
	}

	const tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;

	return array;
};

export const partition: Partition = (array, start, end) => {
	//Todo: change this to not overwrite the values

	let pivotIndex = start;
	const pivotValue = array[end];

	for (let i = start; i < end; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, pivotIndex);
			pivotIndex++;
		}
	}

	swap(array, pivotIndex, end);

	frames.push({ allElements: [...array], highlighted: [] });

	return pivotIndex;
};

export const sort: Sort = (array, start, end) => {
	if (end <= start) return;

	const index = partition(array, start, end);
	sort(array, start, index - 1);
	sort(array, index + 1, end);

	return array;
};

export const quickSort: QuickSort = (array) => {
	frames = [];
	frames.push({ allElements: [...array], highlighted: [] });
	sort(array, 0, array.length - 1);

	console.log(frames, "RAMKI");

	return frames;
};

export default quickSort;
