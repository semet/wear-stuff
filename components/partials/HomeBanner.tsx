/* eslint-disable @next/next/no-img-element */
import React from "react";

const HomeBanner = () => {
	return (
		<section className="section home home-9 overflow-hidden" id="home">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-6">
						<div className="bg-image">
							<div className="home-heading">
								<h1 className="mb-3 text-white">
									We Build Dig
									<span className="home-text">ital Products For&nbsp;</span>
									Your Success
									<span
										className="typewrite text-primary d-none d-sm-inline-block"
										data-period={2000}
										data-type='[ "Tydek" ]'
									>
										<span className="wrap" />
									</span>
								</h1>
							</div>
							<p className="">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
								commodo ligula eget dolor. Aenean massa. Cum sociis natoque
								penatibus et magnis dis parturient montes, nascetur
							</p>
							<div className="home-btn hstack gap-2 flex-column d-sm-block mb-5 mb-sm-0">
								<a className="btn btn-primary me-1" href="javascript:void(0)">
									Request Free Demo
								</a>
							</div>
						</div>
					</div>
					{/* end col*/}
					<div className="col-lg-5">
						<div className="bg-image">
							<img src="/images/home-9.png" className="home-img" alt="" />
						</div>
					</div>
					{/* col end */}
				</div>
				{/* end row*/}
			</div>
			{/*end container*/}
		</section>
	);
};

export default HomeBanner;
