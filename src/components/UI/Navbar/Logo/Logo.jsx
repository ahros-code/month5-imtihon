import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/Black.svg';
import css from './Logo.module.css';
import logojon from '../../../../assets/images/Black.svg';
import logoLight from '../../../../assets/images/Light.svg';
import { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'

const Logo = () => {
	const {theme} = useContext(ThemeContext)
	return (
		<Link to={'/'}>
			<img
				src={theme == 'light' ? logojon : logoLight}
				alt='logo'
				className={css.logo}
			/>
		</Link>
	);
};

export default Logo;
