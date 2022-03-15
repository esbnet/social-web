import styled from "styled-components";

export const Container = styled.div`
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
`;
