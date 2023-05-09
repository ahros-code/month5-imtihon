import { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import css from './Button.module.css'

const Button = () => {
	const {setToken} = useContext(AuthContext)
	const navi = useNavigate()
	const logoutHandler = () => {
		setToken("");
		localStorage.removeItem('token')
		navi("/")
	}
 return (
	<button onClick={logoutHandler} className={css.btn}>Logout</button>
 )
}

export default Button