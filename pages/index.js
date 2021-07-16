import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import LineChart from '../components/LineChart';

import Hero3 from '../components/Hero3';
import Hero4 from '../components/Hero4';


export default function Home() {
	return (
		<div>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="dog.css" />
			<link
				href="https://fonts.googleapis.com/css?family=Prompt"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Prompt:wght@200&family=Roboto:wght@500&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
				rel="stylesheet"
				integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
				crossOrigin="anonymous"
			/>
			<title>เช็คสถานการณ์ Covid-19 ได้ที่นี่</title>
			<section id="hero">
				<Navbar />
				<Hero1 />
			</section>
			<Hero2 />
			{/* map */}
			
			<Hero3 />
			<Hero4 />
		</div>
	);
}
