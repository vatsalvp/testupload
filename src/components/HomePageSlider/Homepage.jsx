import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import rating from '../../assests/rating.png';
import './HomePage.css';
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';
import axios from 'axios';

const Homepage = ({ movie_id, banner }) => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div>
			{
				banner.map((value, i) => (
					<div className='homepage'>
						<div key={value.id}>{/* {value.name} */}</div>
						<Carousel
							responsive={responsive}
							infinite={true}
							autoPlaySpeed={6000}
						>
							{value.post_data.map((post, index) => (
								<div
									className='banner_img'
									style={{ backgroundImage: `url(${post.banner_image})` }}
								>
									<div className='home_sec'>
										<div className='container-fluid'>
											<div
												className='row align-items-center'
												style={{ minHeight: 600 }}
											>
												<div className='col-xxl-6  col-xl-6 col-lg-12 col-sm-12  order-xxl-1 order-xl-1 order-2 order-lg-2'>
													<Fade top>
														<div className='left-content'>
															<h3 className='title'>{post.title}</h3>
															<div className='after-title'>
																<ul className='rating-content'>
																	<li className='twelve'>
																		<span>U/A</span>
																	</li>
																	<li>
																		<img src={rating} alt='ratingimage' />
																		<span>7.6 </span>
																	</li>
																</ul>
																<p>
																	Streamlab is a long established fact that a
																	reader will be distracted by the readable
																	content of a page The point of using Lorem
																	Streamlab.
																</p>
																<div className='info'>
																	<ul className='list'>
																		<li>
																			<strong>Category :</strong>{' '}
																			{post.category_name}
																		</li>
																		<li>
																			<strong>Release Date :</strong>{' '}
																			{post.release_date}
																		</li>
																		<li>
																			<strong>Genre :</strong>{' '}
																			<span>
																				<a href='action.html'>
																					{post.genres_name}{' '}
																				</a>
																			</span>
																		</li>
																		<li>
																			<strong>Tag :</strong>{' '}
																			<span>
																				<a href='/'>4K Ultra, </a>
																			</span>
																			<span>
																				<a href='/'>Brother, </a>
																			</span>
																			<span>
																				<a href='/'>Dubbing, </a>
																			</span>
																			<span>
																				<a href='/'>Premieres</a>
																			</span>
																		</li>
																	</ul>
																</div>
															</div>
															<div className='movie-action'>
																<div className='btn-container'>
																	<Link
																		to={`/singlemovie/${post.id}`}
																		className='button button-dark'
																	>
																		<i
																			aria-hidden='true'
																			className='fa fa-play'
																		></i>{' '}
																		<span className='text'>Play Now</span>
																	</Link>
																</div>
															</div>
														</div>
													</Fade>
												</div>
												<div className='col-xxl-6  col-xl-6 col-lg-12 col-sm-12  order-xxl-2 order-xl-2 order-1 order-lg-1'>
													<React.Fragment>
														<div className='right-image'>
															<img src={post.banner_image} alt='' />
															<div>
																<Popup
																	modal
																	trigger={
																		<a className='playBut' href>
																			<svg
																				xmlns='http://www.w3.org/2000/svg'
																				link='http://www.w3.org/1999/xlink'
																				a='http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/'
																				x='0px'
																				y='0px'
																				width='213.7px'
																				height='213.7px'
																				viewBox='0 0 213.7 213.7'
																				enable-background='new 0 0 213.7 213.7'
																				space='preserve'
																			>
																				<polygon
																					class='triangle'
																					id='XMLID_18_'
																					fill='none'
																					stroke-width='7'
																					stroke-linecap='round'
																					stroke-linejoin='round'
																					stroke-miterlimit='10'
																					points='73.5,62.5 148.5,105.8 73.5,149.1 '
																				/>
																				<circle
																					class='circle'
																					id='XMLID_17_'
																					fill='none'
																					stroke-width='7'
																					stroke-linecap='round'
																					stroke-linejoin='round'
																					stroke-miterlimit='10'
																					cx='106.8'
																					cy='106.8'
																					r='103.3'
																				/>
																			</svg>
																			<span>Watch Later</span>
																		</a>
																	}
																	closeOnDocumentClick={true}
																>
																	<ReactPlayer
																		url={`https://www.youtube.com/watch/${post.video_link}`}
																	/>
																</Popup>
															</div>
														</div>
													</React.Fragment>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Carousel>
					</div>
				))[movie_id]
			}
		</div>
	);
};

export default Homepage;
