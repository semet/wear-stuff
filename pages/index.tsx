/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React, { Fragment } from "react";
import NavigationBar from "../components/header/NavigationBar";
import AboutSection from "../components/partials/AboutSection";
import AppFooter from "../components/partials/AppFooter";
import BackToTop from "../components/partials/BackToTop";
import ContactForm from "../components/partials/ContactForm";
import FeatureSection from "../components/partials/FeatureSection";
import HomeBanner from "../components/partials/HomeBanner";
import ServiceSection from "../components/partials/ServiceSection";
import TestimonySection from "../components/partials/TestimonySection";

const Home: NextPage = () => {
	return (
		<Fragment>
			{/* Main Navigation Bar */}
			<NavigationBar />
			{/* Banner Home */}
			<HomeBanner />
			{/* Service Section */}
			<ServiceSection />
			{/* About Section */}
			<AboutSection />
			{/* Feature Section */}
			<FeatureSection />
			{/* Testimonial */}
			<TestimonySection />
			{/* Contact Form */}
			<ContactForm />
			{/* Footer */}
			<AppFooter />
			{/* Back to top */}
			<BackToTop />
		</Fragment>
	);
};

export default Home;
