/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const TestimoniSection = () => {
	return (
		<section className="section testimonials" id="testimonials">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-12">
						<div className="text-center mb-5">
							<h3 className="heading">
								<span className="text-primary">Testimonials</span>
							</h3>
							<p>
								Nam egestas mi sit amet orci dignissim tempor Integer tincidunt
								nunc mauris in egestas nibh.
							</p>
						</div>
					</div>
				</div>
				{/*end row*/}
				<div className="row">
					<div className="col-lg-12">
						<div className="swiper mySwiper1 my-5">
							<div className="swiper-wrapper">
								<div className="swiper-slide client-box card">
									<div className="client-content card-body p-0">
										<div className="quote-img">
											<img
												src="images/quote.png"
												alt="quote"
												className="img-fluid"
											/>
										</div>
										<p className="text-dark mb-0 fs-5 lh-base">
											Praesent tincidunt suscipit lacus vel dictum. Praesent
											nisl viverra sit amet sem sed porta. Quisque ac purus
											ipsum. Sed facilisis sed egestas dolor.
										</p>
									</div>
									{/*end client-content*/}
									<div className="d-flex align-items-center mt-4 pt-3">
										<img
											src="images/img-1.jpg"
											alt=""
											height={55}
											width={55}
											className="rounded-circle"
										/>
										<div className="ms-2">
											<h5 className="mb-0">Bradley Glover</h5>
											<p className="text-muted mb-0">Creative Designer</p>
										</div>
									</div>
								</div>
								{/*end client-box*/}
								<div className="swiper-slide client-box card">
									<div className="client-content card-body p-0">
										<div className="quote-img">
											<img
												src="images/quote.png"
												alt="quote"
												className="img-fluid"
											/>
										</div>
										<p className="text-dark mb-0 fs-5 lh-base">
											Praesent tincidunt suscipit lacus vel dictum. Praesent
											nisl viverra sit amet sem sed porta. Quisque ac purus
											ipsum. Sed facilisis sed egestas dolor.
										</p>
									</div>
									{/*end client-content*/}
									<div className="d-flex align-items-center mt-4 pt-3">
										<img
											src="images/img-2.jpg"
											alt=""
											height={55}
											width={55}
											className="rounded-circle"
										/>
										<div className="ms-2">
											<h5 className="mb-0">Elizabeth Hobbs</h5>
											<p className="text-muted mb-0">Web Designer</p>
										</div>
									</div>
								</div>
								{/*end client-box*/}
								<div className="swiper-slide client-box card">
									<div className="client-content card-body p-0">
										<div className="quote-img">
											<img
												src="images/quote.png"
												alt="quote"
												className="img-fluid"
											/>
										</div>
										<p className="text-dark mb-0 fs-5 lh-base">
											Praesent tincidunt suscipit lacus vel dictum. Praesent
											nisl viverra sit amet sem sed porta. Quisque ac purus
											ipsum. Sed facilisis sed egestas dolor.
										</p>
									</div>
									{/*end client-content*/}
									<div className="d-flex align-items-center mt-4 pt-3">
										<img
											src="images/img-3.jpg"
											alt=""
											height={55}
											width={55}
											className="rounded-circle"
										/>
										<div className="ms-2">
											<h5 className="mb-0">Robert O'Neill</h5>
											<p className="text-muted mb-0">CEO &amp; Founder</p>
										</div>
									</div>
								</div>
								{/*end client-box*/}
								<div className="swiper-slide client-box card">
									<div className="client-content card-body p-0">
										<div className="quote-img">
											<img
												src="images/quote.png"
												alt="quote"
												className="img-fluid"
											/>
										</div>
										<p className="text-dark mb-0 fs-5 lh-base">
											Praesent tincidunt suscipit lacus vel dictum. Praesent
											nisl viverra sit amet sem sed porta. Quisque ac purus
											ipsum. Sed facilisis sed egestas dolor.
										</p>
									</div>
									{/*end client-content*/}
									<div className="d-flex align-items-center mt-4 pt-3">
										<img
											src="images/img-4.jpg"
											alt=""
											height={55}
											width={55}
											className="rounded-circle"
										/>
										<div className="ms-2">
											<h5 className="mb-0">Connor Storey</h5>
											<p className="text-muted mb-0">
												Art &amp; Creative Designer
											</p>
										</div>
									</div>
								</div>
								{/*end client-box*/}
							</div>
						</div>
						{/*end widget-slider*/}
					</div>
					{/*end col*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
};

export default TestimoniSection;
