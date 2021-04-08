import Head from "next/head";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import LatestUpdates from "../components/LatestUpdates";
import ContainerStyles from "../styledComponents/ContainerStyles";
import ContentContainerStyles from "../styledComponents/ContentContainerStyles";
import SubContentStyles from "../styledComponents/SubContentStyles";
import Sub1 from "../components/landing/Sub1";
import Sub2 from "../components/landing/Sub2";
import Sub3 from "../components/landing/Sub3";
import ScrollToTop from "../components/ScrollToTop";
export default function Home() {
	return (
		<ContentContainerStyles>
			<Head>
				<title>Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LatestUpdates />
			{/* <Link href="/about?search=1">
				<Button>click me</Button>
			</Link> */}
			<SubContentStyles>
				<Sub1 />
				<Sub2 />
				<Sub3 />
			</SubContentStyles>
			<ScrollToTop />
		</ContentContainerStyles>
	);
}
