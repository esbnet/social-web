import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  .sidebarFriendListItem {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
    
		.sidebarFriendImage {
			width: 32px;
			height: 32px;
			border-radius: 50%;
			object-fit: cover;
			margin-right: 10px;
		}

		.sidebarFriendName {
			font-size: 14px;
		}
	}
`;
