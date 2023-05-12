import { useContext, useState } from 'react'
import logo from '../../assets/images/Black.svg'
import logoLight from '../../assets/images/Light.svg'
import { AuthContext } from '../../context/AuthContext'
import { ThemeContext } from '../../context/ThemeContext'
import css from './Login.module.css'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { setToken } = useContext(AuthContext);
	const handleSubmit = e => {
		e.preventDefault();

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then(res => {
				if (res.status !== 200) {
					alert('User topilmadi');
				}
				return res.json();
			})
			.then(data => {
				console.log(data);
				if (data.token) {
					setToken(data.token);
					localStorage.setItem('token', data.token);
				}
			})
			.catch(err => {
				alert(err);
			});
	};

	const { theme } = useContext(ThemeContext);

	return (
		<div className={theme == 'light' ? css.wrap : css.lightWrap}>
		<div className={theme =='light' ? css.mainWrapper : css.lightMainWrapper}>
			<div className={css.wrapper}>
				<div className={css.container}>
					<img
						src={theme == 'light' ? logo : logoLight}
						alt='logo'
						className={css.logo}
					/>
					<form onSubmit={handleSubmit} className={css.form}>
						<input
							type='email'
							name='email'
							className={css.inp}
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='eve.holt@reqres.in'
						/>
						<input
							type='password'
							name='password'
							className={css.inp}
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='cityslicka'
						/>
						<button type='submit' className={css.button} style={{
							height: '60px',
							backgroundColor: '#ff0000',
							border: 'none',
							fontSize: '18px',
							color: '#fff',
							borderRadius: '76px'
						}}>
							Log In
						</button>
					</form>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Login;
