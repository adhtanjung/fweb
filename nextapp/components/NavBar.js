import { useState } from "react";
import ContainerStyles from "../styledComponents/ContainerStyles";
import Div from "../styledComponents/Div";
import HamburgerMenuStyles from "../styledComponents/HamburgerMenuStyles";
import LogoStyles from "../styledComponents/LogoStyles";
import NavStyles from "../styledComponents/NavStyles";
import RightNavBarStyles from "../styledComponents/RightNavBarStyles";
import MenuList from "./MenuList";

export default function NavBar() {
	const [open, setOpen] = useState(false);
	return (
		<NavStyles>
			<ContainerStyles>
				<div>
					<LogoStyles>fweb</LogoStyles>
				</div>
				<RightNavBarStyles>
					<li>Home</li>
					<li>Features</li>
					<li>About</li>
				</RightNavBarStyles>
				<HamburgerMenuStyles onClick={() => setOpen(!open)}>
					<svg
						className="w-6 h-6"
						width="32"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</HamburgerMenuStyles>
				{open ? <MenuList /> : null}
			</ContainerStyles>
		</NavStyles>
	);
}
