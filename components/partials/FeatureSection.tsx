/* eslint-disable @next/next/no-img-element */
import React from "react";

const FeatureSection = () => {
	return (
		<section className="section features" id="features">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="text-center mb-5">
							<h3 className="heading">
								Amazing <span className="text-primary">Features</span>
							</h3>
							<p className="text-muted mb-0">
								Nam egestas mi sit amet orci dignissim tempor Integer tincidunt
								nunc mauris in egestas nibh.
							</p>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="row align-items-center justify-content-center g-3">
							<div className="col-lg-3">
								<div className="row mx-auto g-3">
									<div className="col-lg-12">
										<div className="card features-box border-0">
											<div className="card-body features-body">
												<div className="d-flex">
													<div className="flex-shrink-0">
														<div className="align-items-center">
															<div className="features-icon">
																<i className="mdi mdi-earth" />
															</div>
														</div>
													</div>
													<div className="flex-grow-1 align-self-center ms-3">
														<h6 className="mb-0">Feature Name</h6>
														<span className="text-muted">Sub Headline</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="card features-box border-0">
											<div className="card-body features-body">
												<div className="d-flex">
													<div className="flex-shrink-0">
														<div className="align-items-center">
															<div className="features-icon">
																<i className="mdi mdi-message-processing-outline" />
															</div>
														</div>
													</div>
													<div className="flex-grow-1 align-self-center ms-3">
														<h6 className="mb-0">Message</h6>
														<span className="text-muted">Sub Headline</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="card features-box border-0">
											<div className="card-body features-body">
												<div className="d-flex">
													<div className="flex-shrink-0">
														<div className="align-items-center">
															<div className="features-icon">
																<i className="mdi mdi-bank" />
															</div>
														</div>
													</div>
													<div className="flex-grow-1 align-self-center ms-3">
														<h6 className="mb-0">Sell Everywhere</h6>
														<span className="text-muted">Sub Headline</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="card features-box border-0">
									<div className="card-body features-body p-0">
										<img
											src="/images/features.png"
											className="img-fluid features-img"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="row mx-auto g-3">
									<div className="col-lg-12">
										<div className="card features-box border-0">
											<div className="card-body features-body">
												<div className="d-flex">
													<div className="flex-shrink-0">
														<div className="align-items-center">
															<div className="features-icon">
																<i className="mdi mdi-credit-card-outline" />
															</div>
														</div>
													</div>
													<div className="flex-grow-1 align-self-center ms-3">
														<h6 className="mb-0">Secured Payments</h6>
														<span className="text-muted">Sub Headline</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="card features-box border-0">
											<div className="card-body features-body">
												<div className="d-flex">
													<div className="flex-shrink-0">
														<div className="align-items-center">
															<div className="features-icon">
																<i className="mdi mdi-notebook-multiple" />
															</div>
														</div>
													</div>
													<div className="flex-grow-1 align-self-center ms-3">
														<h6 className="mb-0">Customer Records</h6>
														<span className="text-muted">Sub Headline</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="card features-box border-0">
											<div className="card-body features-body">
												<div className="d-flex">
													<div className="flex-shrink-0">
														<div className="align-items-center">
															<div className="features-icon">
																<i className="mdi mdi-ambulance" />
															</div>
														</div>
													</div>
													<div className="flex-grow-1 align-self-center ms-3">
														<h6 className="mb-0">Feature Name</h6>
														<span className="text-muted">Sub Headline</span>
													</div>
												</div>
											</div>
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

export default FeatureSection;
