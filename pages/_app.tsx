import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<meta charSet="utf-8" />
				<title>Wear Stuff</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Wear Stuff Landing Page" />
				<meta
					name="keywords"
					content="Wear Stuff, Shopy, Wearstuff, Lombok Wear Stuff"
				/>
				<meta content="Mollusca" name="author" />
			</Head>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
				crossOrigin="anonymous"
			/>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
