/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutSection = () => {
	return (
		<section className="section about" id="about">
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-lg-12">
						<div className="text-center mb-5">
							<h3 className="heading">
								<span className="text-primary">About</span> Us
							</h3>
							<p>
								Nam egestas mi sit amet orci dignissim tempor Integer tincidunt
								nunc mauris in egestas nibh.
							</p>
						</div>
					</div>
					<div className="col-lg-8">
						<ul
							className="nav nav-tabs nav-tabs-custom nav-justified justify-content-center faq-tab-box"
							id="pills-tab"
							role="tablist"
						>
							<li className="nav-item" role="presentation">
								<a
									href="#pills-genarel"
									className="nav-link"
									id="pills-genarel-tab"
									data-bs-toggle="pill"
									role="tab"
									aria-controls="pills-genarel"
									aria-selected="true"
								>
									<h5 className="mb-0">History</h5>
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a
									href="#pills-privacy_policy"
									className="nav-link active"
									id="pills-privacy_policy-tab"
									data-bs-toggle="pill"
									role="tab"
									aria-controls="pills-privacy_policy"
									aria-selected="false"
								>
									<h5 className="mb-0">Vision</h5>
								</a>
							</li>
							<li className="nav-item" role="presentation">
								<a
									href="#pills-pricing_plan"
									className="nav-link"
									id="pills-teachers-tab"
									data-bs-toggle="pill"
									role="tab"
									aria-controls="pills-pricing_plan"
									aria-selected="false"
								>
									<h5 className="mb-0">Mission</h5>
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-12">
						<div className="tab-content" id="pills-tabContent">
							<div
								className="tab-pane fade"
								id="pills-genarel"
								role="tabpanel"
								aria-labelledby="pills-genarel-tab"
							>
								<div className="row justify-content-between align-items-center">
									<div className="col-lg-5">
										<div className="about-img">
											<img
												src="/images/about/img-1.png"
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<h4 className="about-heading">History</h4>
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum
											sociis natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec quam felis, ultricies nec,
											pellentesque eu, pretium quis, sem. Nulla consequat massa
											quis enim. Donec pede justo, fringilla vel, aliquet nec,
											vulputate eget, arcu.
										</p>
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum
											sociis natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus.
										</p>
										<div>
											<a className="text-primary" href="#">
												Learn More.
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="tab-pane fade active show"
								id="pills-privacy_policy"
								role="tabpanel"
								aria-labelledby="pills-privacy_policy-tab"
							>
								<div className="row justify-content-between align-items-center">
									<div className="col-lg-5">
										<div className="about-img">
											<img
												src="/images/about/img-2.png"
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<h4 className="about-heading">Vision</h4>
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum
											sociis natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec quam felis, ultricies nec,
											pellentesque eu, pretium quis, sem. Nulla consequat massa
											quis enim. Donec pede justo, fringilla vel, aliquet nec,
											vulputate eget, arcu.
										</p>
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum
											sociis natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus.
										</p>
										<div>
											<a className="text-primary" href="#">
												Learn More.
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="tab-pane fade"
								id="pills-pricing_plan"
								role="tabpanel"
								aria-labelledby="pills-tab"
							>
								<div className="row justify-content-between align-items-center">
									<div className="col-lg-5">
										<div className="about-img">
											<img
												src="/images/about/img-3.png"
												className="img-fluid"
												alt=""
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<h4 className="about-heading">Mission</h4>
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum
											sociis natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec quam felis, ultricies nec,
											pellentesque eu, pretium quis, sem. Nulla consequat massa
											quis enim. Donec pede justo, fringilla vel, aliquet nec,
											vulputate eget, arcu.
										</p>
										<p className="text-muted">
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum
											sociis natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus.
										</p>
										<div>
											<a className="text-primary" href="#">
												Learn More.
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
