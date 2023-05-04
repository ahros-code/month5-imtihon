import search from '../../../../assets/images/search.svg';
import css from './Search.module.css';

const Search = () => {
	return (
		<>
			<div className={css.wrapper}>
				<div className={css.inputField}>
					<input type='text' placeholder='Search' className={css.input} />
				</div>
				<div className={css.icon}>
					<img src={search} alt='search-icon' />
				</div>
			</div>
		</>
	);
};

export default Search;
