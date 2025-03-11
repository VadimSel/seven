import { ReactNode } from "react";
import Header from "src/components/Header/Header";
import Sidebar from "src/components/Sidebar/Sidebar";

import styles from "./Layout.module.scss";
import SubHeader from "src/components/SubHeader/SubHeader";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.container}>
			<Header />
      <SubHeader/>
			<div className={styles.sidebar_and_content_wrapper}>
				<Sidebar />
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
