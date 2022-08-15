import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import './MultiCarousal.css';
import playicon from '../../assests/favicon.ico';
import { Link } from 'react-router-dom';
const MultiCarousal = ({ cat_id, banner }) => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	// if (banner === undefined) return <h1>Loading...</h1>;
	return (
		<React.Fragment>
			<div className='multi-bg'>
				{
					banner.map((value, i) => (
						<div className='category-content'>
							<div className='container-fluid'>
								<div className='row'>
									<div className='col-xl-6 col-lg-6 col-md-6'>
										<h4 className='cate-title'>{value.name}</h4>
									</div>
									<div className='col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block'>
										<div className='more-container'>
											<div className='gen-btn-container text-right'>
												<a
													href='/moviespagination'
													className='multi-button gen-button-flat'
												>
													<span className='text'>More Videos</span>
												</a>
											</div>
										</div>
									</div>
								</div>
								<Carousel responsive={responsive}>
									{value.post_data.map((post, index) => (
										<div className='multi-category '>
											<div className='img-container'>
												<img
													src={post.banner_image}
													alt=''
													className='images'
												/>
												<div className='play'>
													<Link to={`/singlemovie/${post.id}`}>
														<img src={playicon} alt='' />
													</Link>
												</div>
											</div>
											<div className='movie-icons'>
												<div className='heart-icon'>
													<i className='fa fa-heart-o'></i>
												</div>
												<div class='dropup'>
													<i className='fa fa-share-alt'></i>
													<div className='dropup-content'>
														<a href='/' className='facebook'>
															<i className='fa fa-facebook-f'></i>
														</a>{' '}
														<a href='/' className='facebook'>
															<i className='fa fa-instagram'></i>
														</a>
														<a href='/' className='facebook'>
															<i className='fa fa-twitter'></i>
														</a>
													</div>
												</div>
												<div className='plus-icon'>
													<i className='fa fa-plus'></i>
												</div>
											</div>
											<h4 className='heading-title'>{post.title}</h4>
											<div className='img-meta-title'>
												<ul>
													<li>{post.languages_name}</li>
													<li>
														<a href='action.html'>
															<span>{post.genres_name}</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									))}
								</Carousel>
							</div>
						</div>
					))[cat_id]
				}
			</div>
		</React.Fragment>
	);
};

export default MultiCarousal;
