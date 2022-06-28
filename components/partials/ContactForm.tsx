import React from "react";

const ContactForm = () => {
	return (
		<section className="section contact" id="contact">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="text-center mb-5">
							<h3 className="heading mb-3">
								<span className="text-primary">Contact </span>Us
							</h3>
							<p className="text-muted mb-0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					{/*end col*/}
				</div>
				<div className="row justify-content-around g-4">
					<div className="col-lg-6">
						<form
							method="post"
							onSubmit={() => true}
							className="contact-form"
							name="myForm"
							id="myForm"
						>
							<span id="error-msg" />
							<div className="row">
								<div className="col-lg-6">
									<div className="position-relative mb-3">
										<span className="input-group-text">
											<i className="mdi mdi-account-outline" />
										</span>
										<input
											name="name"
											id="name"
											type="text"
											className="form-control"
											placeholder="Enter your name*"
										/>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="position-relative mb-3">
										<span className="input-group-text">
											<i className="mdi mdi-email-outline" />
										</span>
										<input
											name="email"
											id="email"
											type="email"
											className="form-control"
											placeholder="Enter your email*"
										/>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="position-relative mb-3">
										<span className="input-group-text">
											<i className="mdi mdi-file-document-outline" />
										</span>
										<input
											name="subject"
											id="subject"
											type="text"
											className="form-control"
											placeholder="Subject"
										/>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="position-relative mb-3">
										<span className="input-group-text align-items-start">
											<i className="mdi mdi-comment-text-outline" />
										</span>
										<textarea
											name="comments"
											id="comments"
											rows={4}
											className="form-control"
											placeholder="Enter your message*"
											defaultValue={""}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-12">
									<input
										type="submit"
										id="submit"
										name="send"
										className="btn btn-primary"
										defaultValue="Send Message"
									/>
								</div>
							</div>
						</form>
						{/*end form*/}
					</div>
					{/*end col*/}
					<div className="col-lg-4">
						<div className="contact-details mb-4 mb-lg-0">
							<p className="mb-3">
								<i className="mdi mdi-email-outline align-middle text-muted fs-20 me-2" />
								<span className="fw-medium">support@website.com</span>
							</p>
							<p className="mb-3">
								<i className="mdi mdi-web align-middle text-muted fs-20 me-2" />
								<span className="fw-medium">www.website.com</span>
							</p>
							<p className="mb-3">
								<i className="mdi mdi-phone align-middle text-muted fs-20 me-2" />
								<span className="fw-medium">+278 5678 8901</span>
							</p>
							<p className="mb-3">
								<i className="mdi mdi-hospital-building text-muted fs-20 me-2" />
								<span className="fw-medium">9:00 AM - 6:00 PM</span>
							</p>
							<p className="mb-3">
								<i className="mdi mdi-map-marker-outline text-muted fs-20 me-2" />
								<span className="fw-medium">12, MK Street, NC, 452768.</span>
							</p>
						</div>
						{/*end contact-details*/}
					</div>
					{/*end col*/}
				</div>
				{/*end row*/}
			</div>
			{/*end container*/}
		</section>
	);
};

export default ContactForm;
