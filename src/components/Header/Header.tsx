import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.icons_wrapper}>
				<img src="/assets/icons/menu-icon.svg" alt="menu" />
				<img src="/assets/icons/back-icon.svg" alt="" />
			</div>
			<div className={styles.buttons_wrapper}>
				<span className={styles.view}>Просмотр</span>
				<span className={styles.control}>Управление</span>
			</div>
		</div>
	);
};

export default Header;
