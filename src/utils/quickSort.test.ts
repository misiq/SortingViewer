import { assert, expect, test } from "vitest";

import { swap, partition, sort, quickSort } from "./quickSort";

test("Swap should modify array", () => {
	const data = [3, 2, 1];

	expect(swap(data, 0, 2)).toEqual([1, 2, 3]);
	expect(() => swap(data, 0, 3)).toThrowError("Parameter is out of scope");
});

test("Partition should return pivot index", () => {
	const data = [3, 2, 1];

	expect(partition(data, 0, data.length - 1)).toBe(0);
});

test("Should return sorted array", () => {
	const data = [3, 2, 1];

	expect(sort(data, 0, data.length - 1)).toEqual([1, 2, 3]);
});

test("QuickSort should return all frames", () => {
	const data = [3, 2, 5, 1, -10];

	expect(quickSort(data)).toEqual([1, 2, 3]);
});
