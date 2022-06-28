import React, { Fragment } from "react";

const AppFooter = () => {
	return (
		<Fragment>
			<footer className="section bg-footer">
				<div className="container">
					<div className="row g-sm-4">
						<div className="col-lg-3 col-md-4 col-6">
							<h6 className="text-uppercase fw-semibold">About</h6>
							<ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Submit on issue</a>
								</li>
								<li>
									<a href="#">GitHub Repo</a>
								</li>
								<li>
									<a href="#">Slack</a>
								</li>
							</ul>
						</div>
						{/* End col */}
						<div className="col-lg-3 col-md-4 col-6">
							<h6 className="text-uppercase fw-semibold">Gatting Started</h6>
							<ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
								<li>
									<a href="#">introduction</a>
								</li>
								<li>
									<a href="#">Usage</a>
								</li>
								<li>
									<a href="#">Globls</a>
								</li>
								<li>
									<a href="#">Elements</a>
								</li>
								<li>
									<a href="#">Collection</a>
								</li>
							</ul>
						</div>
						{/* End col */}
						<div className="col-lg-3 col-md-4 col-6 d-none d-sm-block">
							<h6 className="text-uppercase fw-semibold">Resources</h6>
							<ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
								<li>
									<a href="#">Monitoring Grader </a>
								</li>
								<li>
									<a href="#">Video Tutorial</a>
								</li>
								<li>
									<a href="#">Term &amp; Service</a>
								</li>
								<li>
									<a href="#">Tulsy API</a>
								</li>
								<li>
									<a href="#">Marketplace</a>
								</li>
							</ul>
						</div>
						{/* End col */}
						<div className="col-lg-3 col-10">
							<h6 className="text-uppercase fw-semibold">
								Social medial
								<span className="text-primary text-uppercase fs-18">Tydek</span>
							</h6>
							<p className="mt-md-3 pt-3 pt-md-2 fs-14">
								Semper nibh a dignissim Integer cursus tempsed.
							</p>
							<div className="footer-subcribe text-end shadow-sm d-inline-block">
								<form action="#">
									<input placeholder="Your Email Address" type="email" />
									<button type="submit" className="btn btn-primary">
										<i className="mdi mdi-bell-ring" />
									</button>
								</form>
							</div>
							<div className="mt-md-4 mt-3">
								<ul className="list-unstyled mb-0 mt-3 social-icon">
									<li className="list-inline-item">
										<div data-aos="fade-up" data-aos-duration={800}>
											<div className="icon-text">
												<div className="icon facebook">
													<span>
														<i className="mdi mdi-facebook" />
													</span>
												</div>
											</div>
										</div>
									</li>
									<li className="list-inline-item">
										<div data-aos="fade-up" data-aos-duration={1200}>
											<div className="icon-text">
												<div className="icon twitter">
													<span>
														<i className="mdi mdi-twitter" />
													</span>
												</div>
											</div>
										</div>
									</li>
									<li className="list-inline-item">
										<div data-aos="fade-up" data-aos-duration={1600}>
											<div className="icon-text">
												<div className="icon instagram">
													<span>
														<i className="mdi mdi-instagram" />
													</span>
												</div>
											</div>
										</div>
									</li>
									<li className="list-inline-item">
										<div data-aos="fade-up" data-aos-duration={2000}>
											<div className="icon-text">
												<div className="icon github">
													<span>
														<i className="mdi mdi-github" />
													</span>
												</div>
											</div>
										</div>
									</li>
									<li className="list-inline-item">
										<div data-aos="fade-up" data-aos-duration={2400}>
											<div className="icon-text">
												<div className="icon youtube">
													<span>
														<i className="mdi mdi-youtube" />
													</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* End row */}
				</div>
				{/* End container */}
			</footer>
			{/*  */}
			<div className="footer-alt pt-4 pb-4">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center">
								<p className="mb-0 fs-15 text-white">
									© Tydek Design by
									<i className="mdi mdi-heart text-danger" /> Themesdesign
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AppFooter;
