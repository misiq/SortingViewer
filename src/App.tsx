import { useEffect, useRef, useState } from "react";
import Example from "./Chart";
import quickSort, { Frames } from "./utils/quickSort";
import useInterval from "./hooks/useInterval";
const data = [3, 2, 1, -5, 2, 11, 23, 1, 30, -2];

function App() {
	const [counter, setCounter] = useState(0);
	const [runIt, setRunIt] = useState(true);

	const [values, setValues] = useState<Frames>(data);

	useInterval(
		(count, setCount) => {
			if (count >= values.length) {
				console.log(values.length);
				setCounter("finish");
				//reset the counter
				setCount(1);
			} else {
				setCounter(count);
			}
		},
		runIt ? 1000 : null,
		values.length - 1,
	);

	useEffect(() => {
		const frames = quickSort(data);

		setValues(frames);
	}, []);

	// console.log(values[counter]);

	return (
		<div style={{ height: "100vh" }}>
			<Example data={values[counter]?.allElements} />
		</div>
	);
}

export default App;
