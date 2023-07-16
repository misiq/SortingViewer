export type Frames = Array<{ allElements: number[]; highlighted: number[] }>;
export type QuickSort = (array: Array<number>) => Frames;
export type Partition = (array: Array<number>, start: number, end: number) => number;
export type Sort = (array: Array<number>, start: number, end: number) => void;
export type Swap = (array: Array<number>, a: number, b: number) => void;
