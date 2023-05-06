import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Next.module.css';

const Next = props => {
	const [nextData, setNextData] = useState([]);
	const NextUrl =
		'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
	const NextOption = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9282378fe6mshf1ef0b35c55f161p1bc4dajsn47cebfd72cb4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const getNextData = async () => {
		try {
			const response = await fetch(NextUrl, NextOption);
			const result = await response.json();
			setNextData(result.items);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getNextData();
	}, []);

	return (
		<div className={css.wrapper}>
			{nextData.map((next, index) => (
				<Link
					className={css.link}
					to={`/videos/${next.id.videoId}`}
					key={index}
				>
					<div className={css.nVid}>
						<img src={next.snippet.thumbnails.high.url} alt='video img' />
						<h3>{next.snippet.title}</h3>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Next;
