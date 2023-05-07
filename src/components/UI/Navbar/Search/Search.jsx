import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../../../../assets/images/search.svg';
import { SearchContext } from '../../../../context/SearchContext';
import css from './Search.module.css';

const Search = () => {
	const { searchData, setSearchData } = useContext(SearchContext);
	const navigatt = useNavigate();
	const submitHandler = e => {
		e.preventDefault();
		navigatt(`search/${searchData}`);
	};
	return (
		<>
			<div className={css.wrapper}>
				<div className={css.inputField}>
					<form onSubmit={submitHandler}>
						<input
							type='text'
							placeholder='Search'
							className={css.input}
							value={searchData}
							onChange={e => setSearchData(e.target.value)}
						/>
					</form>
				</div>
				<div className={css.icon}>
					<img src={search} alt='search-icon' />
				</div>
			</div>
		</>
	);
};

export default Search;
