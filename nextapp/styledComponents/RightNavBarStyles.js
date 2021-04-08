import styled from "styled-components";
export default styled.ul`
	@media (max-width: 768px) {
		display: none;
	}
	display: flex;
	gap: 10px;
	list-style: none;

	li {
		cursor: pointer;
	}
	li:hover {
		transition: 250ms;
		border-bottom: white solid 1px;
		transform: translateY(-2px);
	}
`;
