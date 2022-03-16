import styled from "styled-components";

export const Container = styled.div`

	width: 100vw;
	height: 100vh;
	background-color: #f0f2f5;
	display: flex;
	align-items: center;
	justify-content: center;

	.loginWrapper {
		width: 70%;
		height: 70%;
    display: flex;

    .loginLeft, .loginRight {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .loginLogo {
        font-size: 50px;;
        font-weight: 800;
        color: #1775ee;
        margin-bottom: 20px;
      }
      .loginDesc {
        font-size: 24px;
      }

      .loginBox {
        height: 400px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .loginInput {
          height: 50px;
          border-radius: 10px;
          border: 1px solid #dfe1e6;
          font-size: 18px;
          padding: 0 20px;
        }

        .loginInput:focus {
          outline: none;
        }

        .loginButton{
          height: 50px;
          border-radius: 10px;
          border: 1px solid #dfe1e6;
          font-size: 18px;
          padding: 0 20px;
          background: #1775ee;
          color: #fff;
          cursor: pointer;
        }

        .loginButton:hover {
          background: #0f4c81;
        }

        .loginForgot {
          text-align: right;
          margin-top: -20px;
          color: #1775ee;
          cursor: pointer;
        }

        .loginForgot:focus {
          color: #0f4c81;
        }


        .loginRegisterButton {
          height: 50px;
          border-radius: 10px;
          border: 1px solid #dfe1e6;
          font-size: 18px;
          padding: 0 20px;
          background: #42b72a;
          color: #fff;
          cursor: pointer;
        }

        .loginRegisterButton:hover {
          background: #2e9d1f;
        }

      }
    }

    
	}
`;
