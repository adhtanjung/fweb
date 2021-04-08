import styled from "styled-components";

export default styled.button`
	@media (min-width: 768px) {
		display: none;
	}
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	font-size: 16px;
	border: none;
	outline: none;
	background-color: rgba(255, 128, 0, 0.7);
	color: white;
	cursor: pointer;
	padding: 15px;
	border-radius: 4px;
`;
