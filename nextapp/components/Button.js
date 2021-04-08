import styled from "styled-components";

export default styled.button`
	background-color: red;
	outline-color: none;
	border: none;
	:focus {
		outline: none;
	}
	:hover {
		background-color: blue;
		transition: 250ms;
		color: white;
	}
`;
