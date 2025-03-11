import styles from "./TableHeader.module.scss";

const data: string[] = [
	"Уровень",
	"Наименование работ",
	"Основная з/п",
	" Оборудование",
	"Накладные расходы",
	"Сметная прибыль",
];

const TableHeader = () => {
	return (
		<div className={styles.container}>
			{data.map((el, i) => {
				return (
					<p className={styles.element} key={i}>
						{el}
					</p>
				);
			})}
		</div>
	);
};
export default TableHeader;
