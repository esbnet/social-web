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

	.rightbarTitle {
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.rightbarInfo {
		margin-bottom: 30px;

		.rightbarInfoItem {
			margin-bottom: 10px;
		}

		.rightbarInfoKey {
			font-weight: 500;
			marfin-right: 15px;
			color: #555;
		}

		.rightbarInfoValue {
			font-weight: 300;
			color: #777;
		}
	}

	.rightbarFollowings {
		display: flex;
		align-content: flex-start;
		flex-wrap: wrap;
		justify-content: space-between;


		.rightbarFollowing {
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;
			curson: pointer;
		}

		.rightbarFollowingImage {
			width: 100px;
			height: 100px;
			object-fit: cover;
			border-radius: 5px;
		}

		.rightbarFollowingName {
			text-align: center;
			font-size: 12px;
			font-weight: 200;
			color: #555;
		}
	}
`;
