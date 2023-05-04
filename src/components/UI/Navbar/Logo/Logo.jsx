import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/Black.svg';
import css from './Logo.module.css';

const Logo = () => {
	return (
		<Link to={"/"}>
			<img src={logo} alt='logo' className={css.logo} />
		</Link>
	);
};

export default Logo;
