import styles from "./Sidebar.module.scss";

const data: string[] = [
	"По проекту",
	"Объекты",
	"РД",
	"МТО",
	"СМР",
	"График",
	"МиМ",
	"Рабочие",
	"Капвложения",
	"Бюджет",
	"Финансирование",
	"Панорамы",
	"Камеры",
	"Поручения",
	"Контрагенты",
];

const Sidebar = () => {
	return (
		<div className={styles.container}>
			<ul>
				{data.map((el, i) => {
					return (
						<div className={styles.element_wrapper}>
							<img src="/assets/icons/project-icon.svg" alt="" />
							<li className={styles.element}>{el}</li>
						</div>
					)
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
