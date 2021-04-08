import styled from "styled-components";

export default styled.div`
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 20px;
	}
	display: grid;
	gap: 20px;
	padding: 0 20px;
	grid-template-columns: 1fr 2fr 3fr;
`;
