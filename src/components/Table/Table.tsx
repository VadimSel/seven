// import ReadyLevelOne from "./LevelsComponent/ReadyLevelOne";

import { useState } from "react";
import Levels from "./LevelsComponent/Levels";
import styles from "./Table.module.scss";
import TableHeader from "./TableHeader";

const Table = () => {
	// const data = [
	// 	{
	// 		id: 1,
	// 		level: 1,
	// 		name: "Южная строительная площадка",
	// 		baseSalary: "20 348",
	// 		equipment: "1 750",
	// 		overhead: "108,07",
	// 		profit: "1 209 122,5",
	// 		children: [
	// 			{
	// 				id: 2,
	// 				level: 2,
	// 				name: "Фундаментальные работы",
	// 				baseSalary: "20 348",
	// 				equipment: "1 750",
	// 				overhead: "108,07",
	// 				profit: "1 209 122,5",
	// 				children: [
	// 					{
	// 						id: 3,
	// 						level: 3,
	// 						name: "Статья работы №1",
	// 						baseSalary: "20 348",
	// 						equipment: "1 750",
	// 						overhead: "108,07",
	// 						profit: "189 122,5",
	// 					},
	// 					{
	// 						id: 4,
	// 						level: 3,
	// 						name: "Статья работы №2",
	// 						baseSalary: "38 200",
	// 						equipment: "1 200",
	// 						overhead: "850",
	// 						profit: "1 020 000",
	// 					},
	// 				],
	// 			},
	// 		],
	// 	},
	// ];

	// const [rows, setRows] = useState(data)

	return (
		<div className={styles.container}>
			<TableHeader />
			{/* <ReadyLevelOne/> */}
			<Levels/>
		</div>
	);
};

export default Table;
