import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard2 from '../../components/VideoCard2/VideoCard2';
import css from './SearchedVideos.module.css';

const SearchedVideos = () => {
	const { search } = useParams();
	const [searchedData, setSearchedData] = useState([]);
	let SearchUrl = `https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet%2Cid&maxResults=50&order=date`;
	const SearchOptions = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9282378fe6mshf1ef0b35c55f161p1bc4dajsn47cebfd72cb4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const getSearchData = async () => {
		try {
			const response = await fetch(SearchUrl, SearchOptions);
			const result = await response.json();
			setSearchedData(result.items);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getSearchData();
	}, []);
	return (
		<div className={css.wrapper}>
			{searchedData.map((video, index) => (
				<VideoCard2
					key={index}
					title={video.snippet.title}
					img={video.snippet.thumbnails.high.url}
					id={video.id.videoId}
					desc={video.snippet.description}
				/>
			))}
		</div>
	);
};

export default SearchedVideos;
