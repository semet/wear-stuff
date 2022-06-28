/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const NavigationBar = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			//update isSticky on window scroll
			setIsSticky(window.scrollY >= 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isSticky]);
	return (
		<nav
			className={`navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky ${
				isSticky ? "nav-sticky" : ""
			}`}
			id="navbar"
		>
			<div className="container">
				{/* LOGO */}
				<a className="navbar-brand text-uppercase" href="index-1.html">
					<img
						className="logo-light"
						src="/images/logo-light.png"
						alt="wear-stuff"
						height={30}
					/>
					<img
						className="logo-dark"
						src="/images/logo-dark.png"
						alt="wear-stuff"
						height={30}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="mdi mdi-menu" />
					{/* toggle button */}
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mx-auto" id="navbar-navlist">
						<li className="nav-item">
							<a className="nav-link active" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#services">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#features">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#testimonials">
								Testimonials
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link mb-3 mb-lg-0" href="#contact">
								Contact
							</a>
						</li>
					</ul>
					{/* Button trigger modal */}
					<a href="#" className="btn btn-primary nav-btn">
						{" "}
						Sign Up{" "}
					</a>
					{/* Nav btn */}
				</div>
			</div>
			{/* End container */}
		</nav>
	);
};

export default NavigationBar;
