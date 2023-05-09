import { useContext } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChannelVideos from '../../components/ChannelVideos/ChannelVideos';
import VideoCard from '../../components/VideoCard/VideoCard';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import css from './Home.module.css';

const Home = () => {
	const url =
		'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9282378fe6mshf1ef0b35c55f161p1bc4dajsn47cebfd72cb4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const url2 =
		'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
	const options2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9282378fe6mshf1ef0b35c55f161p1bc4dajsn47cebfd72cb4',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const { data: data } = useFetch(url, options);
	const { data: datas } = useFetch(url2, options2);

	const { searchData } = useContext(SearchContext);

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
		<>
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
				<h2 className={css.recom}>Recommended</h2>
				<Swiper slidesPerView={3} spaceBetween={20} className={css.slider}>
					{myData}
				</Swiper>
			</div>
		</>
	);
};

export default Home;
