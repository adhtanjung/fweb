import React from "react";
import Button from "../components/Button";
import Link from "next/link";
export default function about(props) {
	return (
		<div>
			about
			<Link href="/">
				<Button>go back</Button>
			</Link>
		</div>
	);
}
