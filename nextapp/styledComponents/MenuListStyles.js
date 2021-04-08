import styled from "styled-components";

export default styled.ul`
	@media (min-width: 768px) {
		display: none;
	}
	background-color: #212121;
	position: absolute;
	height: auto;
	width: 100%;
	display: flex;
	right: 0;
	top: 55px;
	color: #ccc;
	border-radius: 0 0 10px 0;
	box-shadow: 0 1px 10px rgba(255, 128, 0, 0.2);
	padding: 20px;
	flex-direction: column;
	li {
		color: #ccc;
		font-size: 1rem;
		list-style: none;
	}
`;
