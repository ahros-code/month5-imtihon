import { useContext } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChannelVideos from '../../components/ChannelVideos/ChannelVideos';
import VideoCard from '../../components/VideoCard/VideoCard';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import css from './Home.module.css';
import { ThemeContext } from '../../context/ThemeContext'

const Home = () => {
	const url =
		'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '557bbcd067mshe2f496486812208p1a20a9jsn06d8ec5b7b5f',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const url2 =
		'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
	const options2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '557bbcd067mshe2f496486812208p1a20a9jsn06d8ec5b7b5f',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const { data: data } = useFetch(url, options);
	const { data: datas } = useFetch(url2, options2);

	const { searchData } = useContext(SearchContext);

	const {theme} = useContext(ThemeContext)

	const myData = data
		.filter(video => {
			if (!searchData.trim()) {
				return video;
			} else if (
				video.snippet.title.toLowerCase().includes(searchData.toLowerCase())
			) {
				return video;
			}
		})
		.map((vid, index) => (
			<SwiperSlide key={index}>
				<VideoCard
					key={index}
					title={vid.snippet.title}
					img={vid.snippet.thumbnails.high.url}
					id={vid.id.videoId}
				/>
			</SwiperSlide>
		));

	return (
		<div>
			<div className={css.channelVideos}>
				<Swiper slidesPerView={5} spaceBetween={15}>
					{datas.map((vid, index) => (
						<SwiperSlide key={index}>
							<ChannelVideos
								key={index}
								title={vid.snippet.title}
								img={vid.snippet.thumbnails.high.url}
								id={vid.id.videoId}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={css.recommend}>
				<h2 className={theme == 'light' ? css.recom : css.lightRecom}>Recommended</h2>
				<Swiper slidesPerView={3} spaceBetween={20} className={css.slider}>
					{myData}
				</Swiper>
			</div>
		</div>
	);
};

export default Home;
