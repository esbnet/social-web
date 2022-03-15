import styled from "styled-components";

export const Container = styled.div`
	flex: 3.5;

	.rightBarWrapper {
		padding: 20px 20px 0 0;

		.birthdayContainer {
			display: flex;
			align-items: center;

			.birthdayImage {
				width: 40px;
				height: 40px;
				margin-right: 10px;
			}

			.birthdayText {
				font-size: 15px;
				font-weight: 300;
			}
		}

		.rightbarAd {
			width: 100%;
			border-radius: 5px;
			margin: 10px 0;
		}

		.rightbarTitle {
      margin-bottom: 10px;
		}

		.rightbarFriendList {
			padding: 0;
			margin: 0;
			lsit-style: none;
		}
	}
`;
