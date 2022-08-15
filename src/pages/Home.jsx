import React, { useState, useEffect } from 'react';
import Homepage from '../components/HomePageSlider/Homepage';
import MultiCarousal from '../components/MultiCarousal/MultiCarousal';
import ScrollToTop from '../components/ScrollToTop';
import ThirdSlider from '../components/ThirdSlider/ThirdSlider';
import axios from 'axios';
import '../pages/common-css-slider.css';
import { getBanner } from '../Api/api';

const Home = () => {
	const [banner, setBanner] = useState([]);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const banner = await axios.get(
	// 				'https://wordpress.crescentek.co.uk/anand/streamlab/api/home'
	// 			);
	// 			setBanner(banner.data.result);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	})();
	// }, []);
	useEffect(() => {
		(async () => {
			try {
				const banner = await getBanner();
				setBanner(banner);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<div>
			<ScrollToTop />
			<Homepage movie_id={0} banner={banner} />
			<div className='common-css-slider'>
				<MultiCarousal cat_id={0} banner={banner} />
			</div>

			<MultiCarousal cat_id={1} banner={banner} />
			{/* <MultiCarousal cat_id={0} /> */}
			<ThirdSlider />

			<div className='common-css-bottom'>
				<MultiCarousal cat_id={0} banner={banner} />
			</div>
		</div>
	);
};
export default Home;
