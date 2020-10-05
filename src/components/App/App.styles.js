import styled from "styled-components";
import bg from "../../assets/bg.svg";

export const Wrapper = styled.div`
	height: 100vh;
	color: black;
	background-color: #f8f5ec;
	background-image: url(${bg});
	background-size: cover;
	background-position: center center;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	width: 734px;
	height: 574px;

	background-color: #ffffff;

	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
	border-radius: 20px;
`;

export const TitleH2 = styled.h2`
	color: #004d61;
	font-size: 18px;
	font-weight: 400;
	text-transform: lowercase;
	height: 32px;
	margin-top: 12px;
`;

export const TitleH1 = styled.h1`
	color: #004d61;
	font-size: 24px;
	text-transform: uppercase;
`;

export const ContainerStats = styled.div`
	padding: 10px;
	height: 454px;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
`;

export const Button = styled.button`
	margin-top: 40px;
	background-color: #00abad;
	border: none;
	border-radius: 7px;
	color: white;
	padding: 10px 24px;
	text-align: center;
	font-size: 14px;
	cursor: pointer;
`;
