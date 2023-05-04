import pic from '../../../../assets/images/Userpic.png';
import search from '../../../../assets/images/search.svg';
import css from './Userpic.module.css';

const Userpic = () => {
	return (
		<>
			<div className={css.image}>
				<img src={search} alt='serach icon' className={css.icon} />
				<img src={pic} alt='userpic' />
			</div>
		</>
	);
};

export default Userpic;
