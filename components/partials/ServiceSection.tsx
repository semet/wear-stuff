import React from "react";

const ServiceSection = () => {
	return (
		<section className="section services" id="services">
			<div className="container">
				<div className="row g-4">
					<div className="col-lg-12">
						<div className="text-center mb-5">
							<h3 className="heading">
								Our <span className="text-primary">Services</span>
							</h3>
							<p>
								Nam egestas mi sit amet orci dignissim tempor Integer tincidunt
								nunc mauris in egestas nibh.
							</p>
						</div>
					</div>
					<div className="col-lg-3" data-aos="fade-right" data-aos-duration={1000}>
						<div className="card">
							<div className="card-body">
								<div className="box">
									<div className="flex-shrink-0 my-3">
										<div className="avatar-sm align-items-center">
											<div className="avatar-title">
												<i className="mdi mdi-biohazard" />
											</div>
										</div>
									</div>
									<h4>Web Design</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Excepturi, quae?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3" data-aos="fade-down" data-aos-duration={1000}>
						<div className="card">
							<div className="card-body">
								<div className="box">
									<div className="flex-shrink-0 my-3">
										<div className="avatar-sm align-items-center">
											<div className="avatar-title">
												<i className="mdi mdi-desktop-mac" />
											</div>
										</div>
									</div>
									<h4>Web Development</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Excepturi, quae?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3" data-aos="fade-down" data-aos-duration={1000}>
						<div className="card">
							<div className="card-body">
								<div className="box">
									<div className="flex-shrink-0 my-3">
										<div className="avatar-sm align-items-center">
											<div className="avatar-title">
												<i className="mdi mdi-shield-account-outline" />
											</div>
										</div>
									</div>
									<h4>Web Security</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Excepturi, quae?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3" data-aos="fade-left" data-aos-duration={1000}>
						<div className="card">
							<div className="card-body">
								<div className="box">
									<div className="flex-shrink-0 my-3">
										<div className="avatar-sm align-items-center">
											<div className="avatar-title">
												<i className="mdi mdi-email-open-multiple-outline" />
											</div>
										</div>
									</div>
									<h4>Mail</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Excepturi, quae?
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
