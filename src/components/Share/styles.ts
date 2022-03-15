import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 170px;
	border-radius: 10px;
	-webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
	box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);

	.shareWrapper {
		padding: 10px;

		.shareTop {
			display: flex;
			align-items: center;

			.shareProgileImgage {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				object-fit: cover;
				margin-right: 10px;
			}

			.shareInput {
				width: 100%;
				height: 100%;
				border: none;
				outline: none;
				font-size: 14px;
				// font-weight: bold;
				color: #000;
				padding: 0;
				margin: 0;

				:focus {
					outline: none;
				}
			}
		}

		.shareSeparator {
			margin: 20px;
		}

		.shareBottom {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.shareOptions {
				display: flex;
				margin-left: 15px;

				.shareOption {
					display: flex;
					align-items: center;
					margin-right: 10px;
					curso: pointer;

					.shareIcon {
						font-size: 18px;
						margin-right: 5px;
					}

					.shareOptionText {
						font-size: 14px;
						font-height: 500;
					}
				}
			}

			.shareButton {
				border: none;
				padding: 7px;
				border-radius: 5px;
				background-color: green;
				font-weight: 500;
				margin-right: 20px;
				cursor: pointer;
				color: white;
			}
		}
	}
`;
