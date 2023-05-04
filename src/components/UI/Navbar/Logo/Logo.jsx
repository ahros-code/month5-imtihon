import logo from '../../../../assets/images/Black.svg';
import css from './Logo.module.css'

const Logo = () => {
 return (
	<img src={logo} alt="logo" className={css.logo} />
 )
}

export default Logo