import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import css from './Layout.module.css';

const Layout = () => {
	return (
		<>
			<div className={css.wrapper}>
				<div className={css.container}>
					<Navbar />
				</div>
				<div className={css.mainWrapper}>
					<div className={css.left}>
						<Sidebar />
					</div>
					<div className={css.outlet}>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
