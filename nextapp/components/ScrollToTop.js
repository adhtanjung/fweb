import ScrollToTopBtnStyles from "../styledComponents/ScrollToTopBtnStyles";

export default function ScrollToTop() {
	return (
		<ScrollToTopBtnStyles onClick={() => window.scrollTo(0, 0)}>
			to top
		</ScrollToTopBtnStyles>
	);
}
