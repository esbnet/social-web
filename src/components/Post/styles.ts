import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	border-radius: 10px;
	-webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
	box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
	margin: 30px 0;

	.postWrapper {
		padding: 10px;
	}

	.postTop {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.postTopLeft {
		display: flex;
		align-items: center;

		.postProfileImage {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			object-fit: cover;
			margin-right: 10px;
		}

		.postUserName {
			font-size: 14px;
			font-weight: 500;
			margin: 0 10px;
		}

		.postDate {
			font-size: 12px;
			color: #8e8e8e;
		}
	}

	.postTopRight {
		.postMore {
			cursor: pointer;
		}
	}

	.postCenter {
		margin: 20px 0;

		.postImage {
			margin-top: 20px;
			width: 100%;
			max-height: 500px;
			object-fit: content;
		}
	}

	.postBottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;

		.postBottonLeft {
			display: flex;
			align-items: center;

			.postLikeIcon {
				width: 24px;
				height: 24px;
				margin-right: 5px;
				cursor: pointer;
			}

			.postLikeCounter {
				font-size: 12px;
				color: #8e8e8e;
			}
		}

		.postBottonRight {
			display: flex;
			align-items: center;

			.postCommentCounter {
				font-size: 12px;
				color: #8e8e8e;
        cursor: pointer;
        border-bottom: 1px dashed #8e8e8e;
			}
		}
	}
`;
