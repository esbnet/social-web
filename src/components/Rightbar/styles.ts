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

			.rightbarFriend {
				display: flex;
				align-items: center;
				margin-bottom: 15px;

				.rightbarProfileImageContainer {
					margin-right: 10px;
					position: relative;
				}

				.rightProfileImage {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					object-fit: cover;
				}

				.rightbarOnline {
					width: 12px;
					height: 12px;
					border-radius: 50%;
					background-color: #00ff00;
					position: absolute;
					top: -2px;
					right: 0px;
					border: 1px solid #fff;
				}

				.rightbarFriendName {
					font-size: 15px;
					font-weight: 300;
				}
			}
		}
	}
`;
