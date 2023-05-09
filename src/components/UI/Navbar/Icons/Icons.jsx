import css from './Icons.module.css';
import img from '../../../../assets/images/Icons.svg';
import lightImg from '../../../../assets/images/Light/Icons.svg';
import { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'

const Icons = () => {
	const {theme} = useContext(ThemeContext)
 return (
	<img src={theme == 'light' ? img : lightImg} alt="image" className={css.image}/>
 )
}

export default Icons