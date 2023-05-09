import { useContext, useState } from 'react';
import css from './Login.module.css';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/images/Black.svg'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const {setToken} = useContext(AuthContext)
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
					localStorage.setItem('token', data.token)
				}
			})
			.catch(err => {
				alert(err);
			});
	};

	return (
		<div className={css.wrapper}>
			<img src={logo} alt="logo" className={css.logo} />
			<form onSubmit={handleSubmit} className={css.form}>
				<input
					type='email'
					name='email'
					className={css.inp}
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='eve.holt@reqres.in/api/login'
				/>
				<input
					type='password'
					name='password'
					className={css.inp}
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='cityslicka'
				/>
				<button type='submit' className={css.btn}>Log In</button>
			</form>
		</div>
	);
};

export default Login;
