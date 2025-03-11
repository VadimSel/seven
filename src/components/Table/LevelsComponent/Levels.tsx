import { useEffect, useState } from "react";
import styles from "./Levels.module.scss";
import React from "react";

type dataTypes = {
	child: dataTypes[];
	equipmentCosts: number;
	estimatedProfit: number;
	id: number;
	machineOperatorSalary: number;
	mainCosts: number;
	materials: number;
	mimExploitation: number;
	overheads: number;
	rowName: string;
	salary: number;
	supportCosts: number;
	isChild?: boolean;
};

const Levels = ({ data }: { data?: dataTypes[]; isChild?: boolean }) => {
	const eID = 149804;
	const [rows, setRows] = useState<dataTypes[]>([]);

	const getData = async () => {
		// if (childData.length >= 1) {
		// 	console.log(childData)
		// 	setRows(childData)
		// } else {
		const res = await fetch(
			`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/list`,
			{
				method: "GET",
			}
		);
		const data = await res.json();
		console.log(data);
		setRows(data);
	};

	const createData = async (parentId: number) => {
		const res = await fetch(
			`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/create`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					equipmentCosts: 0,
					estimatedProfit: 0,
					machineOperatorSalary: 0,
					mainCosts: 0,
					materials: 0,
					mimExploitation: 0,
					overheads: 0,
					parentId: parentId,
					rowName: "rowTest",
					salary: 0,
					supportCosts: 0,
				}),
			}
		);
		const newRow = await res.json();
		console.log(data);
		setRows((prevRows) => addRowToState(prevRows, parentId, newRow));
	};

	const addRowToState = (
		data: dataTypes[],
		parentId: number,
		newRow: dataTypes
	): dataTypes[] => {
		return data.map((item) => {
			if (item.id === parentId) {
				return { ...item, child: [...(item.child || []), newRow] };
			}
			if (item.child) {
				return { ...item, child: addRowToState(item.child, parentId, newRow) };
			}
			return item;
		});
	};

	const removeRowFromState = (data: dataTypes[], rID: number) => {
		return data.filter((item) => {
			if (item.id === rID) return false;
			if (item.child) {
				item.child = removeRowFromState(item.child, rID);
			}
			return true;
		});
	};

	const deleteRow = (rID: number) => {
		fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/${eID}/row/${rID}/delete`, {
			method: "DELETE",
		}).then(() => {
			setRows((prevRows) => removeRowFromState(prevRows, rID));
		});
	};

	useEffect(() => {
		if (data && data.length > 0) {
			setRows(data);
		} else {
			getData();
		}
	}, [data]);

	// const addRow = (parentId: number, data = rows) =>
	// 	data.map((item) => {
	// 		if (item.id === parentId) {
	// 			if (item.level >= 3) return item;
	// 			const newChild = {
	// 				id: Date.now(),
	// 				level: item.level + 1,
	// 				name: "Новая строка",
	// 				baseSalary: "0",
	// 				equipment: "0",
	// 				overhead: "0",
	// 				profit: "0",
	// 				children: [],
	// 			};
	// 			setRows([...data, newChild]);
	// 			// return { ...item, children: [...(item.children || []), newChild] };
	// 		}
	// 		// if (item.children) return { ...item, children: addRow(parentId, item.children) };
	// 		// return item;
	// 	});

	// const onAddClick = (parentId: any) => setRows(addRow(parentId));

	return (
		<>
			{rows.map((el) => (
				<React.Fragment key={el.id}>
					<div style={{ border: "1px solid green" }} className={styles.container}>
						<div className={styles.icons_wrapper}>
							<div className={`${styles.icons} ${styles[`icons_level${el.level}`]}`}>
								<img
									className={styles.document_icon}
									src="/assets/icons/document-icon.svg"
									alt="create"
									onClick={() => createData(el.id)}
								/>
								<img
									className={styles.trash_icon}
									src="/assets/icons/trash-icon.svg"
									alt="delete"
									onClick={() => deleteRow(el.id)}
								/>
							</div>
						</div>
						<p>{el.rowName}</p>
						<p>{el.salary}</p>
						<p>{el.equipmentCosts}</p>
						<p>{el.overheads}</p>
						<p>{el.estimatedProfit}</p>
					</div>

					{el.child && el.child.length >= 1 && (
						<div className={styles.children} key={`child-${el.id}`}>
							<Levels data={el.child} isChild={true} />
						</div>
					)}
				</React.Fragment>
			))}
		</>
	);
};

export default Levels;
