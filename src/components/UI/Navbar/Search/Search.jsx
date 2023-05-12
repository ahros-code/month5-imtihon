import { useContext } from 'react';
import search from '../../../../assets/images/search.svg';
import lightSearch from '../../../../assets/images/Light/Shape.svg'
import { SearchContext } from '../../../../context/SearchContext';
import css from './Search.module.css';
import { ThemeContext } from '../../../../context/ThemeContext'

const Search = () => {
	const { searchData, setSearchData } = useContext(SearchContext);
	const submitHandler = e => {
		e.preventDefault();
	};

	const {theme} = useContext(ThemeContext)
	return (
		<>
			<div className={css.wrapper}>
				<div className={css.inputField}>
					<form onSubmit={submitHandler}>
						<input
							type='text'
							placeholder='Search'
							className={theme == "light" ? css.input : css.lightInput}
							value={searchData}
							onChange={e => setSearchData(e.target.value)}
						/>
					</form>
				</div>
				<div className={css.icon}>
					<img src={theme == "light" ? search : lightSearch} alt='search-icon' />
				</div>
			</div>
		</>
	);
};

export default Search;
