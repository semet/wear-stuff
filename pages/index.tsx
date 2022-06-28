/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React, { Fragment } from "react";
import AppFooter from "../components/partials/AppFooter";
import BackToTop from "../components/partials/BackToTop";
import HomeBanner from "../components/partials/HomeBanner";
import ContactForm from "../components/partials/ContactForm";
import AboutSection from "../components/partials/AboutSection";
import NavigationBar from "../components/header/NavigationBar";
import FeatureSection from "../components/partials/FeatureSection";
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
