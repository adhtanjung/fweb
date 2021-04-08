import styled from "styled-components";

export default styled.div`
	::-webkit-scrollbar {
		width: 4px;
		background-color: #212121;
	}
	::-webkit-scrollbar-thumb {
		background: rgba(255, 128, 0, 0.5);
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 128, 0, 1);
		border-radius: 10px;
	}
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	/* moz */
	::-moz-scrollbar {
		width: 4px;
		background-color: #212121;
	}

	overflow: auto;
	height: 500px;
`;
