import styled from "styled-components";

export default styled.button`
	@media (min-width: 768px) {
		display: none;
	}
	background-color: transparent;
	outline: none;
	border: none;
	:hover {
		transition: 250ms;
		transform: translateY(-3px);
		background-color: rgba(0, 0, 0, 0.1);
	}
`;
