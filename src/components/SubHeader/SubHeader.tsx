import styles from "./SubHeader.module.scss";

const SubHeader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.project_info}>
				<div className={styles.project_name}>
					<span>Название проекта</span>
					<span>Аббревиатура</span>
				</div>
				<img src="/assets/icons/check-icon.svg" alt="" />
			</div>
			<span className={styles.name}>Строительно-монтажные работы</span>
		</div>
	);
};

export default SubHeader;
