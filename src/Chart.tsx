import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { Frames } from "./utils/quickSort";

interface Props {
	data: Frames;
}

const Example = ({ data }: Props) => {
	console.log(data, "HELLO DATA");
	return (
		<>
			{data && (
				<ResponsiveContainer width="100%" height="100%">
					<BarChart width={150} height={40} data={data}>
						<Bar dataKey={(v) => v} fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			)}
		</>
	);
};

export default Example;
