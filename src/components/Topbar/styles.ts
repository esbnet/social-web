import styled from "styled-components";

export const Container = styled.div`
	height: 50px;
	width: 100%;
	background: #1877f2;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 999;

	.topbarLeft {
		flex: 3;

		.logo {
			font-size: 24px;
			margin-left: 20px;
			font-weight: bold;
			color: #fff;
			cursor: pointer;
		}
	}

	.topbarCenter {
		flex: 5;

		.searchBar {
			width: 100%;
			height: 30px;
			background-color: #fff;
			border-radius: 30px;
			display: flex;
			align-items: center;
		}

		.seachBarIcon {
			font-size: 20px !important;
			margin-left: 10px;
		}

		.searchBarInput {
			border: none;
			width: 92%;

			:focus {
				outline: none;
			}
		}
	}

	.topbarRight {
		flex: 4;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #fff;

		.topbarLinks {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
			font-size: 14px;
			cursor: pointer;

      .topbarlink {
        margin: 10px;

        :hover {
          color: rgb(25, 25, 25, 0.8);
          shadow: 0px 0px 20px rgb(25, 25, 25, 0.8);
        }
      }
		}

		.topbarIcons {
			display: flex;

			.topbarIconItem {
				margin-right: 10px;
				cursor: pointer;
				position: relative;

				.topbarIconBadge {
					width: 15px;
					height: 15px;
					background: red;
					border-radius: 50%;
					color: #fff;
					position: absolute;
					top: -5px;
					right: -5px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 10px;
				}
			}
		}
	}

	.topbarImage {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;
